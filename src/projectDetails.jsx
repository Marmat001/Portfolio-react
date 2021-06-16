import vroom from './img/vroom.png'
import vroom2 from './img/vroom3.png'
import vroom3 from './img/vroom4.png'
import vroom4 from './img/vroom13.png'
import vroom5 from './img/vroom5.png'
import vroom6 from './img/vroom6.png'
import vroom7 from './img/vroom7.png'
import vroom8 from './img/vroom8.png'
import vroom9 from './img/vroom9.png'
import vroom10 from './img/vroom10.png'
import vroom11 from './img/vroom11.png'
import vroom12 from './img/vroom12.png'
import gameDatabase from './img/gamedatabase.png'
import gameDatabase2 from './img/gamedatabase3.png'
import gameDatabase3 from './img/gamedatabase4.png'
import gameDatabase4 from './img/gamedatabase5.png'
import gameDatabase5 from './img/gamedatabase6.png'
import gameDatabase6 from './img/gamedatabase7.png'
import gameDatabase7 from './img/gamedatabase8.png'
import vacationeer from './img/vacationeer.png'
import vacationeer2 from './img/vacationeer2.png'
import vacationeer3 from './img/vacationeer3.png'
import vacationeer4 from './img/vacationeer4.png'
import vacationeer5 from './img/vacationeer5.png'
import vacationeer6 from './img/vacationeer6.png'
import vacationeer7 from './img/vacationeer7.png'
import vacationeer8 from './img/vacationeer8.png'
import vacationeer9 from './img/vacationeer9.png'
import vacationeer10 from './img/vacationeer10.png'
import vacationeer11 from './img/vacationeer11.png'
import vacationeer12 from './img/vacationeer12.png'
import vacationeer13 from './img/vacationeer13.png'
import noterjs from './img/cli.png'
import noterjs2 from './img/cli3.png'
import noterjs3 from './img/cli4.png'
import noterjs4 from './img/cli5.png'
import noterjs5 from './img/cli6.png'
import noterjs6 from './img/cli7.png'
import tourify from './img/tourify.png'
import tourify2 from './img/tourify3.png'
import tourify3 from './img/tourify4.png'
import tourify4 from './img/tourify5.png'
import tourify5 from './img/tourify6.png'
import tourify6 from './img/tourify7.png'
import tourify7 from './img/tourify8.png'
import tourify8 from './img/tourify9.png'
import tourify9 from './img/tourify10.png'
import tourify10 from './img/tourify11.png'
import tourify11 from './img/tourify12.png'
import tourify12 from './img/tourify13.png'
import tourify13 from './img/tourify14.png'
import tourify14 from './img/tourify15.png'
import tourify15 from './img/tourify16.png'
import tourify16 from './img/tourify17.png'
import tourify17 from './img/tourify18.png'
import tourify18 from './img/tourify19.png'
import tourify19 from './img/tourify20.png'
import tourify20 from './img/tourify21.png'
import tourify21 from './img/tourify22.png'
import tourify22 from './img/tourify23.png'
import amplified from './img/amplified.png'
import amplified3 from './img/amplified.gif'
import react from './img/react-icon.png'
import nodeJs from './img/nodejs.png'
import express from './img/express-icon.png'
import mongoDB from './img/mongodb-icon.png'
import motion from './img/motion-icon.png'
import emailJs from './img/emailjs-icon.png'
import bootstrap from './img/bootstrap-icon.png'
import css from './img/css-icon.png'
import scss from './img/scss-icon.png'
import styledComponents from './img/styled-components-icon.png'
import rawg from './img/rawg-icon.png'
import antd from './img/antd-icon.png'
import gma from './img/gma-icon.png'
import typeScript from './img/typescript-icon.png'
import bulma from './img/bulma-icon.png'
import esbuild from './img/esbuild-icon.png'
import immer from './img/immer-icon.png'
import lerna from './img/lerna-icon.png'
import firebase from './img/firebase-icon.png'
import particleJS from './img/particle-icon.png'

const projects = [
  {
    slugName: 'vroom',
    name: 'Vroom Car Shop',
    image: vroom,
    image2: vroom2,
    techStack: [
      react,
      nodeJs,
      express,
      mongoDB,
      motion,
      emailJs,
      bootstrap,
      css,
    ],
    link: 'https://vroomshop.herokuapp.com',
    description:
      'This project was built when I first started learning the MERN stack (React, MongoDB, Express & Node). This was the first larger project I worked on from scratch, without using some kind of prebuilt plugin or platform. Building this ecommerce styled full-stack application was a great opportunity to familiarise myself with the core concepts I had been learning at the time such as: - Managing global state with Redux (Actions & Reducers). - Using redux state in components (useDispatch & useSelector). - Creating an extensive backend with JWT authentication and Google login functionality using Express. - Working with a mongoDB database and the Mongoose ODM. - Creating custom authentication middleware... and much more. Some of the features provided in this application are: ',
    functionality: [
      'Custom database seeder script to insert development data',
      'Shopping cart with PayPal and debit / credit card payment integration',
      'Car reviews and ratings system',
      'Carousel that displays latest additions',
      'Page pagination',
      'Car search feature',
      'Car Inventory functionality with real time "in stock count" update',
      'Login authentication system with email & password / Google login ',
      'User profile with order summaries and the ability to add / update profile picture',
      'Admin area to manage orders, cars and customers. Some of the functionality included: Updating orders to approved / payed / delivered. Add / update / remove cars from website inventory. View all order details. Give admin rights to other users and create / remove user accounts',
      'Ecommerce checkout process (shipping, payment method, etc)',
      'Download / view order payment PDF for both customers and admins',
      'Contact form with legitimate email dispatch on send',
      'Keyframe transition animations on homepage and typewriter styled headings on shop page',
      'Fully mobile responsive, both user and admin view, including data tables',
    ],

    imageGallery: [
      vroom3,
      vroom4,
      vroom5,
      vroom6,
      vroom7,
      vroom8,
      vroom9,
      vroom10,
      vroom11,
      vroom12,
    ],
    imageDescription: [
      'Contact Form',
      'Login Page',
      'User Profile',
      'Car Details Page',
      'Shopping Cart Page',
      'Order Page',
      'Invoice PDF Download',
      'Admin Car Management Page',
      'Admin User Management Page',
      'Admin Order Management Page',
    ],
  },

  {
    slugName: 'game-database',
    name: 'Game Database',
    image: gameDatabase,
    image2: gameDatabase3,
    techStack: [react, motion, styledComponents, rawg, particleJS],
    link: 'https://gamedatabase.netlify.app',
    description:
      'A fully responsive front-end React application using the the RAWG Video Games Database API. This app pulls game information from all the main sections of the RAWG database. Some of the technology applied to build this application: - Various React hooks such as useEffect, useHistory and useLocation to make API calls and define routes. - Multiple API calls to fetch game data from RAWG. - State stored and persisted using Redux and local storage. Some of the features provided in this application are:',
    functionality: [
      'Game search feature',
      'Individual section for new / upcoming / most popular & searched games',
      'Game page with detailed information about each game, including game description, release date, star rating, console availability and an interactive image gallery',
      'Transition animations using framer motion',
      'Navigation that underlines the current active page',
      'Particle effects on homepage using ParticleJS',
      'Mobile responsive',
    ],
    imageGallery: [
      gameDatabase2,
      gameDatabase4,
      gameDatabase5,
      gameDatabase6,
      gameDatabase7,
    ],
    imageDescription: [
      'Home Page',
      'New Games Page',
      'Game Details Page',
      '',
      'Interactive Image Gallery',
    ],
  },

  {
    slugName: 'vacationeer',
    name: 'Vacationeer',
    image: vacationeer,
    image2: vacationeer3,
    techStack: [react, gma, nodeJs, express, mongoDB, antd, bootstrap, css],
    link: 'https://vacationeer.herokuapp.com',
    description:
      'A fully responsive back-end focused marketplace CRUD application built with the MERN stack (React, MongoDB, Express & Node). Building this full-stack marketplace application was a great opportunity to further develop some of the core concepts I had been learning up until now including the MERN stack with Redux, advanced CRUD functionality with search, but also: - The core concepts of a marketplace application, how to collect money and pay out to sellers. - Integrating Stripe payments to build a marketplace app. - Advanced use case of Stripe to automate entire payment workflow to build a multi-user app. - Building a server / API with filtering functionality... and a lot more. Some of the features provided in this application are:',
    functionality: [
      'Allows users to post products/services',
      'Allows other users to buy these products/services',
      'Page pagination',
      'Hotel search feature, filtering by destination, start date, end date and number of beds',
      'Filter by price & rating functionality',
      'Star rating system',
      'Automatic redirection to previous page after typing in login credentials to access private functionality / routes',
      'System that checks if hotel has already been booked by the user, no duplicate bookings allowed',
      'Login authentication system with email & password / Google login / Facebook login',
      'Forgot / reset password functionality, confirmation email on sign up etc...',
      'User profile for sellers with dashboard showing booking summaries, account balance, stripe payout settings, when the user joined the website and an option for editing / removing / adding a new hotel for booking.',
      'Google Maps API for location suggestions / autocompletes',
      'View orders in customers dashboard and detailed info via payment modal',
      'Two different types of users are hosted in this app, a seller and a buyer. The seller can for example be a hotel owner who will post the hotel rooms available for booking. The buyer is the one who can then book this hotel room',
      'As the platform owner, you will be able to collect money from customers, take a certain commission/fee for being the platform owner, and then pay the rest to the sellers',
      'Payment flow is automated using stripe. After a customer pays, stripe will allocate a certain percentage to the seller and a certain percentage to the platform owner. Then, every week stripe will automatically pay the balance out to the bank accounts of the account holders',
      'Mobile responsive',
    ],
    imageGallery: [
      vacationeer2,
      vacationeer4,
      vacationeer5,
      vacationeer6,
      vacationeer7,
      vacationeer12,
      vacationeer13,
      vacationeer8,
      vacationeer9,
      vacationeer10,
      vacationeer11,
    ],
    imageDescription: [
      "Seller's Dashboard",
      "Seller's Edit Hotel Page",
      "Buyer's dashboard",
      'Booking Payment Information',
      'Stripe Setup To Become A Seller',
      'Stripe Checkout Page',
      'Stripe Payout Configuration Page',
      'Hotel Details Page',
      '',
      'Login Page',
      'Forgot Password Page',
    ],
  },

  {
    slugName: 'noterjs',
    name: 'NoterJS',
    image: noterjs,
    techStack: [react, typeScript, esbuild, immer, lerna, css, bulma],
    link: '',
    description:
      'An interactive browser-based coding environment, similar to a Jupyter Notebook, but for javascript. You can write Javascript, see it being executed, and write comprehensive documentation using the markdown editor. The workflow of creating this program is different from all my other projects, as it is in fact not me building it from scratch, rather me following a course called "React and Typescript: "Build a Portfolio Project" by Stephen Grider on Udemy. So why did I decide to throw this project into my portfolio? I was originally working on another project, where bundling in the browser would be a necessity for it to be successful. I wanted to try out my set of skills by building out something other than an ordinary internet page. After struggling for some time, and a lot of stack overflow searching I came to the conclusion that Webpack, my bundler of choice for that project, did not work in the browser. After some more research I discovered the bundler Esbuild. While reading the Esbuild documentation and scrolling through stackoverflow after experiencing a specific problem, I discovered a link to the course React and Typescript course on Udemy. I ended up taking the course as it covered many of the topics that I wanted to learn, one of them which was Typescript. The course was filled with so much knowledge and concepts that it took me a whole month of buidling, destroying, rebuilding on my own without peaking the course material, only allowing myself to google, to fully grasp the concepts and reasons for the architectural decision making. With that being said, I have rebuilt this project from scratch with the best of my ability to similar outcomes using different approaches and different methods to see why certain strategies worked better than others and this experience has truly taught me a lot. I absolutely believe I could build a comparable application from the ground up after completing this course, and this project has made me discover a dozen of programming tricks, even more than some of the other projects I have built on my own, which is why I decided to include this project. ',
    description2:
      'Building this application was a great opportunity to familiarise myself with the essential concepts of: - Typescript and how to use React / Redux with Typescript, - Simplifying state updates within Redux with the Immer library, -  Managing a project using a package-based architecture, - Understanding the challenges of in-browser code transpiling and processing, - How to safely handle and execute user-provided code directly in the browser, - Automate deployment with the Lerna CLI... and much more. Some of the features provided in this application are:',
    functionality: [
      'Click cells to edit',
      'The code in each editor window is all merged together into one file. If you define a variable in cell #1, you can refer to it in any of the following cells',
      'You can display any React component, like numbers, strings or anything else by calling the "show" function. "Show" is a built in function that can be called multiple times to show multiple values',
      'Move or delete cells using the top right navigation',
      'Add new cells by hovering on the divider between each cell',
      'Resize the different code windows by dragging either the vertical or horizontal size handles',
      'Persistent code using offline storage called localForage',
      'In-browser code transpiling and processing',
      'Leveraging Web Assembly to run code bundler directly in browser at fast speeds',
      'Code editor directly in the browser, the same editor used by VSCode',
      'Deployment to NPM registry for others to easily access the CLI',
    ],
    imageGallery: [noterjs3, noterjs4, noterjs5, noterjs6, noterjs2],
    imageDescription: [
      'Command To Download CLI From NPM',
      'Command To Run CLI From Terminal',
      'Specify File Where Code Will Be Saved, You Can Later Share This File',
      'Initial load of CLI with instructions',
      'CLI Running In Browser',
    ],
  },

  {
    slugName: 'tourify',
    name: 'Tourify',
    image: tourify,
    image2: tourify2,
    techStack: [
      react,
      firebase,
      nodeJs,
      express,
      mongoDB,
      antd,
      bootstrap,
      css,
    ],
    link: 'https://tourifyshop.herokuapp.com',
    description:
      'A fully responsive CRUD application built with the MERN stack (React, MongoDB, Express & Node). The goal when making this project was to add as much functionality as possible, and preferably by using different programming approaches. I wanted this to be one of my largest and most complex projects yet, to really evaluate and experiment with my knowledge. Building this full-stack application was a great opportunity to augment my expertise in what I had been learning at the time such as: - Integrating firebase for authentication handling and saving user information in MongoDB database, combining firebase with MongoDB for an efficient authentication system, - Using a location data platform like Mapbox that powers the maps and location services used in many popular apps, - Working with a component based styling framework like Ant Design, - Utilizing a cloud-based image / video management service like Cloudinary for effortless multiple image uploads... and much more. There is a lot of functionality in this application, it would be hard to mention everything... so here are some of the features provided:',
    functionality: [
      'Firebase authentication handling',
      'Complete login with email / password & social login (Google)',
      'Forgot / reset password functionality, confirmation email on sign up etc...',
      'Role based access control for users and admin',
      'Automatic redirection to previous page after typing in login credentials to access private functionality / routes',
      'Admin dashboard with add / edit or delete tour / country functionality, booking management system and more...',
      'User dashboard with password update, booking history and invoice / PDF download etc...',
      'Tours CRUD functionality with advanced features including continents, countries etc..',
      'Multiple image uploads with client side resize',
      'Plenty of advanced filtering and searching options',
      'Page pagination',
      'Discount coupon code system',
      '"Add to wishlist" functionality with "Already wishlisted" displayed on the screen if user has wishlisted tour previously without removing it',
      'Option to see how many times a certain tour has been booked',
      'Click continent / country name on detail page to see all tours available in that location',
      'Integrated Mapbox to display map in application with factual start location for each tour',
      'Checkout with stripe for credit / debit card payments',
      'Mobile responsive',
    ],
    imageGallery: [
      tourify3,
      tourify4,
      tourify5,
      tourify19,
      tourify6,
      tourify7,
      tourify8,
      tourify9,
      tourify20,
      tourify21,
      tourify10,
      tourify11,
      tourify12,
      tourify16,
      tourify17,
      tourify18,
      tourify22,
      tourify13,
      tourify14,
      tourify15,
    ],
    imageDescription: [
      'Loading Card Component',
      'Tours Page',
      'Tours Page With Active Filters',
      'Filtered By Continent Page',
      'Tour Details Page',
      '',
      '',
      '',
      'Booking Page',
      'Final Booking Page',
      'Wishlist Page',
      'User Dashboard With Booking Summaries',
      'Booking Invoice PDF Download',
      'Admin Add Coupon Page',
      'Admin Add Country Page',
      'Admin Add Tour Page',
      'Admin Edit Tour Page',
      'Register Page',
      'Login Page',
      'Forgot Password Page',
    ],
  },

  {
    slugName: 'amplified-music-player',
    name: 'Amplified Music Player',
    image: amplified,
    image2: amplified3,
    techStack: [react, scss],
    link: 'https://amplified-sound.netlify.app',
    description:
      'This project is a React music player with expected functionality. There is also a library with a selection of royalty free music that the user can browse through and play. This application has really helped me with the concepts of: - Working with hooks such as useRef for capturing input values, - Passing, drilling and destructuring props, - Passing, lifting and modifying state... and more. Some of the features provided in this application are:',
    functionality: [
      'Play / pause',
      'Skip Forward / back',
      'View song length / time left',
      'Drag handler to change position in current song',
      'Song library to choose songs from',
      'Mobile responsive',
    ],
  },
]

export default projects
