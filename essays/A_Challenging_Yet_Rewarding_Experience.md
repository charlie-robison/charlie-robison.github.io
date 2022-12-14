---
layout: essay
type: essay
title: A Challenging Yet Rewarding Experience
date: 2022-12-13
labels:
- Software Engineering
- Full-Stack Web Development
- Collaboration
- Problem Solving
- Agile Project Management
---

## Collaboration at its Finest
Throughout this semester in ICS 414, my classmates and I were tasked to build a web application for the Hawaii Department of Education to track their bills, submit testimonies, and send hearing notices related to education. We were divided up into ten person groups and tasked to accomplish this by the end of the semester. At first I was very intimidated but excited. I knew this is exactly what I needed and wanted to progress as a software engineer, however, I knew that it would be challenging working in a large group of ten people for the first time. Knowing this would be a challenge my group and I utilized the issue-driven project management workflow in order to stay organized, work efficiently, and not step on each others toes. We accomplished this by using Github and utilizing project boards with assigned issues to each member. Below is an example of one of the project boards we utilized during development.
<img class="ui huge rounded image" src="/images/ICS-414-Project-Board-Pic.png">

Utilizing this method allowed for easy workflow for the group. With that said, development mostly was easy flowing and efficient. There were however some initial challenges in the collaboration and that was the lack of leadership. At the beginning, the group did not know how to function because there was no drive to the group and with that not many decisions could be made. With that said, I took on that leadership role near the beginning of development to ensure that we did not run into many of those problems. This role was more of facilitator role where all ideas were heard and decisions were made through discussion, however, it was necessary for this role to exist as the direction of our development might tangent off the wrong way. I have learned that it is essential for a project to have one of the group members take on that role and I will keep this in mind in future projects. 

## If There is a Problem There is a Solution
Throughout development of the project, naturally it is destined that I would eventually run into few problems that would be challenging to solve. This project has led to many developments in my problem solving skills. One problem in particular in which I had trouble solving was the search suggestions system that I developed. This system was tricky from the UI to the backend, however, after some research on basic topics and experimentation I was able to achieve my goals. An example of this was how I was going to display the search suggestions from the search bar component when the user typed into it. What was tricky was that I had to change the state of the search word in the parent component from the child component. After doing some more research on the useState React hook, I noticed I could pass the the function, setSearchWord (which manipulates the searchWord variable), to the child component. Whenever the user inputs something in the UI field, setSearchWord is updated in the child component which in turn changed the state of searchWord in the parent component. By using functional programming I was able to solve this solution, which demonstrates how I have better developed my problem solving skills by using the knowledge I have in web development and research skills. Below is a code snippet of the example problem and solution given:
```javascript
// Passes the setSearchWord function from the parent component so the child component can manipulate searchWord.
const SearchBar = ({ setSearchWord }) => {
  const mobileView = useMediaQuery('(max-width: 760px)');
  const searchBarStyle = { margin: 'auto', top: '100px', right: '-100px', width: '100%' };
  const searchBarStyleMobile = { margin: 'auto', top: '100px', right: '-50px', width: '80%' };

  // Sets searchWord to the inputted search word.
  const checkSearchWord = event => {
    // Changes the search word in the parent component from the child component.
    setSearchWord(event.target.value);
  };
  return (
    <Row>
      <Col xs={10}>
        <InputGroup style={searchBarStyle} onChange={checkSearchWord}>
          <InputGroup.Text><BsSearch /></InputGroup.Text>
          <Form.Control id="inlineFormInputGroup" placeholder="Search" />
        </InputGroup>
      </Col>
    </Row>
  );
};
```

## A Better Software Engineer
This project has led to development of many skills in software engineering. Other than the previous skills that I mentioned previously, I also developed my skills in full-stack web development. I had to communicate between both stacks many times throughout development to solve many of the problems our product required to answer. What I enjoyed was using both stacks in a creative manner to solve these problems. One example was the testimony approval process system which I created in the project. For this problem I needed a mongoDB collection to hold the state of the progress of a testimony which would be updated anytime someone checked off a checkbox to approve a part of the testimony. Within the TestimonyItem component, data had to be initially received from the database for that testimony, and if it did not exist it had to be created. Within a useEffect React Hook (which updates the component whenever one of the states of the checkboxes changes), the testimony progress document associated with the testimony would update. This made it so the progress of the testimony is always updated correctly and even after reloading that page, the state of the progress will be restored from the last session. This required a lot of work between the front-end and back-end and enhanced my skills as a full-stack web developer.

## Final Thoughts
In all, ICS 414 has led to a massive improvement in my skills as a software engineer through project based learning. I am now well equipped to tackle real life software development problems and provide great, creative solutions. With that said, I am every grateful to have been in this class and accomplish a challenging, fun project.
