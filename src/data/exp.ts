export type experienceItem = {
  id: string;
  company: string;
  title: string;
  dates: string;
  location: string;
  description: string;
};

const experience: experienceItem[] = [
  {
    id: "cap00",
    company: "Capital One",
    title: "Senior Director of Software Engineering, Shopping",
    dates: "Aug 2025 - Present",
    location: "New York City",
    description:
      "Provide technical, strategic, and organizational leadership to deliver highly scalable, customer-facing applications serving millions of users. Drive the long-term architectural roadmap, collaborating with product and business leaders to align technology initiatives with key company objectives for growth and market expansion.",
  },
  {
    id: "cap0",
    company: "Capital One",
    title: "Director of Software Engineering, Shopping",
    dates: "Feb 2023 - Aug 2025",
    location: "New York City",
    description:
      "Directed the technology space behind Capital One Shopping's Price Comparison features. Provided technical and strategic leadership to full-stack teams delivering large-scale and highly efficient customer-facing applications.",
  },
  {
    id: "cap1",
    company: "Capital One",
    title: "Senior Manager/Tech Lead, Shopping",
    dates: "Jul 2021 - Feb 2023",
    location: "New York City",
    description:
      "Delivered reliable, resilient, and scalable software for customers and internal teams at Capital One Shopping. Provided tech leadership to a full-stack feature team on large-scale NodeJS/React applications and event-based services. Mentored and managed a team of engineers.",
  },
  {
    id: "cap2",
    company: "Capital One",
    title: "Master Software Engineer/Tech Lead, Shopping",
    dates: "Jan 2019 - Jul 2021",
    location: "New York City",
    description:
      "Full-stack engineering for Capital One Shopping, delivering reliable, resilient software and tooling for customers and internal teams. Special projects include exploration into GraphQL/Apollo with React, large-scale NodeJS and event-based architecture.",
  },
  {
    id: "cap3",
    company: "Capital One",
    title: "Master Software Engineer/Tech Lead, Commercial Tech",
    dates: "Oct 2017 - Jan 2019",
    location: "Vienna, VA",
    description:
      "Focused on UI engineering efforts in Capital One's Commercial Card, leading a full-stack team to develop an internal servicing application. Mentored and managed the performance of junior engineers.",
  },
  {
    id: "aviture",
    company: "Aviture",
    title: "Frontend Engineer",
    dates: "Mar 2014 - Oct 2017",
    location: "Washington, DC",
    description:
      "Created modular and shareable UI toolkits/frameworks for the organization. Implemented mapping applications in AngularJS, React, and Backbone.js.",
  },
  {
    id: "edweek",
    company: "Editorial Projects in Education",
    title: "Online Creative Director/Engineer",
    dates: "Sep 2010 - Oct 2014",
    location: "Bethesda, MD",
    description:
      "Designed and implemented frontend features, custom analytics capabilities and content management system for the publication’s flagship website. Directed and executed data visualization, multimedia microsites and data information projects.",
  },
];

export default experience;
