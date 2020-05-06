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
import { Sidebar } from "./components/Reusable/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Project from "./components/Projects/project/Project";
import Projects from "./components/Projects/Projects";

class App extends React.Component {
  state = {
    percent: 0.5,
    courses: [
      {
        title: "The Game Loop",
        description: "The fundamental aspect of any game in order to run.",
        progress: 0.2,
        phase: 1,
      },
      {
        title: "Canvas",
        description: "Use canvas to draw shapes in the screen",
        progress: 0.2,
        phase: 1,
      },
      {
        title: "Vectors",
        description:
          "Introduction to vectors and their widespread applications in game development",
        progress: 0.1,
        phase: 1,
      },
      {
        title: "Vector Math",
        description:
          "Using vector math to calculate position, direction and much more",
        progress: 0,
        phase: 1,
      },
      {
        title: "Player Input",
        description:
          "Handling player input and updating the player using vector math",
        progress: 0,
        phase: 1,
      },
      {
        title: "Game Physics",
        description: "Introduction to game physics using vectors",
        progress: 0,
        phase: 1,
      },
      {
        title: "Projectiles",
        description:
          "Learning how projectiles work and how to implement your own",
        progress: 0,
        phase: 1,
      },
      {
        title: "Raycasting",
        description:
          "Learn about raycasting and other strategies to make projectiles more efficient",
        progress: 0,
        phase: 1,
      },

      {
        title: "About Cheating",
        description: "Chapter 1",
        progress: 0,
        phase: 2,
      },
      {
        title: "Server Simulation",
        description: "Chapter 1",
        progress: 0,
        phase: 2,
      },
      {
        title: "State Broadcasting",
        description: "Chapter 1",
        progress: 0,
        phase: 2,
      },
      {
        title: "Networking",
        description: "Chapter 1",
        progress: 0,
        phase: 2,
      },
      {
        title: "Client Side Prediction",
        description: "Chapter 1",
        progress: 0,
        phase: 2,
      },
      {
        title: "Entity Interpolation",
        description: "Chapter 1",
        progress: 0,
        phase: 2,
      },
      {
        title: "Server reconciliation",
        description: "Chapter 1",
        progress: 0,
        phase: 2,
      },
      {
        title: "HTML & CSS",
        description: "Chapter 1",
        progress: 0,
        phase: 3,
      },
      {
        title: "Linux Command Line",
        description: "Chapter 1",
        progress: 0,
        phase: 3,
      },
      {
        title: "Front-End with React",
        description: "Chapter 1",
        progress: 0,
        phase: 3,
      },
      {
        title: "APIs with NodeJS",
        description: "Chapter 1",
        progress: 0,
        phase: 3,
      },
      {
        title: "Hosting web-apps",
        description: "Chapter 1",
        progress: 0,
        phase: 3,
      },
    ],
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
      * Test form (completed)
      course Lesson
        * Creating lessson (text editor + images) (completed)
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
    let renderPreviews = this.state.courses.map((course) => {
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
        <Home />

        <Projects />
        {/* <Catalog courses={this.state.courses} /> */}
        {/* <TextEditor /> */}
        {/* <CourseView /> */}

        {/* <div className="split-screen"></div> */}
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

/*<Test
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
            },
            {
              text: "How old were you when you started dating?",
              id: 3,
              options: [
                { id: 0, text: "When I was 10 years old", checked: false },
                { id: 1, text: "When i was 20 years old", checked: false },
                { id: 2, text: "When I was born", checked: false }
              ]
            },
            {
              text: "How old were you when you started dating?",
              id: 4,
              options: [
                { id: 0, text: "When I was 10 years old", checked: false },
                { id: 1, text: "When i was 20 years old", checked: false },
                { id: 2, text: "When I was born", checked: false }
              ]
            },
            {
              text: "How old were you when you started dating?",
              id: 5,
              options: [
                { id: 0, text: "When I was 10 years old", checked: false },
                { id: 1, text: "When i was 20 years old", checked: false },
                { id: 2, text: "When I was born", checked: false }
              ]
            },
            {
              text: "How old were you when you started dating?",
              id: 6,
              options: [
                { id: 0, text: "When I was 10 years old", checked: false },
                { id: 1, text: "When i was 20 years old", checked: false },
                { id: 2, text: "When I was born", checked: false }
              ]
            }
          ]}
        />
      </div> */
