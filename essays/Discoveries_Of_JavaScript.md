---
layout: essay
type: essay
title: Discoveries of Javascript
date: 2021-09-01
labels:
  - Software Engineering
  - Javascript
  - Learning
---
## Creative Thinking With Javascript
Discovering new tools will almost always lead to a spike in creativity and the development of new ideas. This is how I feel about learning Javascript. I have some prior experience with Javascript, however while studying it I have made many new discoveries on the language itself and formed new creative ideas and possibilities in programming and software engineering. 

## Biggest Discoveries

The biggest discovery I found while studying Javascript was the relationship between a Javascript object (or dictionary) and the JSON format. Over the summer I became fascinated with developing full stack iOS applications (frontend and backend) using the languages Swift and Python. The biggest challenge for me while developing these was understanding how a backend worked. To tackle this setback, I learned Django which is a Python web framework which allows the development of a web api. This can be used to make post and get requests with data in a database. I found that the data returned from a get request was a JSON and did not fully understand what that was but just accepted that that's how the data is given and how to convert it. With that said, when I started diving into Javascript deeply, I learned about the Javascript object structure which is very similar to the JSON format. Actually, after referring to the Mozilla Developer Network web docs for Javascript, I found that converting a JSON to a Javascript object just takes a simple function called JSON.parse(), making the conversion very simple. With that said, I noticed that if I were to use the Javascript language for a backend instead of Python, I would better understand how a backend would work allowing me to build a better quality backend for applications. I also really enjoyed the Javascript object structure as you can really see all the properties of an object very easily and organized rather than a normal class structure. I also discovered from this that web applications such as websites can be made quite easy as well using Javascript since JSON can be easily converted to the object structure and then read easily to use the data from a database. With these things said, Javascript is a great language for software engineering due to its large number of functional tools that the developer can use such as objects.

### Example of JSON and Javascript Object Similarities

#### JSON:
‘{
    “Name”: “Charlie”,
    “Age”: 20,
    “School”: UHM
}’

#### Javascript Object:

{
   Name: “Charlie”,
   Age: 20,
   School: UHM
}

Something else that I learned while learning Javascript is the ability to assign functions to variables, assign functions to functions, return functions, and the promise object. I found this to be very interesting and a brand new concept to me. The applications of this are very large and I feel like I have already discovered ways where I can apply this. An example of a way I can use these would be a completion handler, which is a function that stalls until data from a database has been fully loaded and then executes code depending on the state of the load. I dealt with completion handlers a lot when making iOS apps and I found that the promise object and the widespread capability of functions in Javascript can accomplish this task easily when trying to receive data and display it on a website. Since a promise includes a resolve and reject parameter, I can use these parameters to help steer when data has been fully loaded or not. This opens up a brand new path of thinking when dealing with programming and software engineering.

## Learning Through Athletic Software Engineering

Throughout my continued learning of Javascript I go through the process of athletic software engineering which has the primary goal of not only refining programming skills but also practicing solving problems which would be used in a software engineering setting. This includes a “Workout of the Day” (WOD) given once a week with several practice WODs to help prepare for the actual WOD. Currently I have not gotten to my first WOD but I have done several practice WODs. My first thoughts of the practice WODs was that this is very stressful. But to be honest, I also enjoy them because it's a challenge in solving a problem. Personally I am a very competitive person who wants to solve problems to satisfy myself. This does not sound like the goal of the WODs but my main goal to take away from this is to improve my software engineering and programming skills. The WODs get me excited because it gives me a chance to see if I am able to keep up with these problems at a high standard and also teaches me how to solve problems on the spot. With that said, I am a big fan of the WODs and feel like it will work for me going forward. Here is an example of one of the practice WODs I did in my class which converts the temperature given to the temperature type given: 

function temperatureConverter(temperature, temperatureType) {
  if (temperatureType === "F") {
    return (temperature - 32) * 5/9;
  } else if (temperatureType === "C") {
  	return fahrenheit = (temperature * 9/5) + 32;
  } else {
    return "Illegal temperature type";
  }
}

console.log(temperatureConverter(212, "F"));     // 100
console.log(temperatureConverter(0, "C"));       // 32
console.log(temperatureConverter(0, "X"));       // Illegal temperature type

## Final Thoughts

With these things kept in mind, I have learned a lot from Javascript so far and I am very excited to use it in a professional setting and apply it in creating professional, helpful software that the world can use. I have always loved creating and developing things, with Javascript and the weekly WOD’s I feel like I will have the necessary tools and skills to accomplish my passion. 

