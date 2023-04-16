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

INSERT CODE

In Java, we can use boolean operators like && (and), || (or), and ! (not) to create compound boolean expressions that combine multiple conditions. These operators allow us to create more complex conditions for making decisions in our code.
 
INSERT CODE

One common use of boolean expressions is in if statements, which allow us to execute different blocks of code depending on whether a condition is true or false. For example, we can use an if statement to check if a car's engine is running, and if it is, we can perform actions like accelerating or decelerating the car.

INSERT CODE

We can also use if-else statements to specify different blocks of code to be executed when a condition is true or false. This allows us to handle both cases in our code. For example, we can use an if-else statement to check if a car's speed is above a certain limit, and if it is, we can display a warning message.

INSERT CODE

Another expression that we can use is else-if statements in Java to check multiple conditions sequentially until one of them is true. This allows us to handle different cases in our code. For example, we can use else-if statements to check the weather condition and adjust the car's driving mode accordingly.

INSERT CODE

It's important to note that equivalent boolean expressions can be used interchangeably in our code. For example, we can use == or .equals() to compare objects of certain types, such as strings or other objects, in our boolean expressions.

INSERT CODE

Lastly, we can use object comparison to compare objects based on their references. In Java, objects are compared using the == operator, which compares the memory addresses of the objects. For example, we can use object comparison to check if two cars are the same object or not.

INSERT CODE

You can also use the equals method which is denoted by equals() to compare two objects.

INSERT CODE

Key to note is the use of truth tables. Oftentimes, if you want to visualize the possible outcomes of different combinations of boolean values and logical operators, and use them to evaluate the overall result of a boolean expression.

# Unit 4

Now oimagine you're a car mechanic, and you have a long list of cars waiting to be fixed. Instead of manually fixing each car one by one, you want to use a loop to efficiently go through the list. This is where a while loop comes in handy.
A while loop is used when you want to repeat a block of code as long as a certain condition is true. For example, you can use a while loop to fix cars in your list until there are no more cars left. 

INSERT CODE

Some issues with while loops is that if the loop condition is always true, the loop will never exit and you'll have an infinite loop. This can easily crash a computer server and should be avoided. On the other hand, if the loop conditions are always false, then the loop will never run and the body is skipped. This leads to inefficiencies and larger code file sizes than necessary.

Break and continue statements help loops. Break statement will help immediately exit out of the loop. Continue statement jumps to the next iteration. 

There's also try-catch staetment blocks and excepion throwing. Exceptions are signs that something is wrong with the code at runtime and the try-catch statements helps keep the program from crashing. The program tries to run the code assuming it works in the try block and if it catches an exception, it moves to the catch block. Then, there is a finally block that runs afterwards no matter what the try or catch blocks say.

INSERT CODE 

Now, let's say you have a different list of cars, and you know exactly how many cars are in the list. You want to iterate through the list a specific number of times to perform a certain task on each car. This is where a for loop can be very useful. A common example is often fibbonaci's numbers. 

INSERT CODE

Sometimes, you may need to perform a task that requires multiple levels of iteration. For example, imagine you're a car dealer, and you have a list of cars with different makes and models. You want to go through each make and model combination to perform some operations. This is where nested iteration comes into play. Nested iteration is when you have one or more loops inside another loop. You can use nested while or for loops to iterate through multiple levels of data.

INSERT CODE
