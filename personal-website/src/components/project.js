import React from "react";

function Project(props) {

  return (
    <div className="Project">
      <img src={props.imageSrc} alt="Preview" /> 
      <div className="project-desc">
        {props.desc}
      </div>
      <button>Code</button>
      <button>View</button>
       
    </div>
  );
}

export default Project;