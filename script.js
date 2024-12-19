import { data } from "./data.js";
import { min } from "./utils.js";

const height = window.innerHeight;
const width = window.innerWidth;

const RECT_WIDTH = 100;
const RECT_HEIGHT = RECT_WIDTH / 2;
const GLOBAL_CIRCLE_RADIUS = min(width, height) / 2;
const GLOBAL_CIRCLE_COORDS = {x: width / 2, y: height / 2};

const svg = d3.select("#diagram")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


const global_group = svg.append("g");

// Add a white circle to the center of the diagram
const global_circle = global_group.append("circle")
  .attr("cx", GLOBAL_CIRCLE_COORDS.x)
  .attr("cy", GLOBAL_CIRCLE_COORDS.y)
  .attr("r", GLOBAL_CIRCLE_RADIUS)
  .attr("fill", "white");

// Add zoom functionality
const zoom = d3.zoom()
    .scaleExtent([0.5, 5])
    .on("zoom", (event) => {
      global_group.attr("transform", event.transform);
    });

svg.call(zoom);

// Create a group for each circle with the data
const circles = global_group.selectAll("g")
    .data(data.circles)
    .enter()
    .append("g");

// Add a circle for each group
circles.append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", d => d.radius)
    .attr("fill", d => d.color)
    .attr("opacity", 0.5)
    .attr("class", "circle");

// Add a title to each circle
circles.append("text")
    .attr("x", d => d.x)
    .attr("y", d => d.y - (d.radius / 2))
    .attr("text-anchor", "middle")
    .attr("class", "circle-title")
    .text(d => d.title);


//Add a group for each box in each circle with the data and onclick event
const boxes = circles.selectAll("g")
    .data(d => d.boxes)
    .enter()
    .append("g")
    .attr("class", "box")
    .attr("transform", d => `translate(${d.x}, ${d.y})`)
    .on("click", (event, d) => {
        showSideModal(d.title, d.content);
    });

// Add a rectangle and text to each box
boxes.append("rect")
    .attr("x", -(RECT_WIDTH / 2))
    .attr("y", -(RECT_HEIGHT / 2))
    .attr("width", RECT_WIDTH)
    .attr("height", RECT_HEIGHT)
    .attr("rx", 4);

boxes.append("text")
    .text(d => d.title);

function showSideModal(title, content) {
    const sideModal = document.getElementById("side-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalContent = document.getElementById("modal-content");
    const closeBtn = document.getElementById("close-modal");

    modalTitle.textContent = title;
    modalContent.textContent = content;
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