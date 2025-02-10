import { data } from "./data.js";
import { min, calculateCoordFromRelative, calculateRelativeValue } from "./utils.js";

const height = window.innerHeight * 10;
const width = window.innerWidth * 10;

const RECT_WIDTH = window.innerWidth / 5;
const RECT_HEIGHT = RECT_WIDTH * 2;
const GLOBAL_CIRCLE_RADIUS = min(width, height) / 2;
const GLOBAL_CIRCLE_COORDS = {x: width / 2, y: height / 2};

const svg = d3.select("#diagram")
    .append("svg")
    .attr("id", "svg")
    .attr("width", width)
    .attr("height", height)
    .attr("xmlns", "http://www.w3.org/1999/xhtml");


const global_group = svg.append("g").attr("id", "global-group");

// Add a white circle to the center of the diagram
const global_circle = global_group.append("circle")
  .attr("cx", GLOBAL_CIRCLE_COORDS.x)
  .attr("cy", GLOBAL_CIRCLE_COORDS.y)
  .attr("r", GLOBAL_CIRCLE_RADIUS)
  .attr("fill", "rgba(0,0,0,0)");

// Add zoom functionality
const zoom = d3.zoom()
    .scaleExtent([0.05, 5])
    .on("zoom", (event) => {
      console.log(event.transform);
      global_group.attr("transform", event.transform);
    });

svg.call(zoom);
svg.on("dblclick.zoom", null); // Disable double-click zoom globally
svg.call(zoom.transform, d3.zoomIdentity.scale(0.1));

// Create a group for each circle with the data
const circles = global_group.selectAll("g")
    .data(data.circles.map(circle => {
      return {
        ...circle,
        cx: calculateCoordFromRelative(circle.x, Number(global_circle.attr("cx")), Number(global_circle.attr("r"))*2),
        cy: calculateCoordFromRelative(circle.y, Number(global_circle.attr("cy")), Number(global_circle.attr("r"))*2),
        r: calculateRelativeValue(circle.radius, Number(global_circle.attr("r")))
      }
    }))
    .enter()
    .append("g");

// Add a circle for each group
circles.append("circle")
    .attr("cx", d => d.cx)
    .attr("cy", d => d.cy)
    .attr("r", d => d.r)
    .attr("fill", d => d.color)
    .attr("opacity", 0.5)
    .attr("class", "circle")
    .attr("id", d => d.id);

// Add a title to each circle
circles.append("text")
    .attr("x", d => calculateCoordFromRelative(0, Number(d3.select(`#${d.id}`).attr("cx")), Number(d3.select(`#${d.id}`).attr("r"))))
    .attr("y", d => calculateCoordFromRelative(d.title_low?0.7:-0.6, Number(d3.select(`#${d.id}`).attr("cy")), Number(d3.select(`#${d.id}`).attr("r"))))
    .attr("text-anchor", "middle")
    .attr("font-size", "4em")
    .attr("class", "circle-title")
    .text(d => d.title);

// Handle double-click for zoom-to-fit functionality
svg.selectAll("circle").on("dblclick", (event, d) => {
  // Calculate the scale and translation to fit the element
  const scale = Math.min(
    width / (2 * d.r),
    height / (2 * d.r)
  )/10 * 0.9;

  console.log(scale);

  const translateX = (width / 2) - (d.cx * scale);
  const translateY = (height / 2) - (d.cy * scale);

  console.log(d.cx, d.cy);
  console.log(translateX, translateY);

  // Smoothly transition to the new zoom
  svg
  // .transition()
    // .duration(750)
    .call(
      zoom.transform,
      d3.zoomIdentity
      // .translate(translateX, translateY)
      .translate(0, 0)
      .scale(scale)
    );
});


//Add a group for each box in each circle with the data and onclick event
const boxes = circles.selectAll("g")
    .data(d => d.boxes.map(box => (
      {...box, parent: d.id,
        myX: calculateCoordFromRelative(box.x, Number(d3.select(`#${d.id}`).attr("cx")), Number(d3.select(`#${d.id}`).attr("r"))),
        myY: calculateCoordFromRelative(box.y, Number(d3.select(`#${d.id}`).attr("cy")), Number(d3.select(`#${d.id}`).attr("r"))),
        ...data.documents.find(data => data.id == box.id)
      })))
    .enter()
    .append("g")
    .attr("class", "box")
    .attr("id", d => d.id)
    .attr("transform", d => `translate(${d.myX}, ${d.myY})`)
    .on("click", (event, d) => {
        showSideModal(d);
    });

// Add a rectangle and text to each box
boxes.append("foreignObject")
    .attr("x", -(RECT_WIDTH / 2))
    .attr("y", -(RECT_HEIGHT / 2))
    .attr("width", RECT_WIDTH)
    .attr("height", RECT_HEIGHT) // TODO: Make this dynamic or add height data to the data.js
    .append("xhtml:div")
    .attr("class", "box-content")
    .text(d => d.title)
    .append(d => {
      let div = document.createElement("div");
      div.classList.add("box-types-container");
      let types = d.type.split(", ");
      for (let i = 0; i < types.length; i++) {
        let span = document.createElement("div");
        span.textContent = types[i];
        span.className = `box-type-${types[i].toLowerCase()} box-type`;
        div.appendChild(span);
      }
      return div;
    });


let mySVG = document.getElementById("global-group");
let allBoxes = Array.from(document.getElementsByClassName("box")).forEach(
  box => {
    mySVG.insertBefore(box, null);
  });


function showSideModal(data) {
    const sideModal = document.getElementById("side-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalLink = document.getElementById("modal-link");
    const modalDate = document.getElementById("modal-date");
    const modalContent = document.getElementById("modal-content");
    const closeBtn = document.getElementById("close-modal");

    modalTitle.textContent = data.title;
    modalContent.textContent = data.description;
    modalDate.textContent = data.initial_year_of_publication;
    modalLink.href = data.link;
    modalLink.textContent = data.link;
    sideModal.classList.add("open");

    closeBtn.onclick = function() {
        sideModal.classList.remove("open");
    }
}

// Close the side modal when clicking outside of it
document.addEventListener("click", function(event) {
    const sideModal = document.getElementById("side-modal");
    const isClickInsideModal = sideModal.contains(event.target);
    const isClickOnBox = event.target.closest(".box");

    if (!isClickInsideModal && !isClickOnBox && sideModal.classList.contains("open")) {
        sideModal.classList.remove("open");
    }
});

// Prevent closing when clicking inside the modal
document.querySelector(".side-modal-content").addEventListener("click", function(event) {
    event.stopPropagation();
});

// Handle window resize
window.addEventListener("resize", function() {
    svg.attr("width", window.innerWidth)
       .attr("height", window.innerHeight);
});