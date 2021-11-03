---
layout: essay
type: essay
title: "Final Project Idea"
date: 2021-11-02
labels:
- Software Engineering
- Meteor
---

Written collaboratively by: Charlie Robison, Anat Amar, Alexander Jones, Braydon Nagasako

## A Need For Organization
### The Problem
A problem many of us ICS students face is to plan a successful long term schedule of classes which fit our goals and career paths for the future. We also find it difficult to gauge the overall difficulty of a semester based on the classes chosen. With all of these different factors and unknowns in play, it can become very difficult to come up with a good long term schedule for ICS.

###The Solution
Our solution is to come up with a web application that will allow ICS students at UH to login, choose their career path and goals and then have a list of classes in order that are recommended. Semesters also show overall level of difficulty based on the ICS classes chosen based on previous average grade levels for that class. This solution will offer students more clarity on what they should choose by providing them information about what skills they will obtain from the classes needed for their goal and will know the difficulty of a semester which will make planning easier for them.


## Mockup Pages
Our solution will require different pages which will include different forms of information to make the user experience at its best. We have come up with four mockup page ideas which are shown below:
### Login/Sign Up Page
#### UI
This page will include a form that contains inputs for their information such as username, email, password, etc. and a submit button.
#### Data
The data submitted will be placed in a MongoDB collection which can be accessed later if a previously signed up user is trying to sign in. New users will have their information inputted which will be saved in a MongoDB collection named UserCollection.
### Overview Page
#### UI
The user’s overall information about their schedule, career path, goals, recommendations, and semester difficulty will be displayed here. This can be viewed as the main page of the web app. Our mockup design of this includes a grid container which contains UI segments which represent a semester for the user. Each segment holds all the classes the user is taking that semester and also shows overall difficulty for that semester at the top of the segment. There is a search bar somewhere at the top which allows the user to search for a specific semester information. The user also can add their overall goal at the top and contain filters at the top for the user to customize their queries.
#### Data
The data loaded to the page are all of the user’s scheduling data such as classes chosen for a semester. The data from each semester's schedule will be stored in a collection called SemesterCollection which one object represents the classes chosen for a semester. All of the entries in the SemesterCollection are all classes over all semesters. Each entry contains all classes the user is taking in a semester, the difficulty level, and towards what goal it is satisfying.


 






