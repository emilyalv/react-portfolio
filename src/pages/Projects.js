import React from "react";
import Project from "../components/Project";




 const projects = [
     {
        name: "Javascript Quiz",
        repo: "https://github.com/emilyalv/javascript-quiz-1",
        link: "https://emilyalv.github.io/javascript-quiz-1/",
        thumbnail: "https://portfolio-imges.s3.us-east-2.amazonaws.com/jsquiz.png",
        description: "The Javascript Quiz includes storing questions, answer choices, and the correct answers in objects and looping through those objects to display each question and its respective answer choices. The user's choice is then compared with the correct answer to determine the user's score. The quiz is timed, and ends automatically if the timer runs out.",

    },
    {
        name: "Employee Tracker",
        repo: "https://github.com/emilyalv/employee-tracker",
        link: "N/A–Node application",
        thumbnail: "https://portfolio-imges.s3.us-east-2.amazonaws.com/employeetracker.png",
        description: "The employee-tracker app is a node application used to add, view, and update tables in a database. This application utilizes MySQL, Inquirer.js, and console.table. The employeetracker.js file connects to the server and uses Inquirer to determine the main action the user would like to take. Add, View, and Update functions are performed using the respective files in the lib folder.",

    },
    {
        name: "Tech Blog",
        repo: "https://github.com/emilyalv/tech-blog",
        link: "https://limitless-peak-73664.herokuapp.com/",
        thumbnail: "https://portfolio-imges.s3.us-east-2.amazonaws.com/techblog.png",
        description: "The tech-blog app is a CMS-style application where users can create user accounts, blog posts, and blog comments. All posts are displayed without requiring a user to log in. When a user is logged in they are able to create posts & comments.",

    },
    {
        name: "Reverse Calendar",
        repo: "https://github.com/Koxuvar/ReverseCalendar",
        link: "https://fathomless-sands-68777.herokuapp.com/",
        thumbnail: "https://portfolio-imges.s3.us-east-2.amazonaws.com/calendar.png",
        description: "Collaboration project: A web app designed to not focus about deadlines and the future. A calendar for just living in today.",

    },
    {
        name: "Team Profile Generator",
        repo: "https://github.com/emilyalv/team-profile-generator",
        link: "N/A",
        thumbnail: "https://portfolio-imges.s3.us-east-2.amazonaws.com/teamprofilegenerator.png",
        description: "A node-based app that gathers information about team members and then generates HTML components to display each team member.",

    },
    {
        name: "HVTP Portal",
        repo: "https://github.com/emilyalv/hvpt-portal",
        link: "Coming soon",
        thumbnail: "https://portfolio-imges.s3.us-east-2.amazonaws.com/hvtp.png",
        description: "Collaboration project: The HVTP Portal is an application for students learning a new language. It includes the ability to track modules & activities, including activities where users are prompted to identify words based on audio files they hear.",

    },
 ]


 const Projects= () => {
    return (
        <>
            <div>
                <Project projects={projects}/>
            </div>
        </>
    )};

export default Projects;
