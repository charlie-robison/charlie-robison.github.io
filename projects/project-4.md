---
layout: project
type: project
image: images/iOS_RPG.png
title: Surf Connect Web Application
permalink: projects/iosRPG
# All dates must be YYYY-MM-DD format!
date: 2021-12-15
labels:
- Javascript
- Meteor
- React
- Semantic UI
- Mongo DB
- Github
  summary: Surf Connect is a website my team and I developed to connect surfers in the University of Hawaii community regardless of their skill level together. Surf Connect allows the user to pick a surfing ability and time they would like to surf and the app will give the user suggestions of users that match their surfing ability and time. The application also gives real-time surf forecast information for surf locations. My team and I used Github to work collaboratively on the project and followed the guidelines of Issue Driven Project Management.
---

<img class="ui medium right floated rounded image" src="/images/surf-connect-landing-page.jpg">

### What This Project Is About

Surf Connect was developed as a final project web application for my Introduction to Software Engineering class, ICS 314. For this project, I was assembled into a team consisting of other students and we were required to make a web application that would be useful to the University of Hawaii community. During the brainstorming process, my team members and I decided that making a website that connected surfers in the community together based on their skill-set and time they would like to surf was a great idea and decided we would make a web application based on this idea. The application would also allow users to send messages to each and also view the suggested surf locations to them based on the skill level of the user and location on that day. The skill level of the location is based on the forecast of the location on that day. We used the web framework Meteor to develop the application which incorporated the use of Javascript as the programming language. We used the React and Semantic UI frameworks to design the user interface of the website and Mongo DB as the database of the website. The goal of this project was to learn how to create web applications using all of these tools and also learn how to work in a team and communicate effectively to develop a product. During development, my team and I used Github to work together collaboratively on the project and also followed the guidelines of Issue Driven Project Management to stay organized and keep track of what we needed to accomplish to finish the application.

### My Involvement

My part of this project focused developing the frontend and backend of the Connect Page and Suggestions Page on the website. I also was in charge of developing the entire messaging system on the Connect Page and also developing the real-time surf forecast for the Forecasts Page. To get started I drew sketches of what I wanted the Connect and Suggestions Page to like. After discussing with the team on the designs I started working on the user interface by using React and Semantic UI frameworks. After I got what I wanted the pages to look like, I started working on the messaging system. What I had to do at first was created a Mongo DB database collection called MessageCollection. Whenever a user wrote a message, the message would be inserted into this collection. Messages would be viewed on the Connect Page in a box called Messages which is fixed to the screen and when opened all messages would appear. The user would be able to scroll through the messages and are able to reply to them. The connect page worked simply where the user's surfing ability was used to make a query to the UsersCollection in the database created by another team member, to find users with the same surfing ability. The code below shows how this was done:
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
The line ```javascript this.props.users.filter(user => user.ability === userAbility).map(user => <UserDisplay key={user._id} user={user} senderImage={this.props.currentUser[0].image} />``` specifically shows how the users matched to the user based on ability are found. Here is a picture below of the final Connect Page which has all matched users for a user and the messaging system:
<img class="ui medium right floated rounded image" src="/images/surf-connect-connect-page.png">

The the

### What I Learned

Throughout the process I learned how to organize all my files and create seperate objects, methods and helper methods in my code for each part of the game. For example, the player had its own object which contained its level statistic, its image, and getter/setter methods to create animations. Another example is having a seperate function to create the player's health meter and a seprate function for the enemy movement and AI. Since this game is still in devlopment, I plan on adding multiplayaer functionality once I learn more about real time APIs. In all, I learned the most about using object oriented programming in a real setting and applied it to making a large video game.

### Source Code

[iOS RPG Source Code](https://github.com/charlie-robison/ios-game-source-code)

