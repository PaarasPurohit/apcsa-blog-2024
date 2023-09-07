---
toc: true
comments: false
layout: post
title: Spotify Bracket
description: The basis of what our project will look like
type: tangibles
courses: { csa: {week: 3} }
permalink: /spotify-bracket
---

<html>
  <body>
    <table id="albumTable">
      <thead>
        <tr>
          <th>Ranking</th>
          <th>Artist and Title</th>
          <th>Streams</th>
          <th>Daily</th>
        </tr>
      </thead>
      <tbody>
        <!-- Table rows will be inserted here -->
      </tbody>
    </table>
    <label for="textInput">Which album is better?</label>
    <input type="text" id="textInput" name="textInput" placeholder="Enter album name">
    <button type="submit" onclick="return submitForm()">Submit</button>
    <script src="{{ '/assets/js/album-pull.js' | relative_url }}"></script>
    <table id="myTable" style="border:2px solid white;">
    </table>
  </body>
</html>

### Further plans

Our plans for this project will include buttons where you can pick between the two albums based on which is subjectively better. Their results will go on for about 5-10 brackets until it stops. Then their choices will be posted on the project's public forum for people to see.

# Questions (From Hacks):
> Describe the difference between HTML and JavaScript.

- Hyper-text markup language (HTML) is used to programme a website’s build and structure. JavaScript is used to programme a website’s behaviour.

> Describe a benefit of a table that uses JavaScript.

- In a word, automation. One thing I’ve learned in CSP and CSA (so far) is the importance of automation, whether its using Liquid to make a time box or using Python for databases and backend. JavaScript automates the creation of a database, taking the tedious task of creating every column and row individually and making it as simple as fetching/entering data and inserting rows and columns appropriately.