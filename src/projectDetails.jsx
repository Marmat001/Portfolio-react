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
import vacationeerGif from './img/vacationeer.gif'
import noterjs from './img/cli.png'
import tourify from './img/tourify.png'
import tourifyGif from './img/tourify.gif'
import amplified from './img/amplified.png'
import amplifiedGif from './img/amplified.gif'
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
      'This project was built when I first started learning the MERN stack. This was the first larger project I worked on from scratch, without using some kind of prebuilt plugin or platform. Building this ecommerce styled full stack application was a great opportunity to familiarise myself with the core concepts I had been learning at the time such as: - Managing global state with Redux (Actions & Reducers), - Using redux state in components (useDispatch & useSelector), - Creating an extensive backend with JWT authentication using Express, - Working with a mongoDB database and the Mongoose ODM, - Creating custom authentication middleware... and much more. Some of the features provided in this application are: ',
    functionality: [
      'Custom database seeder script to insert development data',
      'Fully featured shopping cart with PayPal and debit / credit payments',
      'Car reviews and ratings system',
      'Carousel that displays latest additions',
      'Page pagination',
      'Car search feature',
      'Car Inventory functionality with real time "in stock count" update',
      'Login authentication system with email / password and Google login ',
      'User profile with order summaries and the ability to add / update profile picture',
      'Admin area to manage orders, cars and customers. Functionality included: Updating orders to approved / payed / delivered. Add / update / remove cars from website inventory. View all order details. Give admin rights to other users and create / remove user accounts',
      'Ecommerce checkout process (shipping, payment method, etc)',
      'Paypal / credit card integration',
      'Download / view order payment PDF for both customers and admins',
      'Contact form with legitimate email dispatch on send',
      'Keyframe transition animations on homepage and typewriter styled headings on shop page', // for a unique user experience
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
    techStack: [react, motion, styledComponents, rawg],
    link: 'https://gamedatabase.netlify.app',
    description:
      'Project built using the RAWG Video Games Database API, the largest open video games database currently available. Some of the features provided in this application are:',
    functionality: [
      'Game search feature',
      // 'Page pagination',
      'Individual page for new / upcoming / most popular games',
      'Transition animations using framer motion',
      'Navigation that underlines the current active page',
      'Game page with detailed information about each game, including game description, star rating, console availability and an interactive image gallery',
      'Mobile responsive',
    ],
    imageGallery: [
      gameDatabase2,
      gameDatabase4,
      gameDatabase5,
      gameDatabase6,
      gameDatabase7,
    ],
    imageDescription: ['Home Page', 'New Games Page', 'Game Details Page'],
  },

  {
    slugName: 'vacationeer',
    name: 'Vacationeer',
    image: vacationeer,
    image2: vacationeerGif,
    techStack: [react, gma, nodeJs, express, mongoDB, antd, bootstrap, css],
    link: 'https://vacationeer.herokuapp.com',
    description: 'the best shop',
  },

  {
    slugName: 'noterjs',
    name: 'NoterJS',
    image: noterjs,
    techStack: [react, typeScript, esbuild, immer, lerna, css, bulma],
    link: '',
    description: 'the best shop',
  },

  {
    slugName: 'tourify',
    name: 'Tourify',
    image: tourify,
    image2: tourifyGif,
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
    description: 'the best shop',
  },

  {
    slugName: 'amplified-music-player',
    name: 'Amplified Music Player',
    image: amplified,
    image2: amplifiedGif,
    techStack: [react, scss],
    link: 'https://amplified-sound.netlify.app',
    description: 'the best shop',
  },
]

export default projects
