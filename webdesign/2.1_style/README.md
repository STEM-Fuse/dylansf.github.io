# Style

## To Do
1. Make to-do list


## What is style?
In a webpage style refers to all the ways you can change how a part of the page looks. You can change colors, sizes, place on the page, fonts, borders and much more. We will start by adding some background and text colors and with changing fonts. 

## CSS Rules
CSS creates rules for different HTML elements. Use a SELECTOR to tell CSS what HTML element you want to style. Use a DECLARATION to create a specific rule. The declaration must be inside curly brackets. More than one declaration can be inside the curly brackets but they must be separated by semicolons. 

Declarations have 2 parts: the first part is the property, the second is called the value. The property is the particular feature of the element that we want to style. The value is how we want to style it.

```css

selector {
    declaration;
    property: value; /* this is a comment */
}

```
Let's look at some rules and the CSS rule needed to implement the desired style. For each case identify the selector, declaration, property and value.

### Rule: Paragraph text will be bold.
```css
p {
    text-style: bold;
}
```
### Rule: Webpage will have a grey background.
```css
body {
    background: grey;
}
```
### Rule: Header 1 will have an orange background.
```css
h1 {
    background: orange;
}
```
Declarations are often grouped together in *CSS Declaration blocks*. For example:

### Rule: Paragraph text is bold, font is sans-serif, text color is white, background is navy blue.
```css
p{
    text-style: bold;
    font-family: sans-serif;
    text-color: white;
    background: navy;
}
```


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


## Fonts
### Font Family
Declare  different degrees of specificity so that if the computer doesn't have the font you want it will fall back to the next best thing. 
* [CSS Font Stack](https://www.cssfontstack.com/)
### Resources for free fonts
* [FontSquirrel](https://www.fontsquirrel.com/)
* [Google Fonts](https://fonts.google.com/)

## CSS Resources
* [W3Schools CSS Reference](https://www.w3schools.com/cssref/default.asp)


## CSS Selectors
### Universal Selector
```css
* {
    property: value;
}
```
### Class Selector

```css
.class {
    property: value;
}
```
#### Sample Class Selector
```html
<p class="intro">This is the intro paragraph and will be styled by the intro class selector</p>
<p class="intro"> This paragraph will also be styled</p>
```
```css
.intro {
    font: italic .8em/1.2 Arial, sans-serif; 
}
```
### ID Selector
```css
#id {
    property: value;
}
```
#### Sample ID Selector
```html
<p id="start">This is paragraph will be styled with the start ID selector. It should be the only one with this ID.</p>
<p class="intro">This paragraph will be styled with the intro class selector.</p>
<p class="intro">We can use the intro class selector to style other paragraphs as well.</p>
```
```css
.intro {
    font: italic .8em/1.2 Arial, sans-serif; 
}
#start {
    font: bold;
}
```
### HTML
```html
<h1>Learning Some CSS</h1>
<img src="http://via.placeholder.com/350x250">
<p>Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion.</p> 
<p>Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet. </p>
```
### CSS
```css
* {
  background: lightblue;
}
```
## Feature List
* 3 Complete HTML pages
* use inline styling to style "About Me"
* use internal styling to style "Favorite Animal"
* use an external style sheet to style "Forms Cheat Sheet"
