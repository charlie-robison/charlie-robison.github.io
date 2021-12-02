---
layout: essay
type: essay
title: Innovation Prospered Through Design Patterns
date: 2021-12-01
labels:
- Software Engineering
- Design Patterns
- Learning
---

## A Common Problem Solved With Ease
During the development of an application, software engineers want their development to be efficient and also have a final product that is a unique brand new application the world has never seen. There are many big and small problems that software engineers run into during development, some of these problems have certain patterns that can be solved in a general form with some adjustments specific to the problem. This is called a design pattern, which is a general solution to repeatable problems in software development. You can think of a design pattern sort of like a template where a commonly repeatable problem can be solved using this template but is customized based on the specifics of the problem. Design patterns are very important in software development and to the innovation of applications.

## Design Patterns Thought of as a Physics Formula
Solving problems in physics is a good metaphor for viewing what design patterns are in software engineering. In the study of physics, many complicated problems seem completely different and unique from one another. To help solve these problems the similarities of some problems are found between them and a general method or formula is used to solve these problems with adjustments to the solution based on the specifics of the problem. A good example would be a problem involving finding how long it would take a ball to hit the ground after being thrown up and a problem involving how long it would take a rocket to travel upward 500 meters. To someone who is not in physics, these two problems seem to be very different from each other and would be difficult to solve from scratch since they would not know the method of finding the solution. Well in case you didn't know, these two problems are more similar than you think. They are both called kinematic problems in the physics world and both can be found using a similar method which is solve for the time variable in the kinematic formulas given input variables. With this said, the same formula can be used to solve both problems. The formulas given can be thought of as design patterns, and a chosen design pattern can be used to solve a specific problem just like a formula. This is what a design pattern does in software engineering. It can solve many similar re-occurrin problems with a general solution which can be modified to fit the needs of the problem.

## Choosing the Correct Formula
Back to our metaphor of physics formulas representing design patterns, choosing the wrong formula for a problem in physics will lead to an incorrect solution. Instead of efficiently solving the problem, time is lost using the wrong formula. This is the same as a design pattern, if the wrong design pattern is chosen, the code will be wasted and the solution will not be solved. Another problem that arises if the wrong design pattern is chosen which leads to a solution is the confusion between team members during development. Even if the problem solves the problem, conciseness is lost and the code is written unprofessionally. An example would be the use of a Singleton design pattern when not needed. A Singleton design pattern is known to be an instance that acts as a global variable in a language that does not contain object oriented programming. Perhaps a Singleton instance is an instance that holds the value of a number and there is a method with two parameters taking in two numbers that returns the sum of the two numbers. If this instance is not used anywhere else in the program except for this method which has to be passed in as a parameter, the instance is unnecessary and adds confusion to the code. A correct use of a Singleton design pattern would be to have an Singleton instance that reads and writes to a database of a application. This instance would be used to access the methods to the database. I have used this design pattern before in a web application which allows users to create an account.
### Creation of Singleton Instance
In the code below, it shows how a variable named Users is an instance of the UsersCollection() class which has access to MongoDB methods for UsersCollection. This is an example of a Singleton design pattern.
```javascript
/* MongoDB collection created above called UsersCollection inside the class called UsersCollection. */
export const Users = new UsersCollection();
```

### Usage of Singleton Instance
The code below displays how a Singleton instance is used to solve the problem in creating users. In this case a function called submit, adds data submitted from a form into the UsersCollection database. It does this by called the instance variable Users followed by the MongoDB method to insert the data into the database.
```javascript
// On submit, insert the data.
  function submit(data, formRef) {
    const { name, image, description, time, ability } = data;
    const owner = Meteor.user().username;
    Users.collection.insert({ name, image, description, time, ability, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Profile created successfully', 'success');
          formRef.reset();
        }
      });
  }
```
This shows an effective way of using the correct design pattern as a solution to a problem. Choosing the correct pattern is important. Just like physics, you don't want to end up doing more work in finding a solution or maybe not even finding a solution. With that said, design patterns are great for being a general solution to problems but need to be chosen carefully based on the problem.

## The Clever Use of Design Patterns
Throughout my studying of software engineering so far, I have come across a variety of problems that needed to be solved that have similarities to them. Specifically, an example of one of these problems was for a website I was making with a team that involved messaging. The problem was I wanted the message system to allow users to view their messages on the website, reply to these messages, and have the replied messages be received in real-time by the recipient user. I found after studying the basics of design patterns, that I used the Model-View-Controller design pattern which by definition has a model containing data from the database which updates the user interface or view which the user sees. The user is then able to control what is on the screen which manipulates the model (or data) and restarts the cycle, which is called the controller. In this example, the website my team and I were building used Meteor and Mongo DB as the database of the application. In this case, the model would be a MongoDB collection called MessageCollection which contains all messages sent on the website. The view would display all the messages from the model (or MessageCollection) sent to the user. The messages shown on the view have a reply field on the form which can be written by the user and sent using a button. This is the controller part of the Model-View-Controller design pattern in this case. The sent message is then added to MessageCollection which in turn manipulates the model. Here is a few examples of the code displaying how the Model-View-Controller solves this problem:
### Model
The code below shows how the MessageCollection is created and accepts documents that contain a sender, receiver, an image, and a message. Line 6 displays how this collection is added to the MongoDB database and acts as the model of this problem.
```javascript
class MessageCollection {
  constructor() {
    // The name of this collection.
    this.name = 'MessageCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      sender: String,
      receiver: String,
      image: String,
      message: String,
    }, { tracker: Tracker });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}
```
### View
The code below shows how the messages from MessageCollection is displayed on the screen using React and Semantic UI to display the UI nicely on the screen for the user. Line 3 shows how the messages received will be displayed on the screen for the user. This is an example of a view where the model updates the view whenever there is a new message.
```javascript
<Segment>
  {/* Code above excluded from example due to irrelvance. */}
  <p>{this.props.message.message}</p>
  <Accordion>
    <Accordion.Title
      active={activeIndex === 0}
      index={0}
      onClick={this.handleClick} >
      Reply To Message
    </Accordion.Title>
    <Accordion.Content active={activeIndex === 0} >
      {/* Creates SendMessage component with the receiver of the message being the sender of the last message (reply). */}
      <SendMessage key={this.props.message._id} receiver={this.props.message.sender} messageType={'Reply'}/>
    </Accordion.Content>
  </Accordion>
</Segment>
```

### Controller
The above code in line 13 uses a React component called SendMessage, this component can be shown in the code below. This component allows the user to reply to the message sent to them through a form. You can see in the submit function below (which executes when the user submits the form) the at the message sent is added to MessageCollection in line 8. This shows how the user uses the form the manipulate the model. This acts as the controller in our example.
```javascript
class SendMessage extends React.Component {

  // On submit, insert the data.
  submit(data, formRef) {
    const { message } = data;
    const owner = Meteor.user().username;
    // Inserts a new Message document with the specified receiver and sender.
    Messages.collection.insert({
      sender: owner, receiver: this.props.receiver,
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', message: message
    }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', `${this.props.messageType} Sent to ${this.props.receiver}!`, 'success');
        formRef.reset();
      }
    });
  }
  /* Code excluded from example due to irrelvance. */
}
```

## Final Thoughts
Design patterns allow software engineers to spend more time on the creative aspect of development rather than focus a plethora of energy on solving re-occurring problems. Design patterns allow for faster development in these problems which can allow engineers to focus more energy on the uniqueness of the product which leads to better and more creative innovation. In all, design patterns are fantastic for solving re-occurring problems, leading to faster development, and allowing for more energy spent on the creative aspect of development. Like a physics formula, however, if the wrong design pattern is chosen, the solution will not be solved to its greatest degree. With that said, take advantage of design patterns in software development and learn when to use them at the right time.