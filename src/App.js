import React from "react";
import "./App.css";
import { CoursePreview } from "./components/CoursePreview/CoursePreview";
import { Navbar } from "./components/Navbar/Navbar";
import { LessonSidebar } from "./components/LessonSideBar/LessonSideBar";
import { CourseHeader } from "./components/CourseHeader/CourseHeader";
import Lesson from "./components/Lesson/Lesson";
import { Landing } from "./components/LandingPage/Landing";
import { TextEditor } from "./components/Editor/TextEditor";
import { CourseView } from "./components/CourseView/CourseView";
import { Catalog } from "./components/Catalog/Catalog";
import { Test } from "./components/Test/Test";

class App extends React.Component {
  state = {
    percent: 0.5,
    courses: [
      {
        title: "Programming 101",
        description: "Chapter 1",
        progress: 1,
        phase: 1
      },
      {
        title: "Math 1",
        description: "Chapter 1",
        progress: 0.8,
        phase: 1
      },
      {
        title: "Physics I",
        description: "Chapter 1",
        progress: 0,
        phase: 1
      },
      {
        title: "Interactive Design",
        description: "Chapter 1",
        progress: 0,
        phase: 1
      },
      {
        title: "OO Programming",
        description: "Chapter 1",
        progress: 0,
        phase: 1
      },
      {
        title: "Discrete Math",
        description: "Chapter 1",
        progress: 0,
        phase: 1
      },
      {
        title: "Computer Org.",
        description: "Chapter 1",
        progress: 0,
        phase: 2
      },
      {
        title: "Data Structures",
        description: "Chapter 1",
        progress: 0,
        phase: 2
      },
      {
        title: "Statistics and Prob.",
        description: "Chapter 1",
        progress: 0,
        phase: 2
      },
      {
        title: "Databases I",
        description: "Chapter 1",
        progress: 0,
        phase: 2
      },
      {
        title: "Numerical Methods",
        description: "Chapter 1",
        progress: 0,
        phase: 2
      },
      {
        title: "Algorithms",
        description: "Chapter 1",
        progress: 0,
        phase: 2
      },
      {
        title: "System Design",
        description: "Chapter 1",
        progress: 0,
        phase: 2
      },
      {
        title: "HTML & CSS",
        description: "Chapter 1",
        progress: 0,
        phase: 3
      },
      {
        title: "Linux Command Line",
        description: "Chapter 1",
        progress: 0,
        phase: 3
      },
      {
        title: "Front-End with React",
        description: "Chapter 1",
        progress: 0,
        phase: 3
      },
      {
        title: "APIs with NodeJS",
        description: "Chapter 1",
        progress: 0,
        phase: 3
      },
      {
        title: "Hosting web-apps",
        description: "Chapter 1",
        progress: 0,
        phase: 3
      }
    ]
  };
  updateProgress = (field, val) => {
    this.setState({ [field]: val });
  };

  render() {
    /*
      Todo


    Back End
      *API
      *Homework Check
      *Lesson Prerquisites
      *Progress (based on homeworks);
      *Test checking (multiple choice)


    Front End:
      * Test submissions
      * Test from
      course Lesson
        * Creating lessson (text editor + images)
        * Advancing between lessons. 
        * Blocking lessons based on progress (pre-requisites)

      course page
        * Assigments
        * Grades
        * Curriculum
      Code editor:
        * check for infinite loops
        * more testing
      HomeWork submissions
        * Submit code
      
      Dashboard:
        * Courses
        * Account
        * *Overall Progress
        * 
      Payment Integration API (Stripe)
        *Monthly fee
      









    */
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
        <Test
          title="Quiz 1: Data Structures"
          test={[
            {
              text: "How old were you when you started dating?",
              id: 0,
              options: [
                { id: 0, text: "When I was 10 years old", checked: false },
                { id: 1, text: "When i was 20 years old", checked: false },
                { id: 2, text: "When I was born", checked: false }
              ]
            },
            {
              text: "How old were you when you started dating?",
              id: 1,
              options: [
                { id: 0, text: "When I was 10 years old", checked: false },
                { id: 1, text: "When i was 20 years old", checked: false },
                { id: 2, text: "When I was born", checked: false }
              ]
            },
            {
              text: "How old were you when you started dating?",
              id: 2,
              options: [
                { id: 0, text: "When I was 10 years old", checked: false },
                { id: 1, text: "When i was 20 years old", checked: false },
                { id: 2, text: "When I was born", checked: false }
              ]
            }
          ]}
        />
      </div>
    );
  }
}

export default App;

/*
<CourseHeader title={"Data Structures"} />
        <CourseView /> 
        <div className="split-screen">
          {/* <LessonSidebar />
          <Lesson /> 
          <div className="div">{renderPreviews}</div>
        </div> 
*/
