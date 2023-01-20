<h1 align="center">Tikkaway</h1> 

<h2 align="center">A Full Stack Restaurant Web Applicaiton where you can find your favourite dishes to order.</h2>

<br />
<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Reactjs" />
    <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Firebase-5f6368?style=for-the-badge&logo=firebase&logoColor=FFCC30" alt="Firebase" />
</p>

<h3 align="center"><a href="https://restaurant-app-bceb0.web.app/"><strong>« Try the demo here »</strong></a></h3>

<p align="center"> 
    <br />&#10023;
    <a href="#Quick-Start">Quick Start</a>   &#10023;    
    <a href="https://github.com/sumit-sharma-02/tikkaway/issues">Report Bug</a>   &#10023;
    <a href="#Contact">Author</a>&#10023;
  </p>

<p align="center"> 
    Tikkaway is a full stack restaurant web application that allows you to order food online. It has wide variety of categories on the menu like Chicken, Curry, Rice,     Fish, Fruits, Icecreams, Soft Drinks etc. 
</p>

![Tikkaway poster](https://user-images.githubusercontent.com/52236473/212070654-879d8817-57b3-493f-a461-62a3bd2394a3.png)
<br />

## Sections
- Login
- Home
- Menu
- Cart
- Fresh Items
- Hot Dishes
- Categories
<br />

## 🚀 Features
- Login
- Scrollable healthy and fresh items
- Dishes Category cards
- Cart Add/Remove Items
<br />

## Some Screenshots of Tikkaway:
<table>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/52236473/212076334-75307dba-c996-4638-89d6-74a7e379062a.png" alt="home" /></td>
    <td><img src="https://user-images.githubusercontent.com/52236473/212076902-3ca3a218-4e8c-4425-8ed5-b5d111676960.png" alt="menu" /></td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/52236473/212076931-9699750d-a9b4-4937-9f5e-d812b4bc69e5.png" alt="cart" /></td>
    <td><img src="https://user-images.githubusercontent.com/52236473/212076973-d86bfa92-ecb7-42ee-88e7-bacd2d4e03ee.png" alt="new item" /></td>
  </tr>
</table>
<br/>

## Quick Start
```shell
$ git clone https://github.com/sumit-sharma-02/tikkaway.git
$ cd tikkaway
$ npm install
$ npm start
```

## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```json
// .firebase
{
  "projects": {
    "default": "your-project-id"
  }
}
```

```javascript
// src/firebase/config.js
export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```

## NPM Commands

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Build the application to `./build` directory|
|`npm test`|Test the application; watch for changes and retest|

## Contact
If you want to contact me, you can reach me through below handles.

[![linkedin](https://img.shields.io/badge/Sumit_Sharma-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sumitsharma002/)
[![Github](https://img.shields.io/badge/Sumit_Sharma-20232A?style=for-the-badge&logo=Github&logoColor=white)](https://github.com/sumit-sharma-02/)

## Show your support

Give it a ⭐️ if you like it.
