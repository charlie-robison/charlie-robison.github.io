---
layout: project
type: project
image: images/hurricane-simulator-cover.png
title: Hurricane Interactive Web Application
permalink: projects/hurricane-interactive
# All dates must be YYYY-MM-DD format!
date: 2023-01-05
labels:
  - Javascript/HTML/CSS
  - React
  - Python
  - Django Rest Framework
  - Docker
  - Packages for Data Science (Pandas, Numpy, xArray)
  - Conda Environment Setup
summary: As part of the Karaperidou Research Group, I was tasked to develop a hurricane simulator for the pacific ocean which predicts where a hurricane will go based on the winds, the sea surface temperature, and the location of pressure systems. 

---




https://github.com/charlie-robison/charlie-robison.github.io/assets/89813665/76a619bc-ca4e-4181-8ed8-2d9976d4d67e


## Summary: 
As part of the Karaperidou Research Group, I was tasked to develop a hurricane simulator for the pacific ocean which predicts where a hurricane will go based on the winds, the sea surface temperature, and the location of pressure systems. The pressure systems can be moved around which influence the directions of the wind arrows which in turn affects the path of a hurricane. I was tasked to build the frontend which allows users to control the pressure systems, choose seasons, etc. to effect hurricane paths. I was also tasked to build a REST API using Django rest framework which reads in 50 years of NOAA data for sea surface temperature and winds and outputs averages for both for each longitude and latitude point. The frontend takes this data and projects it on the screen for the viewer to view. The frontend was built with plain Javascript, HTML, and CSS and the backend was built using Django Rest Framework. The application is put into two docker containers, one for the frontend and one for the frontend which condenses the dependencies for both and allows the application to be easily deployed in the future.

