# To Do
1. Create a grid based page (possible format for actual pages used in instruction -- to replace Rise)
2. Fill in sections
3. Model student page

# CSS Flexbox
## Before flexbox:
* absolute or relative position
* Floats and clear fixes
* fixed heights

## Flexbox:
Position, size and spacing relative to parent container

### HTML Sample
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>The Net Ninja - CSS Flexbox</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="flex-container">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
      </div>
    </div>
  </body>
</html>
```

```css
* {
    font-family: verdana;
    margin: 0;
}

body {
    background: #eee;
}

.wrapper {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
}
```

# CSS Grid
CSS grid is a feature available on all modern browsers that lets designers lay out websites on a simple grid. This overcomes positioning difficulties from float and flex layouts. 

## CSS Grid Elements
1. grid container
2. grid item
3. grid line
4. grid cell
5. grid track
6. grid area
7. grid gap
## Defining a Grid

## Adding Elements to a Grid

## Building Responsive Web Pages

## Feature List

## Bibliography
1. [Grid by Example](https://gridbyexample.com/)
2. [MDN Web Docs on Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)
3. [Grid hype video](https://youtu.be/7kVeCqQCxlk)
4. [Simple Grid on CodePen](https://codepen.io/mor10/pen/NjeqyX)