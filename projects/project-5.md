---
layout: project
type: project
image: images/Mr.Hearty-Picture.png
title: Mr.Hearty's Adventure Video Game
permalink: projects/mr.hearty_game
# All dates must be YYYY-MM-DD format!
date: 2022-06-24
labels:
  - C#
  - Unity 3D
  - Object Oriented Programming
  - 3D Modeling in Blender
  - 3D Animation
  - Video Game Physics
summary: This 3D side scroller game was a personal project of mine during the summer of 2022. Player's are able to move left/right, jump, and destroy enemies. The goal of the game is to reach the end of the course and collect all of the heart coins without being destroyed by any enemies. This game was created using Unity 3D, C# programming language, and Blender for 3D modeling.
---

<img class="ui medium right floated rounded image" src="/images/Mr.Hearty-Picture.png">

### What Mr.Hearty's Adventure Video Game is All About

Mr.Hearty's Adventure video game was a personal project of mine during the summer of 2022. The objective of the game is to finish the courses and collect heart coins without being destroyed by the enemies. The goal of this game was to not only to enhance my programming skills but also to apply it to an area of interest of mine which is video games. I found this project to be especially fun and interesting because it combined aspects of creativity, computer science, and physics. 

### Development of Mr.Hearty's Adventure Video Game

During the development of this video game I went through many issues, however, learned a lot after solving them. One issue I ran into was the actual process of making a video game to this scale. At first I was not organized and jumped right into the project without a plan because I was excited. With that being said, I started creating mechanics for the player based off the levels I was created instead of build levels off the player's mechanics. This was my biggest issue because every level would be different and having levels be based off mechanics would not only simplify the game in a good way but also make the level flow smoother. I solved this problem by building all of the player's mechanics first such as movement, jumping, double jumping, and wall jumping before building the levels. This led to positive development of the game and made the level flow much nicer. 
#### Code Snippet of the Player's Mechanics
```cs
/* Moves the player left and right based on the buttons pressed. */
    void movePlayer()
    {
        float horizontal = move.x;

        // Changes the direction of the player based on the horizontal input and if not wall jumping.
        if (horizontal != 0f && !wallJump && !isWallJumping)
        {
            // Sets the direction of the player.
            transform.eulerAngles = new Vector3(0f, horizontal * 90, 0f);
        }

        // Checks if the player was jumping.
        if (!isJumping)
        {
            if (horizontal == 0f)
            {
                // Removes run animation.
                animator.ResetTrigger("Run");

                // Checks if on ground or not on a bouncy platform.
                if (controller.isGrounded && !bouncyPlatform)
                {
                    animator.SetTrigger("Idle");
                }
            }
            else
            {
                // Sets run animation.
                animator.SetTrigger("Run");
                animator.ResetTrigger("Idle");
                animator.speed = 1.2f;
            }
       
            // Sets player's x velocity.
            playerVelocity.x = velocity * horizontal;
        }
        else if (isWallJumping || wallJump)
        {
            animator.ResetTrigger("Run");
        }
        else
        {
            animator.ResetTrigger("Run");
            playerVelocity.x = velocity * horizontal;
        }
    }
```


#### How the Game Level's were Based Off of the Mechanics
<img class="ui medium image" src="/images/mr.hearty-level-planning">

All aspects of this game were solely created by myself such as the 3D modeling. I am by no means an expert of 3D modeling, however, I wanted this game to feel more complete by adding characters and enemies. To do this, I learned how to use Blender (a 3D modeling program) to build these models. The 3D models were added to the game objects in the game near the end of development as I felt the functional part of the game was the most important. As placeholder's I used simple 3D cubes provided by Unity 3D.

### Skills Learned from Development

Throughout this process, I learned and enhanced many skills. The most prominent skill I learned during development was the actual creation of a video game at this scale which involved creating game objects, adding functionality to them, and giving them 3D models other than basic shapes. Another important skills that I learned during this process would be the use of Object Oriented Programming in a real life setting. I noticed that without Object Oriented Programming the development of the game would have been much slower and maybe even stopped. By abstracting much of the code, it allowed for less repetition and better organization. Lastly, another skill I would like to highlight that I learned was working with a 3D Video Game Engine. Previously, Working in a virtual 3D world is completely different than 2D but it taught me how to be more precise in my calculations and allowed me to enhance by trigonometry and physics skills in programming to make an object do what I wanted it to do.

### Source Code

[Mr.Hearty's Adventure Source Code](https://github.com/charlie-robison/mr.hearty-3d-sidescroller-game)


