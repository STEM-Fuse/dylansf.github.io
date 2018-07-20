# Style

## To Do
1. Make to-do list


## What is style?
In a webpage style refers to all the ways you can change how a part of the page looks. You can change colors, sizes, place on the page, fonts, borders and much more. We will start by adding some background and text colors and with changing fonts. 

## Different Styling Methods
### Inline
```css
<p style="font-family: sans-serif;">
```
### Internal
```css
<style>
p {
    font-family: sans-serif;
}
</style>
```
### External
```css
p {
    font-family: sans-serif;
}
```
## CSS Rules
CSS creates rules for different HTML elements. Use a SELECTOR to tell CSS what HTML element you want to style. Use a DECLARATION to create a specific rule. The declaration must be inside curly brackets. More than one declaration can be inside the curly brackets but they must be separated by semicolons. 

Declarations have 2 parts: the first part is the property, the second is called the value. The property is the particular feature of the element that we want to style. The value is how we want to style it.

```css
selector {
    declaration;
    property: value;
}
```


## Fonts
### Font Family
Declare  different degrees of specificity so that if the computer doesn't have the font you want it will fall back to the next best thing. 
* [CSS Font Stack](https://www.cssfontstack.com/)
### Resources for free fonts
* [FontSquirrel](https://www.fontsquirrel.com/)
* [Google Fonts](https://fonts.google.com/)

## CSS Resources
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)

## Feature List
* 3 Complete HTML pages
* use inline styling to style "About Me"
* use internal styling to style "Favorite Animal"
* use an external style sheet to style "Forms Cheat Sheet"
