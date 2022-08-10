# My Portfolio Website

#### Table of Contents
- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Commands](#commands)
- [Tools](#tools)
- [Folder Structure](#folder-structure)

***
### Description
This repository hosts the source code for my personal portfolio website. The website showcases my education and professional experience as well as private projects I implemented in the past. Additionally, the webpage offers a contact form and links to all my professional social media accounts. The application is implemented using ReactJS and was completely designed and developed from scratch.

***
### Prerequisites
In order to start this project locally, the following things need to be installed:
  - [Node.js](https://nodejs.org/en/) as the runtime environment
  - [Yarn](https://yarnpkg.com/) as the package manager
  
Additionally a `.env` file is necessary to get the contact form working

***
### Installation
To install the project and get it started locally, you have to perform the following steps: 
  1. Clone the repository
  2. Cd into the repository folder
  3. Run `yarn` to install the necessary dependencies
  4. Run `yarn serve` to start the application on port `3000`
  
***
### Commands
This is a list of useful commands for the project: 
  - `yarn` installs the necessary dependencies
  - `yarn serve` starts the application on port `3000`
  - `yarn serve:network` starts the application on port `3000` in your local network
  - `yarn build` creates a production build in the ./dist folder
  - `yarn test` runs the tests (not yet implemented)
  
***
### Tools
This is a list of tools, libraries and technologies used in this project:
  - [Yarn:](https://yarnpkg.com/) Package Manager for npm projects
  - [React:](https://reactjs.org/) JavasScript Library for building component based User Interfaces
  - [TypeScript:](https://www.typescriptlang.org/) strongly typed Programming Language built on top of JavaScript
  - [ESLint:](https://eslint.org/) Linter for JavaScript and TypeScript projects
  - [Prettier:](https://prettier.io/) Code Formatter
  - [Webpack:](https://webpack.js.org/) Module Bundler for JavaScript projects
  - [Material UI:](https://mui.com/) Open-Source React component library that implements Google's Material Design
  - [tsParticles:](https://particles.js.org/) TypeScript library for creating particle background animation
  - [react-full-page:](https://github.com/zwug/react-full-page) React library to create fullpage applications
  
***
### Folder Structure
The project is structured as follows:

src  
├── assets  
├── components  
├── types  
└── views  

The individual folders serve the following purposes:
  - `assets:` contains all the necessary images such as programming icons, thumbnails or project images as well as my CV  
  - `components:` contains all individual React components that build up the respective views
  - `types:` contains necessary type declarations
  - `views:` contains the five views of the application, i.e. Home, About Me, Experience, Project and Contact View
