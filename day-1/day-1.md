# Day 1

The main message on day 1 is to avoid using fixed units in your CSS.

As mentioned in the course, the layouts are responsive from start and we developers take that responsiveness alway with our bad CSS practices.

So, it is important to use fixed units in CSS, such as pixels, carefully.

## Use percentages for widths

It is hightlighted that using percentages for the width of elements is a better approach then using pixel. It will help the elements adapt to the size of the screen automatically.

## Avoid setting heights

Setting the hight of an HTML element can be useful in some scenarios. But it can also break your layouts on the resize of the screen, so you should only set the size of an element when it is really necessary.

## Difference and usefullness of em and rem units

It was highlighted what is the diferrence between em and rem;

### em behavior

When use in the font-size property it means that the property is setted according to the parent element.

Example:

```css
.parent {
  font-size: 14px;
}

.child {
  font-size: 2em;
  /* 
  This sets the font-size to 2 times the font-size of the parent element
  2 * 14 = 28px
  */
}
```

When used in other properties, the size will follow the font-size of the element
Example:

```css
.container {
  font-size: 20px;
  padding: 1.5em;
  /* 
    padding = 1.5 * 20 = 30px
  */
}
```

It can be hard to keep track of all of the changes when building a layout, but em are really good when you want to give proportion to your layouts.

### rem behavior

Personaly,I find a little easier to keep track sizes using rem.

But just so you understand what it means, the 'r' in rem comes from 'root', so the size of every property set by rem is proportional to the size of the root element (html). By default this size is 16px.
