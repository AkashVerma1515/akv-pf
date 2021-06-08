import React from 'react'

function Header(props) {
    const {resumeData} = props;
    return <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" title="Hide navigation">
              Hide navigation
            </a>
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Projects
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#skill">
                  Skills
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#edu">
                  Education
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">
                Hi, I'm {resumeData.name}{' '}
              </h1>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>
                I am a {resumeData.role}, who loves to transform ideas into reality using code.
                {resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="social">
                {resumeData.socialLinks && resumeData.socialLinks.map(
                    (item) => {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={item.className} />
                          </a>
                        </li>
                      );
                    }
                  )}
              </ul>
              <br />
              {/* <a href="/chirag_jain_18JE0254.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}> */}
                {/* <button type="social" style={{ color: 'white' }}>
                  Download resume &nbsp;
                  <i className="fa fa-external-link" />
                </button> */}
              {/* </a> */}
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#portfolio">
              <i className="icon-down-circle" />
            </a>
          </p>
        </header>
      </React.Fragment>;
}
export default Header;