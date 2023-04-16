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
# Unit 3
Continuing the cars theme, we are going to explore Unit 3 which includes topics like boolean expressions, if statements, control flow, if-else statements, else-if statements, compound boolean expressions, equivalent boolean expressions, and comparing objects. This is roughly 15%-17.5% of the AP Exam. 

Just like how cars have different conditions or states, we can use boolean expressions in Java to represent conditions that evaluate to either true or false. For example, we can have a boolean expression that checks if a car's engine is running or if its speed is greater than a certain threshold.

![boolean](/images/boolean.png)

In Java, we can use boolean operators like && (and), || (or), and ! (not) to create compound boolean expressions that combine multiple conditions. These operators allow us to create more complex conditions for making decisions in our code.
![compound boolean](/images/compound.png)

One common use of boolean expressions is in if statements, which allow us to execute different blocks of code depending on whether a condition is true or false. For example, we can use an if statement to check if a car's engine is running, and if it is, we can perform actions like accelerating or decelerating the car.

![ifelse](/images/ifelseboolean.png)

We can also use if-else statements to specify different blocks of code to be executed when a condition is true or false. This allows us to handle both cases in our code. For example, we can use an if-else statement to check if a car's speed is above a certain limit, and if it is, we can display a warning message.

![ifelseint](/images/ifelseint.png)

Another expression that we can use is else-if statements in Java to check multiple conditions sequentially until one of them is true. This allows us to handle different cases in our code. For example, we can use else-if statements to check the weather condition and adjust the car's driving mode accordingly.

![elseif](/images/elseif.png)
It's important to note that equivalent boolean expressions can be used interchangeably in our code. For example, we can use == or .equals() to compare objects of certain types, such as strings or other objects, in our boolean expressions.
![equivalent](/images/equivalentboolean.png)

Lastly, we can use object comparison to compare objects based on their references. In Java, objects are compared using the == operator, which compares the memory addresses of the objects. For example, we can use object comparison to check if two cars are the same object or not.
![comparing](/images/comparingobjects.png)

You can also use the equals method which is denoted by equals() to compare two objects.

![comparing](/images/equals.png)

Key to note is the use of truth tables. Oftentimes, if you want to visualize the possible outcomes of different combinations of boolean values and logical operators, and use them to evaluate the overall result of a boolean expression.

### Unit 4
- While loops keep repeating the code as long as a condition is true. while (i < numberOfRepetitions) { do something i++; }. The while loop can be used to check every single car in consideration to see if it fits all the criteria. It will go through every single car in the list and then you can add a nested if statement that checks if the criteria is met. With the while loop, all the cars can be checked. 

