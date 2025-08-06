import Image1 from "../../../public/assets/img/portfolio/project-1.jpg";
import Image12 from "../../../public/assets/img/portfolio/project-1 (2).jpg";
import Image13 from "../../../public/assets/img/portfolio/project-1 (3).jpg";
import Image2 from "../../../public/assets/img/portfolio/project-2.jpg";
import Image3 from "../../../public/assets/img/portfolio/project-3.jpg";
import Image31 from "../../../public/assets/img/portfolio/project-3-1.jpg";
import Image4 from "../../../public/assets/img/portfolio/project-4.jpg";
import Image5 from "../../../public/assets/img/portfolio/project-5.jpg";
import Image6 from "../../../public/assets/img/portfolio/project-6.jpg";

const PortfolioData = [

  {
    id: 1,
    type: "WordPress Optimization",
    image: Image1,
    images: [Image1, Image12, Image13],
    tag: ["cloudflare", "WordPress"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "WordPress Optimization",
        client: "Direct client",
        language: "PHP, WordPress, Cloudflare",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 2,
    type: "Adding 293 Domain to Cloudflare",
    image: Image2,
    tag: ["cloudflare", "api"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Mass Domain Migration",
        client: "Fiverr Client",
        language: "Cloudflare API, Bash Scripting",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 3,
    type: "N8N Self-Hosting Setup",
    image: Image3,
    images: [Image3, Image31],
    tag: ["automation"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "N8N Workflow Automation Platform",
        client: "Fiverr Client",
        language: "Docker Compose, Yaml, N8N",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 4,
    type: "N8N Error Resolution & Optimization",
    image: Image4,
    tag: ["automation"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "N8N Troubleshooting & Fixes",
        client: "Fiverr Client",
        language: "N8N, Debugging",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 5,
    type: "Deadline Reminder SaaS",
    image: Image5,
    tag: ["saas"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "SaaS Application",
        client: "Personal Project",
        language: "Laravel, PHP, Nginx, Firebase",
        preview: "deadlinereminder.com",
        link: "https://deadlinereminder.com/",
      },
    ],
  },
];

export default PortfolioData;
