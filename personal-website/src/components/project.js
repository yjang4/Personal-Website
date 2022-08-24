import React from "react";

function Project(props) {

  return (
    <div className="Project">
      <img src={props.imageSrc} alt="Preview" /> 
      <div className="project-desc">
        {props.desc}
      </div>
       
    </div>
  );
}

export default Project;