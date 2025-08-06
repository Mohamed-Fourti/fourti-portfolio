import React from "react";

const educationContent = [
  {
    year: "2021 - 2024",
    degree: "Engineer's degree, CyberSecurity Engineer",
    institute: "TEK-UP University of Digital Sciences",
    details: `Focused on CyberSecurity engineering, digital sciences, and hands-on labs. Developed expertise in network security, ethical hacking, penetration testing, security operations, and cloud security.`,
    // logo: "/assets/img/tekup-logo.png" // Uncomment and set path if logo available
  },
  {
    year: "2018 - 2021",
    degree: "Bachelor's degree, Web development, Digital/Multimedia Design",
    institute: "Institut Supérieur des Etudes Technologiques de Djerba",
    details: `Specialized in web development and digital/multimedia design. Completed practical projects in front-end and back-end technologies, UI/UX, and interactive media.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
