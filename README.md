# CVIP-my-personal-portfolio
Portfolio Sections ✔️ Summary and About me ✔️ Skills ✔️ Education ✔️ Work Experience ✔️ Open Source Projects Connected with GitHub ✔️ Big Projects ✔️ Achievements And Certifications 🏆 ✔️ Talks ✔️ Podcast ✔️ Contact me ✔️ Twitter Timeline ✔️ GitHub Profile

Getting Started These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

You'll need Git and Node.js (which comes with npm) installed on your computer or use Docker.

node@v10.16.0 or higher npm@6.9.0 or higher git@2.17.1 or higher

Setup default environment variables
For Windows
copy env. example .env

Install dependencies
npm install

Start a local dev server
npm start Linking Portfolio to GitHub Generate a classic GitHub personal access token following these instructions (make sure you don't select any scope just generate a simple token). If you are using GitHub Actions to deploy your portfolio you can skip this section.

const skillsSection = { .... }

const techStack = { .... }

const workExperience = { .... }

const openSource = { .... }

const bigProjects = { .... }

const achievementSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... } Using Emojis For adding emoji 😃 into the texts in Portfolio.js, use the emoji() function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

Deployment When you are done with the setup, you should host your website online. We highly recommend to read through the Deploying on GitHub Pages docs for React.

Configuring GitHub Actions (Recommended) First, you should enable, GitHub Actions for the repository you use.

The Profile and the Repository information from GitHub is only created at the time of deploy and the site needs to be redeployed if those information needs to be updated. So, a configurable CRON Job is setup which deploys your site every week, so that once you update your profile on GitHub it is shown on your portfolio. You can also trigger it manually using workflow_dispatch event, see this guide on how to do that.

When you are done with the configuration, we highly recommend to read through the GitHub Actions Configuring a workflow docs. Deploying to GitHub Pages This section guides you to deploy your portfolio on GitHub pages.

Navigate to package.json and enter your domain name instead of https://developerfolio.js.org/ in homepage variable. For example, if you want your site to be https://.github.io/developerFolio, add the same to the homepage section of package.json.

In short you can also add /devloperFolio to package.json as both are exactly same. Upon doing so, you tell create-react-app to add the path assets accordingly.

Optionally, configure the domain. You can configure a custom domain with GitHub Pages by adding a CNAME file to the public/ folder.

Follow through the guide to setup GitHub pages from the official CRA docs here.

Deploying to Netlify You could also host directly with Netlify by linking your own repository.

Deploy To Netlify

For more information, read hosting on Netlify.

Technologies Used React graphql apollo-boost react-twitter-embed react-easy-emoji react-headroom color-thief Illustrations UnDraw Lottie by Oblikweare
