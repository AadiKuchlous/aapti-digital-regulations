const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select("#diagram")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const global_group = svg.append("g");

const zoom = d3.zoom()
    .scaleExtent([0.5, 5])
    .on("zoom", (event) => {
        g.attr("transform", event.transform);
    });

svg.call(zoom);

const data = {
    circles: [
        {
            id: "it",
            title: "IT Act & Associated Framework",
            color: "#93C5FD",
            x: 300,
            y: 300,
            radius: 150,
            boxes: [
                {
                    id: "it1",
                    title: "Data Protection",
                    content: "Comprehensive framework for protecting personal data",
                    x: 250,
                    y: 250
                },
                {
                    id: "it2",
                    title: "Cybersecurity",
                    content: "Guidelines for maintaining digital security",
                    x: 350,
                    y: 350
                }
            ]
        },
        {
            id: "agriculture",
            title: "Agriculture",
            color: "#86EFAC",
            x: 600,
            y: 200,
            radius: 120,
            boxes: [
                {
                    id: "ag1",
                    title: "Smart Farming",
                    content: "Integration of technology in agriculture",
                    x: 550,
                    y: 180
                },
                {
                    id: "ag2",
                    title: "Sustainability",
                    content: "Sustainable farming practices",
                    x: 650,
                    y: 220
                }
            ]
        }
    ]
};

const circles = global_group.selectAll("g")
    .data(data.circles)
    .enter()
    .append("g");

circles.append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", d => d.radius)
    .attr("fill", d => d.color)
    .attr("opacity", 0.5)
    .attr("class", "circle");

circles.append("text")
    .attr("x", d => d.x)
    .attr("y", d => d.y - d.radius + 20)
    .attr("text-anchor", "middle")
    .attr("class", "circle-title")
    .text(d => d.title);

const boxes = circles.selectAll("g")
    .data(d => d.boxes)
    .enter()
    .append("g")
    .attr("class", "box")
    .attr("transform", d => `translate(${d.x}, ${d.y})`)
    .on("click", (event, d) => {
        showSideModal(d.title, d.content);
    });

boxes.append("rect")
    .attr("x", -50)
    .attr("y", -25)
    .attr("width", 100)
    .attr("height", 50)
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