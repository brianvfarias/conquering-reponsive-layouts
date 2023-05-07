# Day 9

On day 9, beyond the solution to challenge 4 I learned a bit more about making layouts responsive with the following technique:

Wrap all images of the css in a div and use the css below.

```css
img {
  max-width: 100%;
}
```

This technique keeps the images from growing beyond their parent's and helps to prevent unintentional overflow on the layout.

Also, it was explained a bit more in depth the flexbox and, although I already knew most of the things taught in this day about flexbox, I had an idea about how to improve a [layout I had trouble with previously](https://github.com/brianvfarias/coffee-delivery-ignite). I'll share the link and the explanation of what I thought in here with you. (I won't update the code just yet because I want to keep focusing on build responsive layouts and this problem does not involve it necesseraly)

So in the layout I had to repdoce a catalog of products with columns and rows as it was in the Figma layout and, as you can imagine by what I just said/wrote, I used grid layout accomplish that as follow:

```css
.catalog {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  /* and many more properties */
}
```

The problem was that doing this I couldn't get the end of the catalog to align with the other elements in the page, specially with the header.

So a way to solve that would be with the following:

```css
.catalog {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
```

I'll also leave the link of where a practice this theory here. I did not work out as I had imagined but I guess it is a solution to that after all
