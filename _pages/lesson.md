---
title: Lesson
layout: singleWide
permalink: /lesson/
---

{% include lab_nav.html %}

## Setup 
- Units 1-4 are roughly half of the exam
- The best way to learn it is through code flow which means integrating all key concepts into a code that you build upon 
- Start with the scavenger hunt quiz

## Lesson
### Unit 1
- You are a teenager who has their license and wants to find a car to buy. When you go to the car dealership, you realize that there are many different things you have to keep track of. You have to keep track of the car brands you look at, the prices of the cars, phone numbers of different sales representatives, etc. To make it easy on yourself, you want to develop a computerized code that is able to sort through different prices, car brands, etc. The first step to doing this is through storing these different variables just mentioned as data types - primitive data types. You use variables to store data in Java. 
- For example, the price of a car can be stored as a double. The car brands you look and phone numbers can be strings. If you want to store whether you like a car or not, you can store that information as a boolean data type. 
- Now that you have data and variables declared, you can also compare prices of different cars through expressions and assignment statements. There are operators like the modulo operator where the remainder is computed or there's division and multiplication. If you ever want to compare car prices, you can set up a code with scanner input which is also a very common with consoles.
- Start Hack 1.
### Unit 2
- Now that Hack 1 we have practically covered Unit 1 of AP computer science that involves primitive data types and operators (both simple and compound)
- When you want to characterize all the cars, you can create a class or a template that basically defines what an object is like and what the object can do
- When it comes to cars, you can create a class for what the car is like. The class Cars can have variables like String brand, int age, double mpg. With these parameters, you can create an actual object. 
Car honda = new Car ("Honda," "10," "54.6") --> constructor
- Inside the parentheses --> parameters which are values passed
- Car (String brand, int age, double mpg)
- If you want to overload a constructor, you can have the same characteristics but different order of variables. For example, Car (double mpg, String brand, int age)
### Unit 3
- Now that we understand the characteristics of each car, it is time to make a purchase. One of the most important considerations is price.
- We can use conditional statements to eliminate cars without the chosen characteristics. If statements only run if the given condition is true. For example, if you only want black cars you can use the if statement to filter for that and only keep the car in consideration if color=black. Additionally, we can use if statements to find the cheapest car that fits all the chosen characteristics, or only show certain cars if they are within a certain price range.
### Unit 4
- While loops keep repeating the code as long as a condition is true. while (i < numberOfRepetitions) { do something i++; }. The while loop can be used to check every single car in consideration to see if it fits all the criteria. It will go through every single car in the list and then you can add a nested if statement that checks if the criteria is met. With the while loop, all the cars can be checked. 

