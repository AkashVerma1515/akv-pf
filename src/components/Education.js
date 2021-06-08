import React from 'react';

function Education (props) {
    let {resumeData} = props;
    return <section id="edu">
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {resumeData.education && resumeData.education.map((item) => {
                  return <div className="row item" key={item.duration}>
                      <div className="twelve columns">
                        <h3>{item.UniversityName}</h3>
                        <p className="info">
                          {item.specialization}
                          <span>
                            &bull;
                          </span> <em className="date">{item.duration} </em>
                        </p>
                        <p>{item.Achievements}</p>
                      </div>
                    </div>;
                })}
            </div>
          </div>
        </section>;
  }
  export default Education;