// Description: Data for the visualization
// All x, y, radius values are percentages of the width and height of it's parent container
// Ex. x: 0, y: 0, radius: 0.25 would place the circle in the center of the parent container with a radius of 25% of the parent container
// Ex. x: 0.5, y: 0.5, radius: 0.25 would place the circle in the bottom right of the parent container with a radius of 25% of the parent container

const data = {
  circles: [
      {
          id: "it",
          parent: "global",
          title: "IT Act & Associated Framework",
          color: "#93C5FD",
          x: 0,
          y: 0,
          radius: 0.25,
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
      // {
      //     id: "agriculture",
      //     title: "Agriculture",
      //     color: "#86EFAC",
      //     x: 600,
      //     y: 200,
      //     radius: 120,
      //     boxes: [
      //         {
      //             id: "ag1",
      //             title: "Smart Farming",
      //             content: "Integration of technology in agriculture",
      //             x: 550,
      //             y: 180
      //         },
      //         {
      //             id: "ag2",
      //             title: "Sustainability",
      //             content: "Sustainable farming practices",
      //             x: 650,
      //             y: 220
      //         }
      //     ]
      // }
  ],
  lines: [
      {
          source: "it1",
          target: "ag1"
      },
      {
          source: "it2",
          target: "ag2"
      }
  ],

};

export { data };