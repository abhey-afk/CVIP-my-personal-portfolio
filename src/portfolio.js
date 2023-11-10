/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhey Mishra",
  title: "Hi all, I'm abhey",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "c:\\Users\\Abhey Mishra\\Downloads\\Abhey mishra resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abhey-afk",
  linkedin: "https://www.linkedin.com/in/abhey-mishra-841023230/",
  gmail: "ab852759@gmail.com",
  facebook: "https://www.facebook.com/abhey.mishra.18",
  stackoverflow: "https://stackoverflow.com/users/17904323/abhey-mishra",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Guru Gobind Singh Indraprastha University",
      logo: require("D:\\projects\\portfolio\\src\\images\\GGSIU_logo.svg.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "December 2021 - present",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Govt boys senior secondary school",
      logo: require("D:\\projects\\portfolio\\src\\images\\cbse logo.png"),
      subHeader: "Higher Intermediate in Science with Maths",
      duration: "Aril 2020 - April 2021",
      desc: "Ranked top 10% in the program. Took courses about academic career, Web Security, science and technology ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer Intern",
      company: "Coderscave foundation",
      companylogo: require("D:\\projects\\portfolio\\src\\images\\coderscave logo.png"),
      date: "August 2023 – Present",
      desc: "It is a virtual internship Writing, testing, and debugging code for web application.",
      descBullets: [
        "Writing, testing, and debugging code for web applications",
        "websites using programming languages such as HTML, CSS, JavaScript, and possibly others like Python, PHP, or Ruby"
      ]
    },
    {
      role: "Data Entry Operator",
      company: "Ministry Of Cooperation",
      companylogo: require("D:\\projects\\portfolio\\src\\images\\moc logo.jpg"),
      date: "Dec 2022 - Jan 2023",
      desc: "Enter various types of information into a computer system or database with precision, such as text, numbers, and dates.",
    },
    {
      role: "Full Stack Web Developer",
      company: "IBM Skill Build",
      companylogo: require("D:\\projects\\portfolio\\src\\images\\IBM_logo_in.jpg"),
      date: "June 2023 - July 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("D:\\projects\\portfolio\\src\\images\\code editor online.png"),
      projectName: "Online code Editor",
      projectDesc: "A editor web application for all languages",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/abhey-afk/CVIP--Online-code-editor"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("D:\\projects\\portfolio\\src\\images\\Facebook-new-design.jpg"),
      projectName: "Facebook Website",
      projectDesc: "A web application for facebook",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/abhey-afk/Facebook-Website"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Full Stack Web Developer",
      subtitle:
        "A web developer course with all frontend and backend design",
      image: require("D:\\projects\\portfolio\\src\\images\\udemy logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "C:\\Users\\Abhey Mishra\\Downloads\\full stack developer certificate.pdf"
        },
      ]
    },
    {
      title: "Python Development",
      subtitle:
        "A complete python development course with additional libaries",
      image: require("D:\\projects\\portfolio\\src\\images\\guvi logo.png"),
      footerLink: [
        {
          name: "View Python certificate",
          url: "C:\\Users\\Abhey Mishra\\Downloads\\GuviCertification - 17LXy6I76QE56h146f.png"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9625806295",
  email_address: "ab852759@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "sahil_1308", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
