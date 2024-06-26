# React Calculator Application

Hi! Welcome to my repository for my calculator project that I made using **React.js**. The purpose of this project was to replicate the look and feel of the iOS calculator app in portrait mode, and have it fully functional as well. I also added some fun theme buttons to change the color scheme of the calculator, I hope you like one of the themes! You can view the deployed project on the link below.

### NOTE: The theming buttons aren't working properly on the deployed version
_So I have attached images below showing them_


[Themes](https://imgur.com/a/8ulfTte#AXm4XT5)



[Deployed Calculator Application](https://serene-heyrovsky-1f2e8b.netlify.com/)


# Why React for this project?

Besides being comfortable in working with React and gaining more practice in the library, I felt like React would be a great choice for this project. Why? React is great at handling application state, and wherever you need to update that state (mainly the calculator display), its very easy to do so. Even better, this isn't a massive project and there isn't a crazy amount of state, so there is no need to bring in things like Redux or the Context API. Starting a React application and getting up and running is also very quick and very easy with create-react-app. Need to bring in other libraries? You have a plethora of npm packages for you to use. For example, I wanted to use SASS, a simple *npm install node-sass* to use the node-sass package, change.css file extension to .scss and I am good to go. I really enjoy working with React overall and find it to be a great library/framework.

# Code Explanation and Thought Process

When I first started the app and got up and running with a boilerplate React application, my first thing to tackle was to create the HTML skeleton, but there were things to consider here. Do I split up the application into components like React is meant to do (e.g. calculator functional keys is one component, the digits are another), and pass around data through props? Or do I just put it all in the main App.js and work from there? That defintely sounded like an easier approach, even though it probably isn't the *best*, I wanted to be able to make the calculator functional and working within a single component with the single state object sounded much better. I went ahead and created the HTML skeleton totally in the main App.js file and immediately after that spent a decent amount of time styling it so it looked like it was supposed to. With that out of the way, we have a great looking calculator but it doesnt work at all, so it was time to tackle the functionality. 

### Functionality

I played around with my iOS calculator app a quite a bit and always had it in front of me while working on the functionality. The first thing that immediately came to mind was the calculator display. I knew that was going to be a major part of the state so I opened up the state object and set a displayValue property to 0. I then tested this by adding an onClick event handler on the 1 digit key which used a method that took in a digit paramter, and I just passed in the digit of the button inside the method. It works! I added this to the rest of the digits, but there was a problem, the initial "0" value in the display was always there. I added in a simple ternary operator to check if the 0 was there, and if it was, replace it with the value being clicked. Again, it works. This is how I incrementally tackled the functionality, with the main question being like "Once I have a number in the display, and want to perform a math operation, what next?", answer being that the current display value needs to be stored in a variable so it can be checked with the second value after the operation key is clicked, which these were all pieces of state that needed to be stored. The actual operations needed to be stored somewhere as well and the easiest way to do that was to store them in an object. Then there were other easier things like clearing/resetting the display, adding the positive/negative toggle, and the percentage calculation.

# Additions, Helpers and Current Bugs/Issues

I did need to sift through the internet quite a bit to get some of my answers for certain things, but not everything is perfect on here. My solution prbably isn't the best solution but I am happy that I got it working, even if I had to use some answers from stack overflow/other websites and modify it to work inside my application, such as the keypress event handling. I wanted to make sure that the user could use both their mouse to click and use the keypad on their keyboard to be able to use the calculator and I had a hard time finding a solution. I also wanted to add a button state like there is when clicking it, that darkens the background when using the keypad, but could not find a solution. The theming is also an issue, but something I thought was an awesome little addition that I defintely wanted to add. The buttons lead to different pages where the component is just an entirely replicated with a different style sheet which is copied from the main App.css and modified, so there is a lot of repeated code and I know this isn't best practice. My original idea behind adding themes was being able to conditionally render styles based on the button you clicked, but I could not get it working, so I had to resort to using <a> tags to link to completely seperate, but same (besides styling) components. There is also some other bugs in the calculator, such as the display numbers being able to go off the screen. I added in a condition to render a certain class so the display text does gets smaller once it gets larger than a certain number, but its not perfect. 
  
 ### What could be added to make the app better
 
 This application is written on the "old" style of writing React code, using ES6 classes and the traditional state object. Rewriting this to use modern practices like using functional components and hooks is probably much better, and using that method would allow us to split up the app in different components and pass data around much easier, but I am just not that familiar with it _**yet**_. Also fixing the way the theming/applying styles is something I would defintely change. If there could be a single main calculator component with conditionally rendered styles, instead of using <a> tags and refreshing the page constantly. sounds like a much, much better solution to me. Once I get better at using modern React practices, I can add these additions!
