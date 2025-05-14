import React from "react";
import ReactDOM from "react-dom/client";
// import UserClass from "./UserClass";
// import UserClass2 from "./UserClass2";
// import { useEffect } from "react";


const About = () => {
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("parent componentWillUnmount called");
    //     }, 1000);
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, [])
    return (<div className="about-container">
        <h1>This is about page </h1>
        {/* <UserClass name={"sowmi"} location={"salem"} contact={"kshrisowmiya@gmail.com"} /> */}
    </div>);
};

export default About;


// class About extends React.Component {
//     constructor() {
//         super();
//         console.log("parent constructor called");
//     }
//     componentDidMount() {
//         console.log("parent componentDidMount called");
//     }
//     componentWillUnmount() {
//         // setTimeout(() => {
//         console.log("parent componentWillUnmount called");
//         // }, 1000);
//     }
//     render() {
//         console.log("parent render called")
//         return (<div className="about-container">
//             <h1>This is about page </h1>
//             <UserClass name={"called1"} location={"salem"} contact={"kshrisowmiya@gmail.com"} />
//             {/* <UserClass name={"called2"} location={"salem"} contact={"kshrisowmiya@gmail.com"} /> */}
//             <UserClass2 name={"Called1"} location={"salem"} contact={"kshrisowmiya@gmail.com"} />
//         </div>);
//     }
// }
// export default About;