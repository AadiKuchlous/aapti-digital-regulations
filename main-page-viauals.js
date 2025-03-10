import { data } from "./data.js";
import { showSideModal } from "./components/side-modal.js";
import { min, calculateCoordFromRelative, calculateRelativeValue } from "./utils.js";

const height = window.innerHeight * 10;
const width = window.innerWidth * 10;

const RECT_WIDTH = window.innerWidth / 5;
const RECT_HEIGHT = RECT_WIDTH * 2;
const GLOBAL_CIRCLE_RADIUS = min(width, height) / 2;
const GLOBAL_CIRCLE_COORDS = {x: width / 2, y: height / 2};

const defaultZoom = 0.1;

const svg = d3.select("#diagram")
    .append("svg")
    .attr("id", "svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", `0 0 ${width} ${height}`)
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
    .interpolate(d3.interpolate)
    .on("zoom", (event) => {
      console.log(event.transform);
      d3.select('svg g')
		    .attr('transform', event.transform);
    });

svg.call(zoom);
svg.on("dblclick.zoom", null); // Disable double-click zoom globally
svg.call(zoom.transform, d3.zoomIdentity.scale(defaultZoom));

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
  .attr("y", d => calculateCoordFromRelative(d.title_low ? 0.7 : -0.6, Number(d3.select(`#${d.id}`).attr("cy")), Number(d3.select(`#${d.id}`).attr("r"))))
  .attr("text-anchor", "middle")
  .attr("font-size", "4em")
  .attr("class", "circle-title")
  .text(d => d.title);

// Handle double-click for zoom-to-fit functionality
svg.selectAll("circle").on("dblclick", (event, d) => {
  // Calculate the scale and translation to fit the element
  const newScale = Math.min(
    width / (2 * d.r),
    height / (2 * d.r)
  )/10 * 0.9;
  
  let translateXnew = newScale*(-d.cx) + (defaultZoom*width/2);
  let translateYnew = newScale*(-d.cy) + (defaultZoom*height/2);

  svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity.translate(translateXnew, translateYnew).scale(newScale));
  
})
.on("click", (event, d) => {
  window.location.href = `category${d.link}`;
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
    .attr("transform", d => `translate(${d.myX}, ${d.myY})`);

// Add a rectangle and text to each box
boxes.append("foreignObject")
    .attr("x", -(RECT_WIDTH / 2))
    .attr("y", -(RECT_HEIGHT / 2))
    .attr("width", RECT_WIDTH)
    .attr("height", RECT_HEIGHT)
    .append("xhtml:div")
    .attr("class", "box-content")
    .on("click", (event, d) => {
      showSideModal(d);
    })
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
document.querySelectorAll(".box").forEach(box => {
    mySVG.insertBefore(box, null);
});
document.querySelectorAll(".box").forEach(box => {
  let computedFontSize = GLOBAL_CIRCLE_RADIUS * 0.005;
  box.style.fontSize = `${computedFontSize}px`;
});

// Handle window resize
window.addEventListener("resize", function() {
    svg.attr("width", window.innerWidth)
       .attr("height", window.innerHeight);
});

// Adjust height of each box to fit the content
d3.selectAll("foreignObject").each(function() {
  const foreignObject = d3.select(this); // Select the current foreignObject
  const div = foreignObject.select("div"); // Select the inner div

  setTimeout(() => {
    const computedStyle = window.getComputedStyle(div.node());
    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingBottom = parseFloat(computedStyle.paddingBottom);
    
    const contentHeight = div.node().scrollHeight + paddingTop + paddingBottom;
    foreignObject.attr("height", contentHeight);
  }, 0);
});
