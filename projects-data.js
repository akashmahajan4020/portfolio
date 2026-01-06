const projects = {
  tailorapp: {
    title: "Tailor Management App",
    subtitle: "Order & Worker Management System",
    description:
      "Laravel-based backend system for managing tailor orders, worker assignments, garment tracking, and delivery workflow.",
    tech: ["Laravel", "REST API", "Order Tracking", "RBAC"],

    features: [
      { icon: "fa-ruler-combined", title: "Measurement Management", text: "Store accurate garment measurements for repeat customers." },
      { icon: "fa-users-cog", title: "Worker Assignment", text: "Assign garments to tailors and manage workloads." },
      { icon: "fa-sync-alt", title: "Order Tracking", text: "Track order progress from stitching to delivery." },
      { icon: "fa-truck", title: "Delivery Workflow", text: "Complete lifecycle management of deliveries." },
      { icon: "fa-user-shield", title: "Role Based Access", text: "Admin, Manager & Worker permissions." },
      { icon: "fa-database", title: "Optimized Database", text: "Fast MySQL queries with indexing." }
    ],

    galleryIcons: ["fa-cut", "fa-users", "fa-truck"],
    galleryImages: [
      "taillor1.png",
      "tailor2.png",
      "tailor3.png"
    ]
  },

  indiamea: {
    title: "IndiaMEA",
    subtitle: "Apostille & Visa Processing Platform",
    description:
      "Document processing platform with real-time tracking and logistics integration.",
    tech: ["PHP", "Tracking API", "Logistics"],

    features: [
      { icon: "fa-file-alt", title: "Document Tracking", text: "Track documents in real time." },
      { icon: "fa-truck-fast", title: "Logistics Integration", text: "Courier & logistics partner integration." },
      { icon: "fa-user-check", title: "Admin Approval", text: "Approval workflow for documents." },
      { icon: "fa-bell", title: "Notifications", text: "Customer alerts and updates." },
      { icon: "fa-lock", title: "Secure Handling", text: "Safe document storage and access." }
    ],

    galleryIcons: ["fa-file-alt", "fa-search", "fa-shipping-fast"],
    galleryImages: [
      "indiamea.png",
      "indiamea1.png",
      "indiamea2.png"
    ]
  },

  flowkar: {
    title: "Flowkar",
    subtitle: "Social Media Management Platform",
    description:
      "Custom WordPress-based social media scheduling and automation platform.",
    tech: ["WordPress", "ACF", "Social APIs"],

    features: [
      { icon: "fa-calendar", title: "Post Scheduling", text: "Schedule posts across platforms." },
      { icon: "fa-user", title: "Creator Dashboard", text: "Manage creator content easily." },
      { icon: "fa-plug", title: "API Automation", text: "Social media API posting." },
      { icon: "fa-code", title: "Custom Plugins", text: "Custom WordPress plugin development." },
      { icon: "fa-chart-line", title: "SEO Optimized", text: "SEO friendly architecture." }
    ],

    galleryIcons: ["fa-calendar", "fa-share-alt", "fa-chart-line"],
    galleryImages: [
      "flowkar.png",
      "flowkar2.png",
      "flowkar3png.png"
    ]
  },

  reservemytable: {
    title: "Reserve My Table",
    subtitle: "Restaurant Booking System",
    description:
      "Seat reservation system with real-time booking and availability management.",
    tech: ["Laravel", "Booking System", "Real-time"],

    features: [
      { icon: "fa-chair", title: "Seat Management", text: "Manage table availability." },
      { icon: "fa-clock", title: "Live Booking", text: "Real-time reservation system." },
      { icon: "fa-utensils", title: "Restaurant Dashboard", text: "Admin booking control panel." },
      { icon: "fa-bell", title: "Notifications", text: "Booking alerts for customers." },
      { icon: "fa-database", title: "Optimized Backend", text: "High performance queries." }
    ],

    galleryIcons: ["fa-utensils", "fa-chair", "fa-clock"],
    galleryImages: [
      "reservemytable1.png",
      "reservemy3.png",
      "reseerve2.png"
    ]
  },

  sarawanspices: {
    title: "Sarawanspices",
    subtitle: "Grocery eCommerce Platform",
    description:
      "CodeIgniter-based grocery eCommerce platform with full payment integration.",
    tech: ["CodeIgniter 3", "eCommerce", "Payments"],

    features: [
      { icon: "fa-box", title: "Product Management", text: "Manage grocery products." },
      { icon: "fa-shopping-cart", title: "Shopping Cart", text: "Add-to-cart & checkout." },
      { icon: "fa-credit-card", title: "Payment Gateway", text: "Secure online payments." },
      { icon: "fa-list", title: "Order Management", text: "Track and manage orders." },
      { icon: "fa-user-cog", title: "Admin Panel", text: "Complete admin control." }
    ],

    galleryIcons: ["fa-shopping-cart", "fa-box", "fa-credit-card"],
    galleryImages: [
      "sarawan1.jpeg",
      "sarawan2.jpeg",
      "sarawan3.jpeg"
    ]
  },

  shakebug: {
    title: "Shakebug",
    subtitle: "Bug Reporting SaaS",
    description:
      "SaaS platform for reporting, tracking and managing software bugs.",
    tech: ["CodeIgniter 3", "SaaS", "Bug Tracking"],

    features: [
      { icon: "fa-bug", title: "Bug Reporting", text: "Create and manage bugs." },
      { icon: "fa-project-diagram", title: "Project Collaboration", text: "Team based projects." },
      { icon: "fa-user-lock", title: "User Roles", text: "Access control & permissions." },
      { icon: "fa-sync", title: "Bug Lifecycle", text: "Track bug status changes." },
      { icon: "fa-envelope", title: "Email Alerts", text: "Automatic notifications." }
    ],

    galleryIcons: ["fa-bug", "fa-tasks", "fa-users"],
    galleryImages: [
      "shakebug.png",
      "shakebug2.png",
      "shakebug3.png"
    ]
  }
};
