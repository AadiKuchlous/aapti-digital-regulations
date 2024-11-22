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

export { data };