import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Mohamed", hasColor: "" },
  { meta: "last name", metaInfo: "Fourti", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Hammamet, Nabeul", hasColor: "" },
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
          <span className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}>
            {val.metaInfo}
            {val.meta === "Freelance" && (
              <>
                <a href="https://www.fiverr.com/mohamedfourti" target="_blank" rel="noopener noreferrer">
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#00b22d',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    textAlign: 'center',
                    lineHeight: '24px',
                    marginLeft: '8px',
                    cursor: 'pointer'
                  }}>F</span>
                </a>
                <a href="https://www.upwork.com/freelancers/~010fa0fd291ce53619" target="_blank" rel="noopener noreferrer">
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#14a800',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    textAlign: 'center',
                    lineHeight: '24px',
                    marginLeft: '5px',
                    cursor: 'pointer'
                  }}>U</span>
                </a>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
