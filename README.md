# React Library App
> Using React and Redux, I created a frontend for the 
[Phonebook Flask App](https://github.com/MarlisaRebaum/phonebook-app).
This project uses the library book database created in ElephantSQL and API 
routes written with Flask for the backend.

***Please Note:*** *The backend for this app is hosted on Heroku. 
As of November 28, 2022 Heroku no longer offers a free version. I have not 
upgraded to a paid version and as a result, the app does not currently pull the 
database. I am aware of this problem and will look for solutions. In the meantime, 
please still check out my code :blush:*

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Installing](#installing)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)


## General Information
This project was the first React project I have created. For this project, I used
the backend created with Flask and ElephantSQL from a previous project. The backend
allows authenticated users to retrieve a table of library books and allow user to
edit and delete entries as well as add new books to the list. Previously, 
ElephantSQL was used with user tokens for authentication. The authentication was
replaced with Firebase Auth with Google or email login in this project. This 
project is hosted on Firebase. 

## Technologies Used
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Installing

Clone this repo

```
git clone https://github.com/MarlisaRebaum/react-library-app

cd library-app
```  

#### Available Scripts

```  
npm start
```   

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```  
npm test
```  
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) 
for more information.

```  
npm run build
```  
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

```  
npm run eject
```  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Status
Project is:  _in progress_ 

## Room for Improvement
Some areas of improvement include:

- The "contact" form is not actually working. Some things to add that would make
it function would be:
  -- Requiring email format in the "email" field
  -- linking the form to an inbox, so the email actually gets sent
  -- making all fields required and then only showing the "message sent" alert 
  when the message has actually been successfully sent
- Sometimes there is an error loading pages and the fallback "loading..." is 
displayed, but the page will only load when refreshed. I need to look into what
is causing this issue
- Currently data is not loading due to Heroku version used being deprecated

## Contact
Created by [Marlisa Rebaum](https://www.linkedin.com/in/marlisarebaum/) - feel free to contact me!
