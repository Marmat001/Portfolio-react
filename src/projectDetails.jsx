import vroom from './img/vroom.png'
import vroomGif from './img/vroom.gif'
import gameDatabase from './img/gamedatabase.png'
import gameDatabaseGif from './img/gamedatabase.gif'
import vacationeer from './img/vacationeer.png'
import noterjs from './img/cli.png'
import tourify from './img/tourify.png'
import amplified from './img/amplified.png'
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
    gif: vroomGif,
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
    description: 'the best shop',
  },

  {
    slugName: 'game-database',
    name: 'Game Database',
    image: gameDatabase,
    gif: gameDatabaseGif,
    techStack: [react, motion, styledComponents, rawg],
    link: 'https://gamedatabase.netlify.app',
    description: 'the best shop',
  },

  {
    slugName: 'vacationeer',
    name: 'Vacationeer',
    image: vacationeer,
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
    techStack: [react, scss],
    link: 'https://amplified-sound.netlify.app',
    description: 'the best shop',
  },
]

export default projects
