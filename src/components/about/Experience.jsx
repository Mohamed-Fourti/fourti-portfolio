import React from "react";

const experienceContent = [
  {
    year: "01/2024 – 07/2024",
    position: "Engineer Intern",
    compnayName: "Orange Tunisie",
    details: `Developed secure CI/CD pipelines for migrating on-premises applications to AWS, integrating automated security testing (SAST, DAST, SCA).
Optimized GitLab CI/CD pipelines with auto-scaled spot instances, reducing build times by 50% and cloud costs by 30%.
Provisioned secure, multi-AZ EKS clusters on AWS using CloudFormation. Configured using Helm, the cluster includes autoscaling, load balancing, domain management, and real-time monitoring (Prometheus, Grafana, Falco).`,
  },
  {
    year: "06/2018 - 08/2021",
    position: "Engineer Intern",
    compnayName: "Digital Virgo",
    details: `Supported a DevOps transition by deploying and configuring GitLab for on-premises CI/CD and local deployments.
Enhanced container security by configuring Docker Swarm with HTTPS-secured private registries.
Built multi-stage GitLab CI/CD pipelines using containerized runners for efficient application deployment.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
