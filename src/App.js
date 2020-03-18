import React from "react";
import "./App.css";
import { CoursePreview } from "./components/CoursePreview/CoursePreview";
import { Navbar } from "./components/Navbar/Navbar";
import { LessonSidebar } from "./components/LessonSideBar/LessonSideBar";
import { CourseHeader } from "./components/CourseHeader/CourseHeader";
import Lesson from "./components/Lesson/Lesson";

class App extends React.Component {
  state = {
    percent: 0.5,
    courses: [
      {
        title: "Data Structures",
        description: "Chapter 1"
      },
      {
        title: "Algorithms",
        description: "Chapter 1"
      },
      {
        title: "Videogames",
        description: "Chapter 1"
      },
      {
        title: "OBB Programming",
        description: "Chapter 1"
      }
    ]
  };
  updateProgress = (field, val) => {
    this.setState({ [field]: val });
  };

  render() {
    let renderPreviews = this.state.courses.map(course => {
      return (
        <CoursePreview
          title={course.title}
          description={course.description}
          progress={0.5}
        />
      );
    });
    return (
      <div className="App">
        <Navbar />
        <CourseHeader title={"Data Structures"} />
        <div className="split-screen">
          <LessonSidebar />
          <Lesson />
        </div>

        {/* <div className="div">{renderPreviews}</div> */}
      </div>
    );
  }
}

export default App;
