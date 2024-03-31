---
title: What Makes a Good Pull Request?
publishedAt: 2023-05-19
origin: twitter
type: atomic essay
link: https://typeshare.co/amydutton/posts/what-makes-a-good-pull-request
---

An important aspect of collaborating with other developers is writing good pull requests.

A pull request should serve as project documentation and help anyone reviewing your code understand the purpose and intention behind the code changes. It should summarize the update and identify your thought process.

Within GitHub, you can create a pull request template by creating a Markdown file named pull_request_template.md. I like to put this file in a folder labeled .github, in the root of my project.

## My template includes:

- **Issue ID** - This includes a link to the issue within the backlog.
- **Feature description** - clearly and concisely describe the feature
- **Analysis and Design** - Analyze and attach design documentation. Ideally, this includes links to Figma files.
- **Solution description** - Describe the code changes in detail, explaining the how and why.
- **Output Screenshots** - I'll include screenshots of what the code looks like within the browser. This is especially useful if the UI has changed.
- **Address affected and ensured** - I list any areas of the codebase affected by the change.
- **Tests** - Describe the tests
- **Was this feature tested on all browsers?** - Here, I include a checklist of all browsers (Chrome, Firefox, Edge, IE, and Safari) and check off the browsers I've reviewed.
- **Related PRs** - Include any related pull requests. This is especially helpful if I need to "stack" pull requests and my code depends on another pull request being merged first.
