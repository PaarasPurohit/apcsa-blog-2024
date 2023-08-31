---
toc: true
comments: false
layout: post
title: Anatomy of GitHub Pages
description: xx
type: tangibles
courses: { csa: {week: 0} }
permalink: /anatomy-of-ghp
---

> Looking deeper into the inner workings of GitHub Pages to make a more personalized blog

### GitHub Pages Terminology
> Every part of GitHub Pages serves a purpose. It's important to understand the primary components.

- **README.md:** Contains project instructions and background info, standard in well-configured GitHub projects.
- **index.md:** Source file for the project's main page, follows the standard format for GitHub Pages projects. Markdown files are converted to HTML via Jekyll.
- **_notebooks:** Directory with Jupyter Notebook (.ipynb) files, converted to Markdown (.md) using Makefile rules, then to HTML with Jekyll.
- **_posts:** Directory with Markdown (.md) files for website content. Similar structure to index.md, includes frontmatter (YAML metadata), Markdown, HTML, JavaScript, and CSS.
- **_data:** Storage for data files supporting _posts or _notebooks directories.
- **images:** Standard location for image files (JPEG, PNG, etc.) supporting _posts or _notebooks directories.
- **_config.yml:** Contains YAML definitions (key-value properties) vital for Jekyll website building.
- **.gitignore:** Specifies exclusions from version control. Excludes derived files not part of the project's source code. Dimmed files in VSCode indicate .gitignore-based exclusion.

### Setup & Develop
> Setting up my GitHub Pages from the /student repo and developing it to make it personal to me

I've already cloned the GitHub repository and hosted it on a valid GHP URL.

After looking at the different styles to choose from, I had a hard time deciding between the Time Machine and Hacker themes. Ultimately, I chose the Hacker theme. It looked good and it made me happy.

### Personalization
> Editing the main files to make it personal to me

I did something different and extra. Recalling back to Fastpages, what we originally used, I remember how the index page listed the posts and notebooks pushed by the owner. I wanted this on my GHP, so I used a mix of HTML and Liquid to achieve this:

{% raw %}
```liquid
{% for post in site.posts %}
        <h2><a href="{{ post.permalink | relative_url }}">{{ post.title }}</a></h2>
{% endfor %}
```
{% endraw %}

Later, I realized there's already a layout for this exact thing. No matter, it is always good to find new ways to do things, as learned last year. 

### Submenu
> Since I don't teach 3 Del Norte classes, I change the Submenu to fit more to my blog

Now if you look at my blog, you'll find a new submenu which is different than the one found directly after cloning the student repo.

### Takeaways

I have two main takeaways:

- Always keep track of your errors. I made so many errors during the process and didn't record any of them, so I can't bring any specific examples. Lesson learnt!

- I said it before, and I'll say it again: The order of debugging should be: ChatGPT, then phone a friend, then an optional step to read documentation yourself, or skip the optional step and go straight to your teacher. Do it in that order. You're not doing anyone any favour by skipping self-error checking and having your teacher hold your hand as you code/code/code.