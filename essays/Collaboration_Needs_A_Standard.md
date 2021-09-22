---
layout: essay
type: essay
title: Collaboration Needs A Standard
date: 2021-09-22
labels:
- Software Engineering
- Coding Standards
- Learning
---
## Development Made More Efficient

Great software is developed when collaboration between members is effective. With that said, different people programming have different ways of organizing their code. This can be very confusing and disorganizing to the development team which would lead to a decrease in productivity. Coding standards are a way of setting a standard for the way people code, which in turn can lead to better collaboration and efficiency in development.

## Thoughts on Coding Standards

At first, I was not a fan of coding standards. Back when I was learning Java in my Introduction to Programming course, we used Checkstyle as a tool to monitor the Java coding standard. My first thoughts on this were that it slowed my productivity and actually took away significant time to solving the programming problem. With that said, I have changed my mind about coding standards. Over the summer when I started on some personal software projects of mine I noticed that if my code is not following the coding standard, then in the future when I work with others, how would they be able to interpret what I'm programming quickly so that they can programming their part efficiently. This is where I started having more respect for coding standards because I now know if there is a standard to the way I write my code, then collaboration will be much more effective.

## Thoughts on Using ESLint 

Even though I used Checkstyle in my Introduction to Programming course, I did not know much about coding standards until I took ICS 314, Software Engineering. Not only did I learn about the benefits of coding standards, but I also learned about how I can use tools in my IDE to alert me when I have violated the coding standard. Since I used Javascript in this class I used ESLint as a tool to monitor if the code is following the Javascript coding standard in my IDE. Even though my thoughts on coding standards have changed, getting my code to follow the coding standard exactly is still very annoying to me because it restricts my freedom of coding the way I want. However, since I know there are great benefits to learning how to code this way, I find it useful. I believe it just takes practice to learn how to code like this automatically and will be very beneficial in the future. If I can learn how to code like this automatically, my code will become much more organized and collaboration will be much more efficient.

## More Benefits to Coding Standards

Understanding basic coding standards not only will help in development but also will help when asking questions or searching for questions on the internet or a forum. Since there is a coding standard for every programming language, finding an answer to a question relating to programming will be much easier to understand if you understand the coding standard. Now, this is only true if the answer is written in the correct coding standard. This, however, continues to prove my point on its effectiveness. If all programmers use the correct coding standard for each language, the format of a program will be much easier to read to everyone instead of trying to decode what the programmer means by what they wrote or how they organized it. As an example look at the two different code blocks below. Both code blocks do that same thing. The first code block does not follow the Javascript Coding Standard and the second code block does. 

###Example 1: Code Does Not Follow Coding Standard
```
function AddNumToList(list, num) {
        var newList = _.map(list,(element)=>element+num);
        return newList;
}



var list = [1,2,3,4,5];
console.log(AddNumToList(list));
```

###Example 2: Code Does Follow Coding Standard
```
const list = [1, 2, 3, 4, 5];

function addNumToList(arr, num) {
  const newList = _.map(arr, (element) => element + num);
  return newList;
}

console.log(addNumToList(list));

```

As you can see the second code block is much more organized and can be read by any programmer that understands the standard. The first code block is very disorganized and is very difficult to understand immediately by a programmer since they have no knowledge on how this programmer writes their code.

## Final Thoughts on Coding Standards as a Tool

Coding standards do not affect the semantics of a program, but it does limit the number of mistakes made by a team of developers since communication will be clear. Even though I find coding standards to be painful, I know they are useful so I will continue to learn how to code this way. Coding standards are an excellent tool for effective development.
