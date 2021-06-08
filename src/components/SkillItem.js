import React from 'react';
import '../skills.css'
function SkillItem(props)
{
 const {skills} = props;
  return <div className="skills-section">
      <div className="skills-container">
        {skills&&skills.map((skill) => <div className="skills-box" key={skill.name}>
            <div className="skills-title">
              <div className="skills-img">
                <img src={skill.img} alt="" className="skills-icons" />
              </div>
              <h5>{skill.name}</h5>
            </div>
          </div>)}
      </div>
    </div>;
}

export default SkillItem;