const sidenavObjects = [
  {
    id: "1",
    title: "Assignment and Carrier Data",
    expanded: false,
    itemChildren: [
      {
        id: "1.1",
        title: "Compliance Investigation Information"
      },
      {
        id: "1.2",
        title: "Assignment Purpose"
      },
      {
        id: "1.3",
        title: "Motor Carrier Data"
      }
    ]
  },
  {
    id: "2",
    title: "Sampled Drivers and Commercial Motor Vehicles",
    expanded: true,
    itemChildren: [
      {
        id: "2.1",
        title: "Drivers"
      },
      {
        id: "2.2",
        title: "CMVs"
      }
    ]
  },
  {
    id: "3",
    title: "Violation Data",
    expanded: true,
    itemChildren: [
      {
        id: "3.1",
        title: "Driver Qualification Review"
      },
      {
        id: "3.2",
        title: "Hours of Service Review"
      },
      {
        id: "3.3",
        title: "Drug/Alcohol Testing Review"
      },
      {
        id: "3.4",
        title: "Inspection/Repair/Maintenance (All carriers)"
      },
      {
        id: "3.5",
        title: "Passenger Vehicle Maintenance Requirements"
      },
      {
        id: "3.6",
        title: "Passenger Vehicle Maintenance & Operational Requirements"
      },
      {
        id: "3.7",
        title: "NYS Transportation Law Review"
      }
    ]
  },
  {
    id: "4",
    title: "Commercial Motor Vehicle Statistics",
    expanded: true,
    itemChildren: [
      {
        id: "4.1",
        title: "Generate report"
      }
    ]
  }
];
const footerObjects = [
  { title: "Agencies", url: "#", image: "" },
  { title: "App Directory", url: "#", image: "" },
  { title: "Counties", url: "#", image: "" },
  { title: "Events", url: "#", image: "" },
  { title: "Programs", url: "#", image: "" },
  { title: "Services", url: "#", image: "" }
];

export { sidenavObjects, footerObjects };
