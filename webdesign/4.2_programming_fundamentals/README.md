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

## Objects

```javascript
var class = {
    className: "Computer Science",
    students: 25,
    roomNumber: 168,

}
```

## Assignments
Game or story.