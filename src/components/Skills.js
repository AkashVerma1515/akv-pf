import React from 'react';
import SkillItem from './SkillItem';

function Skills(props)
{
  const {resumeData} = props;
  return <section id="skill" style={{ backgroundColor: '#ccc' }}>
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.skills.map((group) => <div key={group.category}>
              <h4>{group.category}</h4>
              <SkillItem skills={group.list} />
            </div>)}
        </div>
      </div>
    </section>;
}

export default Skills;