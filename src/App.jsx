import React from "react";
import { Card } from "./Components/Card";
import "./App.css";
const App = () => {
  const projectData = [
    {
      // video: "/video/gold rate calculator.mp4",
      img:"/image/gold.png",
      heading: "Gold Rate Calculator",
      git: "https://github.com/SwasticKumar/Gold-Rate-Calculator-FrontEnd.git",
      be: "https://github.com/SwasticKumar/Gold-Rate-Calculator-BackEnd.git",
      netlify: "https://gold-rate-calculator-capstone.netlify.app/",
    },
    {
      // video: "/video/url-shortern.mp4",
      img:"/image/url.png",
      heading: "React URL Shortener",
      git: "https://github.com/SwasticKumar/URL-shortener-link-FrontEnd-.git",
      be: "https://github.com/SwasticKumar/URL-shortener-link-BackEnd.git",
      netlify: "https://url-shortener-application-swastic.netlify.app/",
    },
    {
      // video: "/video/password-set.mp4",
      img:"/image/password.png",
      heading: "React Password Reset",
      git: "https://github.com/SwasticKumar/Password-Reset-FrontEnd.git",
      be: "https://github.com/SwasticKumar/Password-Reset-BackEnd.git",
      netlify: "https://swastic-media-password-reset.netlify.app/",
    },
    {
      // video: "./video/pricecard.mp4",
      img: "/image/card.png",
      heading: "React Price Card",
      git: "https://github.com/SwasticKumar/hosting-price-card-using-react.git",
      netlify: "https://hosting-price-card.netlify.app/",
    },
    {
      // video: "/video/formik react.mp4",
      img: "/image/library.png",
      heading: "React Library Management",
      git: "https://github.com/SwasticKumar/Formik-Library-Management-System.git",
      netlify: "https://swastic-library-management-system.netlify.app",
    },
    {
      // video: "/video/axios-crud.mp4",
      img: "/image/axios.png",
      heading: "React Axios CRUD",
      git: "https://github.com/SwasticKumar/React-Axios-using-CRUD.git",

      netlify: "https://react-axios-using-crud.netlify.app/",
    },

    {
      // video: "./video/shoppingcard.mp4",
      img: "/image/store.png",
      heading: "React Shopping Card",
      git: "https://github.com/SwasticKumar/react-shopping-cart-task.git",
      netlify: "https://react-shopping-cart-task.netlify.app/",
    },
    {
      // video: "/video/blog.mp4",
      img: "/image/blog.png",
      heading: "React Router DOM",
      git: "https://github.com/SwasticKumar/react-blog-site-using-router.git",
      netlify: "https://react-blog-site-using-router.netlify.app/",
    },
    {
      // video: "/video/Redmi.mp4",
      img: "/image/shop.png",
      heading: "React Context API",
      git: "https://github.com/SwasticKumar/react-shopping-cart-using-context-api.git",
      netlify: "https://react-shopping-cart-using-context-api.netlify.app/",
    },

    {
      img: "./image/resume.png",
      heading: "Bootstrap Resume Task",
      git: "https://github.com/SwasticKumar/Guvi-b49-Daily-Task/tree/8620c5472f921e5729ea863d72b71c98154ec78c/day12Task-Bootstarp/Task2-Resume",
      netlify: "https://bootstrap-resume.netlify.app/",
    },
    {
      img: "/image/todo list.png",
      heading: "React Todo Task",
      git: "https://github.com/SwasticKumar/react-todo-task.git",
      netlify: "https://react-todo-card-task.netlify.app/",
    },

    {
      img: "./image/github ui.png",
      heading: "Profile Page Display Task",
      git: "https://github.com/SwasticKumar/Guvi-b49-Daily-Task/tree/8620c5472f921e5729ea863d72b71c98154ec78c/day12Task-Bootstarp/Task1-Profile-display",
      netlify: "https://profile-page-display.netlify.app/",
    },
    {
      img: "./image/dictionary.png",
      heading: "Dictionary API",
      git: "https://github.com/SwasticKumar/Guvi-b49-Daily-Task/tree/8620c5472f921e5729ea863d72b71c98154ec78c/day21Task-Promise/Dictionary%20API",
      netlify: "https://dictionary-api-task-2.netlify.app",
    },

    {
      video: "/video/Rest countries.mp4",
      heading: "Weather and Rest API ",
      git: "https://github.com/SwasticKumar/Guvi-b49-Daily-Task/tree/8620c5472f921e5729ea863d72b71c98154ec78c/day17Task%20-Weather%20%26%20RestCountries%20API",
      netlify: "https://rest-countries-and-weather-api.netlify.app/",
    },
    {
      img: "./image/calculator.png",
      heading: "Simple Calculator",
      git: "https://github.com/SwasticKumar/Guvi-b49-Daily-Task/tree/8620c5472f921e5729ea863d72b71c98154ec78c/day15Task-DOM/task2-calculator",
      netlify: "https://dom-basic-calculator-task.netlify.app/",
    },
    {
      img: "./image/currency converter.png",
      heading: "Currency Converter API",
      git: "https://github.com/SwasticKumar/Guvi-b49-Daily-Task/tree/8620c5472f921e5729ea863d72b71c98154ec78c/day21Task-Promise/Currency%20Converter%20API",
      netlify: "https://currency-converter-api-task-1.netlify.app",
    },
    {
      img: "./image/covid api.png",
      heading: "Covid19 Case API",
      git: "https://github.com/SwasticKumar/Guvi-b49-Daily-Task/tree/8620c5472f921e5729ea863d72b71c98154ec78c/day21Task-Promise/Covid19%20API",
      netlify: "https://covid19-cases-report-task-3.netlify.app",
    },

    {
      img: "./image/application-form.png",
      heading: "Simple College Application",
      git: "https://github.com/SwasticKumar/FrontEnd_class_Task/tree/2d5544f279651bd9075a92de54deedd34b51ae8a/Task%201%20-%20Application%20Form",
      netlify: "https://college-application-form.netlify.app/  ",
    },
  ];
  return (
    <>
      <div className="App">
        <h2 className="my-4 text-white">My Project's</h2>
        <div className="card-block">
          {projectData.map((value, index) => (
            <Card
              key={index}
              img={value.img}
              video={value.video}
              heading={value.heading}
              git={value.git}
              be={value.be}
              netlify={value.netlify}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
