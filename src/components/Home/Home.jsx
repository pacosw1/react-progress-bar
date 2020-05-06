import React from "react";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="profile">
          <div className="img-badge">
            <img
              className="me"
              src="https://avatars0.githubusercontent.com/u/12486003?s=460&u=d7436e224aefdb0d8b385d0bff8da7d9d7fa0e29&v=4"
              alt="Francisco Sainz"
            />

            <div className="name-header">
              <div>
                <h1>Francisco Sainz</h1>
              </div>
              <div>
                <SocialTab />
              </div>
            </div>

            <div className="bio">
              <p>
                I am a 5th Semester CS Student with a passion for learning and
                creating new software. Especially into web and game development.
              </p>
              <br />
              <p>Currently pursuing a Bachlor's degree in Computer Science.</p>
              {/* <h2> Graduation by 2022</h2> */}
            </div>
          </div>

          {/* <div className="skills">
            <div className="skill-sect">
              <h1>Languages</h1>
              <p>Javascript</p>
              <p>Golang</p>
              <p>C++</p>

              <h1>Tools</h1>
              <p>Git</p>
              <p>Linux</p>
              <p>React</p>
            </div>

            <div className="skill-sect">
              <h1>Front End</h1>
              <p>React</p>
              <p>React Native</p>
              <p>Canvas</p>
              <h1>BackEnd</h1>
              <p>MongoDb</p>
              <p>NodeJs</p>
              <p>Go</p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

const SocialTab = (props) => {
  return (
    <div className="social-tab">
      <img className="icon" src="github.svg" alt="github link" />
      <img className="icon" src="medium.svg" alt="github link" />
      <img className="icon" src="linked.svg" alt="github link" />
      <img className="icon" src="insta.svg" alt="github link" />
    </div>
  );
};

export default Home;
