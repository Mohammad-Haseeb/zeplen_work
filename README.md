Material UI is created by Google.It's mostly  UI library  in market.
I try to used Functional components it's being a new Approach.You can use it if you wanna adopt best practices of current React js community.

 Now I also used a React-routes to Attach and login page with Sign up because React Provides Signle Page Application.So, thats why we used react-router-dom to integrate page with eacher other
   
 You can  view your wrok at this link
 
http://zeplenwork.surge.sh/
   
   and git hub repository of full project
   https://github.com/Mohammad-Haseeb/zeplen_work
   

First you have to installed Material UI

To install and save Material UI in your package.json dependencies, run:

// with npm
npm install @material-ui/core

// with yarn
yarn add @material-ui/core


Then You have to install react router dom in your React Application
with this command:

yarn add  history@next react-router-dom@next

and  then Add App.js file in your application because All other files are attached with this file.
And then also replace index.js file my indes.js with that i provide 



## Guide to learn  Firebase querie
if you want to add data with new rendom use can use:

firebase.database().ref("players").push(data);

if you want to add data with child you can use;

firebase.database().ref("players").child("Nam").set(data);

if you want to change data you can use:
 firebase.database().ref('student/Nam').set(newData);

if you want to load data only once at file loading time:

firebase.database().ref('student').on(ce'value',function(data){
      console.log(data.val())
      
          })

if you want to load data only once at file loading time:

firebase.database().ref('student').on('child_added',function(data){
      console.log(data.val())
      
          })

if you to  remove  data :

firebase.database().ref('player').remove()





If you have any query you can ask
