export const PROJECTS = [
  {
    title: 'Web-based Data Management System for DOST funded MSMEs',
    description: 'Web-based system that helps DOST-funded MSMEs digitally manage inventory, sales, and reports. Enables MSMEs to submit business data and lets program managers track progress via dashboards and analytics.',
    slug: 'dost-data-management-THESIS',
    role: 'Frontend lead — React, UI/UX',
    timeline: 'Jan 2023 — Jul 2023',
    problem: 'MSMEs and program managers relied on manual spreadsheets and scattered reporting which caused delays, inconsistent data, and limited visibility into program performance.',
    approach: [
      'Conduct stakeholder interviews and map reporting workflows',
      'Design responsive UI prototypes and data entry forms',
      'Implement React frontend with Firebase Auth and Firestore',
      'Build admin dashboards with charts and exportable reports',
      'Iterate with pilot MSMEs and roll out incremental improvements'
    ],
    outcome: 'Streamlined data submission and monitoring workflows, improved data consistency, and reduced manual reporting overhead for program staff and participating MSMEs.',
    image: '/public/project1.png',
    stack: ['React', 'Firebase', 'Node.js', 'Python', 'CSS', 'React Bootstrap']
  },
  {
    title: 'RGRR Webmaker attendance system',
    description: 'Web-based attendance tracking system for RGRR Webmaker interns.',
    slug: 'rgrr-webmaker-attendance - Commissioned Project',
    role: 'Frontend developer — React, UI/UX',
    timeline: 'Aug 2022 — Dec 2022',
    problem: 'The attendance process for interns was fragmented and hard to monitor, making it difficult for coordinators to track participation accurately.',
    approach: [
      'Map the existing attendance workflow and identify pain points',
      'Design a clean interface for attendance submission and review',
      'Build a responsive web app with real-time feedback and record tracking',
      'Integrate authentication and secure data storage',
      'Refine the system based on user feedback from program staff'
    ],
    outcome: 'Made attendance tracking simpler, faster, and more reliable for both interns and program coordinators.',
    image: '/public/project2.jpg',
    stack: ['React native', 'HTML', 'CSS', 'Node.js', 'Firebase', 'tailwindcss']
  },
  {
    title: 'Remote application for electronics signboard',
    description: 'Remote control application for electronics signboard logo for adjusting lights and setting up alarms and time.',
    slug: 'electronics-signboard',
    role: 'Mobile app developer — Android - Commissioned Project',
    timeline: 'Mar 2022 — May 2022',
    problem: 'Operators needed a practical way to control signboard functions remotely without being physically present at the hardware.',
    approach: [
      'Study the signboard control requirements and hardware behavior',
      'Design a simple mobile interface for device controls and scheduling',
      'Develop the Android app for lighting, alarm, and timer functions',
      'Test communication flow and improve reliability',
      'Deliver a lightweight app for day-to-day field use'
    ],
    outcome: 'Enabled remote management of the signboard system, saving time and improving operational flexibility.',
    image: '/public/project3.jpg',
    stack: ['Android Studio', 'C++', 'Java', 'XML']
  },
  {
    title: 'Point of Sale and Inventory Management System',
    description: 'A comprehensive system for managing point of sale operations and inventory tracking.',
    slug: 'pos-inventory-system - Commissioned Project',
    role: 'Software developer — Java desktop',
    timeline: 'Jun 2021 — Oct 2021',
    problem: 'Small business operations needed a more organized way to manage sales transactions and stock levels without relying on manual records.',
    approach: [
      'Analyze transaction and inventory workflows',
      'Design an intuitive desktop UI for store staff',
      'Build core modules for sales, inventory, and reporting',
      'Connect the system to a local database for persistent records',
      'Refine features based on usability feedback'
    ],
    outcome: 'Improved transaction handling and inventory visibility while reducing manual bookkeeping effort.',
    image: '/public/project4.jpg',
    stack: ['SceneBuilder', 'NETbeans', 'Laragon', 'MySQL', 'XML']
  },
  {
    title: 'Geospatial Crop Mapping and Profiling System for Rice Farming',
    description: 'web-based Geospatial Crop Mapping and Profiling System that helps farmers and agricultural personnel digitally map rice fields, manage crop and farmer information, and monitor farming activities using GIS technology.',
    slug: 'geospatial-crop-mapping - Commissioned Capstone',
    role: 'Frontend developer — GIS web app',
    timeline: 'Sep 2020 — Feb 2021',
    problem: 'Farmers and agricultural personnel needed a better way to map and track rice farming activities across different locations.',
    approach: [
      'Design a web-based mapping workflow for rice field profiling',
      'Integrate geospatial data layers and interactive map controls',
      'Build forms for managing farmer and crop information',
      'Connect the app to Firebase for data storage',
      'Improve visual clarity for field monitoring and reporting'
    ],
    outcome: 'Made crop mapping and field monitoring more accessible, helping users manage agricultural data with greater visibility.',
    image: '/public/project5.png',
    stack: ['HTML', 'CSS', 'JavaScript', 'GeoJson', 'Firebase', 'Leaflet.js']
  }
];
