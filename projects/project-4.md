---
layout: project
type: project
image: images/surf-connect-project-picture.png
title: Surf Connect Web Application
permalink: projects/surf_connect_web_application
# All dates must be YYYY-MM-DD format!
date: 2021-12-15
labels:
- Javascript
- Meteor
- Web Application
- Full Stack Development
- React
- Semantic UI
- Uniforms
- Mongo DB
summary: Surf Connect is a website my team and I developed to connect surfers in the University of Hawaii community regardless of their skill level together. Surf Connect allows the user to pick a surfing ability and time they would like to surf and the app will give the user suggestions of users that match their surfing ability and time. The application also gives real-time surf forecast information for surf locations. My team and I used Github to work collaboratively on the project and followed the guidelines of Issue Driven Project Management.
---

<img class="ui large rounded image" src="/images/surf-connect-landing-page.jpg">

### What Surf Connect is All About

Surf Connect was developed as a final project web application for my Introduction to Software Engineering class, ICS 314. For this project, I was assembled into a team consisting of other students and we were required to make a web application that would be useful to the University of Hawaii community. During the brainstorming process, my team members and I decided that making a website that connected surfers in the community together based on their skill-set and time they would like to surf was a great idea, and decided we would make a web application based on this idea. The application would also allow users to send messages to each other and also view the suggested surf locations to them based on the skill level of the user and location on that day. The skill level of the location is based on the forecast of the location on that day. We used the web framework Meteor to develop the application which incorporated the use of Javascript as the programming language. We used the React and Semantic UI frameworks to design the user interface of the website and Mongo DB as the database of the website. The goal of this project was to learn how to create web applications using all of these tools and also learn how to work in a team and communicate effectively to develop a product. During development, my team and I used Github to work together collaboratively on the project and also followed the guidelines of Issue Driven Project Management to stay organized and keep track of what we needed to accomplish to finish the application.

### Development of Surf Connect

My part of this project focused on developing the frontend and backend of the Connect Page and Suggestions Page on the website. I also was in charge of developing the entire messaging system on the Connect Page and also developing the real-time surf forecast for the Forecasts Page. To get started I drew sketches of what I wanted the Connect and Suggestions Page to like. After discussing with the team the designs, I started working on the user interface by using React and Semantic UI frameworks. After I got what I wanted the pages to look like, I started working on the messaging system. What I had to do at first was create a Mongo DB database collection called MessageCollection. Whenever a user wrote a message, the message would be inserted into this collection. Messages would be viewed on the Connect Page in a box called Messages which is fixed to the screen and when opened all messages would appear. The user would be able to scroll through the messages and can reply to them. The connect page worked simply where the user's surfing ability was used to make a query to the UsersCollection in the database created by another team member, to find users with the same surfing ability. The code below shows how this was done:

#### How Users Were Connected
```javascript
const userAbility = (this.props.currentUser.length === 0) ? 1 : (this.props.currentUser[0].ability);
    const userTime = (this.props.currentUser.length === 0) ? '12:00am' : (this.props.currentUser[0].time);
    return (
      <Container textAlign='center' id='connect-page'>
        <Header as='h3' style={headerStyle}>Users Connected By Surfing Ability</Header>
        <Divider />
        <Card.Group stackable centered>
          {this.props.users.filter(user => user.ability === userAbility).map(user => <UserDisplay key={user._id} user={user} senderImage={this.props.currentUser[0].image} />)}
        </Card.Group>
        <Header as='h3' style={headerStyle}>Users Connected By Time</Header>
        <Divider />
        <Card.Group stackable centered>
          {this.props.users.filter(user => user.time === userTime).map(user => <UserDisplay key={user._id} user={user} senderImage={this.props.currentUser[0].image} />)}
        </Card.Group>
        {/** Below Code is irrelevant to topic */}
    );
```
The line ```this.props.users.filter(user => user.ability === userAbility).map(user => <UserDisplay key={user._id} user={user} senderImage={this.props.currentUser[0].image} />``` specifically shows how the users matched to the user based on ability are found. Here is a picture below of the final Connect Page which has all matched users for a user and the messaging system:
<img class="ui large rounded image" src="/images/surf-connect-connect-page.png">

Another significant impact I had on this project was the development of the real-time feature for the Forecasts Page. I had to dive out of the scope of the class and use some prior knowledge I had about API's which I learned over the summer. I found a real-time surf API online which was free and reliable. I made an update function that made an API call given the name of the spot as a parameter and I gathered the data from the call into an object which updates a previous Mongo DB document in the LocationsCollection which was developed by another team member. The Forecasts Page frontend was developed by another user, so they loaded data onto the user interface for the user to see. Below is the code for this update function which makes the API call:

```javascript
export const updateSurfData = async (locationName, spotName, spotImage) => {
  // Makes API call to receive wave data for the spot given.
  const waveInfo = await fetch('https://hawaiibeachsafety.com/rest/conditions.json?beach_id=5');
  const waveInfoToJson = await waveInfo.json();
  const locationInfo = searchSpot(waveInfoToJson, spotName);
  const waveHeight = locationInfo.surf;
  const wind = locationInfo.wind;
  const weather = locationInfo.weather;
  const temperature = locationInfo.temp;
  const newHeight = getHeightRange(waveHeight);
  const minWaveHeight = newHeight[0];
  const maxWaveHeight = newHeight[1];
  // Calculates the surf ability of the spot.
  const ability = calculateAbility(minWaveHeight, maxWaveHeight);
  // Creates a location object with the given information.
  const location = {
    name: locationName,
    image: spotImage,
    surf: `${minWaveHeight}-${maxWaveHeight} ft`,
    wind: wind,
    weather: weather,
    temperature: temperature,
    ability: ability,
  };
  // Checks if location is in DB.
  if (Locations.collection.find({ name: location.name }).count() === 0) {
    // Adds locations to DB.
    Locations.collection.insert(location);
  } else {
    // Updates LocationCollection with new data from API.
    Locations.collection.update({ name: locationName }, { $set: location }, (error) => (error ?
      console.log(`Error updating location: ${spotName}`) :
      console.log(`Successfully updated location: ${spotName}`)));
  }
};
```
The final result of the Forecasts Page which uses this data looks like this:

<img class="ui large rounded image" src="/images/surf-connect-forecasts-page.png">

### Takeaways

Throughout working on this project, I learned a large variety of skills. I think the most important skill I learned was working in a team of people to develop a product. I felt this is important because in the future I will need these skills as a software engineer. An example of some of the skills obtained from working in a team is using Github and its actions such as branching and merging actions. But learning how this works, I understood how to work on a project efficiently without having merge conflicts in the code which can break the system. Another major thing I learned from this project is going through the process of creating a full-stack web application from start to finish. I learned a lot more about how User Interfaces, frontend code, and backend code all work together to form an application. Specifically, I have always wanted to learn how to develop a real-time messaging system, through this project I was able to build one which taught me a lot about the basics of building a messaging system. The messaging system may have its flaws but at least I learned from it and I and happy to do more research on creating a better one. In all, this project was the most influential project on me up to this point and I feel the knowledge earned from this project stays with me forever.

### Source Code

[Surf Connect Source Code](https://surf-connect.github.io)

