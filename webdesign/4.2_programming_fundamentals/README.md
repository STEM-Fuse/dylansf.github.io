# Programming Fundamentals

## Variables
Here we are going to store different kinds of things is variables and then print them out. We can use a button webpage -- maybe and input to variable to modify to output.

* Declare Variables
```javascript
var myVariable;
```
* Assign Variables

```javascript
myVariable = 10;
```

* Data Types
```javascript
// Numeric Data type
myNumericVariable = 0.75;

// String Data type
myStringVariable = 'This is some text';

// boolean Data type
myBooleanVariable = true;
```

* Store a Number in a variable
```javascript
var area;
var width;
var height;

width = 6;
height = 3;
area = width * height;

// print to some html
var el = document.getElementById('area');
el.textContent = area + ' square inches';
```

* You can declare and assign variables on the same line
```javascript
var days = 365;
```

* Store a String in a variable
```javascript
// Enclose string in single quotes
var animal = 'Mantis Shrimp';

// Enclose string in double quotes
var song = "Rocket Man"

// Put quotes in a string by escaping with backslash
var sentence = "JFK said \"Ask not what your country can do for you . . . \""
```

* Store a Boolean value in a variable
```javascript
var isInClass = true;
 
// change a variable later in the code
isInClass = false;
```

* Store an array in a variable
```javascript
var colors;
colors = ['red', 'green', 'blue'];

// Colors array declared another way
var colors = new Array('red', 'green', 'blue');

// Arrays can be numbers
var numbers;
numbers = [1, 2, 5, 12, 19];
```

## Operators and Expressions
Arithmetic. Random number generator. Expressions. Operators
### Arithmetic Operators


| Operator   |   Description | Example| | |
|------------|---------------|---------:|:-:|:--|
| + | Addition | 3 + 4 |=| 7 |
| - | Subtraction | 9 - 5 |=| 4|
| * | Multiplication | 8 * 3 |=| 24|
| / | Division | 12 / 3 |=| 4|
| % | Modulus (remainder) | 7 % 3 |=| 1|
| ++ | Increment | 4++ |=| 5 |
| -- | Decrement | 3-- |=| 2 |


* Expressions evaluate into values
An expression is a statement that puts some information into a variable. Simple expressions assign a value to a variable. More complicated expressions can use two or more values to decide what to put in a variable.
```javascript
// This expression assigns a value to a variable
var name = 'Hodor';

// This expression uses 2 values to determine the value of a variable
var hoursPerWeek = 24 * 7;
```

## Conditionals
* Ifs and maybe cases.
* Random number guessing game

## Loops
For and while loop. Starting terminating loops and ending terminating loops. 

## Functions
This needs to be included later

## Objects

```javascript
var class = {
    className: "Computer Science",
    students: 25,
    roomNumber: 168,

}
```

## Buffer
1. Come up with a sample calculation using each operator. Confirm it does what you expect using the dev console. 2. Use variable named x, y and z  to store different values. Create the values from expressions that have two or more values combined with operators. 3. Use each comparison operator with your x, y and z variables to create at least one true and one false outcome for each comparison operator. 4. Save and turn in your console log.


1. Save your snippet using an if-else statement. 2. Save your snippet using a switch statement. 3. Create a snippet that performs the same as the switch statement using only if statements.

Flowchart

Create a flowchart for any process you know how to do. This could be anything from solving a basic math problem, making a sandwich, or doing some chores. Your flowchart should include some kind of decision that you could use an if-statement or a switch-statement to describe. 

JavaScript

Use the dev-console in Chrome to do the following calculations

1185 x 1.6453 
2.3 / 16723
(132 - 67)2
(12 + 36573) x 187
Remainder of 679425367 / 10007
 
Create JavaScript Enabled Web Page

Starting with the sample we created in the first section, create your own JavaScript enabled page. Decide on one way to modify the current sample file and modify the code. Then style and decorate your HTML page. Once you have successfully modified your page, it is time to plan and create a new web page. 

In a group or by yourself, at the direction of your teacher, research and brainstorm a simple JavaScript project. Your project should consist of the following components:

Page proposal
What will your page do? What is it for?
Wireframe
Sketch of how the page will look.
Flowchart
What is the JavaScript going to do on your page?
HTML
CSS
JavaScript
Be sure to add your completed page to your portfolio site!

## Assignments
Game or story.