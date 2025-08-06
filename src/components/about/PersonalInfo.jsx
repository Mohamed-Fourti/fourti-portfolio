import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Mohamed", hasColor: "" },
  { meta: "last name", metaInfo: "Fourti", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Tunis", hasColor: "" },
  { meta: "phone", metaInfo: "+21653659929", hasColor: "" },
  { meta: "Email", metaInfo: "mohamedfourti@outlook.com", hasColor: "" },
  { meta: "Linkedin", metaInfo: "mohamedfourti", hasColor: "" },
  { meta: "langages", metaInfo: "Arabic, English, French", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
