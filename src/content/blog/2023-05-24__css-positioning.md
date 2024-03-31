---
title: "Demystifying CSS Positioning: Exploring the Five Position Values"
publishedAt: 2023-05-24
origin: twitter
type: atomic essay
link: https://typeshare.co/amydutton/posts/demystifying-css-positioning-exploring-the-five-position-values
---

In CSS, there are five different position values:

1. `static`

- HTML elements are statically positioned by default
- Nothing special, always positioned within the normal flow of the document.

2. `relative`

- Relative positioning is relative to its normal position on the page. For example, if you set the position to relative and set top to 10px, then the element will move down, adding 10px to the top. Any remaining content will not adjust to fill in any gaps.

3. `fixed`

- Positioning is relative to the viewport. It will be fixed in place even if the user scrolls.
- It is removed from the document flow

4. `absolute`

- Precisely position elements on a webpage
- It is removed from the document flow
- If the parent element has a position of relative, then it will be positioned relative to the parent.
- If the parent element isn't positioned, then it will be placed relative to the page.

5. `sticky`

- Combines elements of both relative and fixed positioning
- An element behaves will be positioned relative until it reaches a specified threshold, then it's positioning becomes fixed relative to its container
- Must be used in combination with top, left, right, or bottom.
