---
title: An Easy Framework For Thinking about CSS Properties
publishedAt: 2023-04-20
origin: twitter
type: atomic essay
link: https://typeshare.co/amydutton/posts/an-easy-framework-for-thinking-about-css-properties
---

I have been writing CSS for 22 years. 👵🏻 Along the way, I've built hundreds of websites, ranging in size and complexity.

But if I had to start all over again (as a beginner), this is the simple framework I wish I had for thinking about properties within CSS.

## All CSS properties and values can be placed in three different buckets:

### Bucket #1: Presentation

These styles control an element's appearance: font, text color, background color, width, and height.

### Bucket #2: Display

These styles control the box model. Let me explain. When you're writing HTML, everything is a container or a box. You need to be able to tell the browser how the box looks and operates. Should it take up an entire row on the page, or should you be able to display boxes inline? Does the box have margins, padding, and/or a border?

### Bucket #3: Positioning

With positioning, you're determining the layout. Grid? Flexbox? Absolute? Fixed on the page? Should it stick to the top? Are you placing it relative to existing elements?

As you style elements with CSS, it's important to consider each bucket.
