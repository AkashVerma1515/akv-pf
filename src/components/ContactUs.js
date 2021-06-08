import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    const myStyle = {
      color: "white",
      position: "absolute",
      right: "210px"
    }
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h3 style={myStyle}>Feel free to Connect Me</h3>
            </div>
          </div>
        </section>
        );
  }
}