---
toc: true
comments: false
layout: post
title: VSCode & GitHub Pages
description: xx
type: tangibles
courses: { csa: {week: 0} }
permalink: /vsc-and-ghp
---

> Setting up VSCode and GitHub Pages and blogging about it

### Command Notes
> Take note and describe the type of shell commands that you are using through Terminal in this installation procedure.

- `wsl`: Initiates the Windows Subsystem for Linux, allowing you to run Linux commands and applications on a Windows machine.
- `cd`: Changes the current directory in the command line interface.
- `git`: A version control system that tracks changes in files and facilitates collaborative development.
- `apt`: A package management tool for Debian-based Linux distributions to install, update, and manage software packages.

Three other command line commands:
- `ls`: Lists the files and directories in the current directory.
- `mkdir`: Creates a new directory.
- `rm`: Removes (deletes) files or directories.

### Version Control Notes
> In the Development process, developers use Version control. Annotate in notes what you have learned about Version Control while doing this setup process.

1. Where are the files from GitHub placed on your local machine? How do you navigate to those files? 
*Files from GitHub are placed in a directory on your local machine created by the `git clone` command, and you navigate to them using the command line with `cd` followed by the directory name.*
   
2. Where are the files placed in the GitHub Cloud and how do you navigate to those files? *Files are stored in a remote repository on GitHub's servers, and you navigate to them using a web browser by visiting the repository's unique URL.*

3. How would you update your Fork of student repository if teacher wanted you to pick up an update? *To update your Fork of a student repository, add the teacher's repository as a remote using `git remote add upstream`, fetch changes with `git fetch upstream`, switch to your local branch (e.g., `main`) with `git checkout`, merge changes from the teacher's branch with `git merge upstream/main`, resolve conflicts if any, and push the updated branch to your Fork using `git push origin main`.*

### Server Notes
> Put into words the difference between viewing GitHub Pages running on localhost machine versus running on a deployed server.

- What is the localhost URL for your distribution? Can anyone else see it? *The localhost URL for your distribution is typically http://localhost:port_number, and usually only you can see it on your local machine during development.*
- What is the GitHub Pages URL for your distribution? Can anyone else see it? *The GitHub Pages URL for your distribution is in the format https://username.github.io/repository, and anyone with the link can see it if the repository is public; otherwise, access depends on repository visibility settings.*

### DNS Notes

> DNS is the address manager for the internet. Put into your own words how you changed the address of your student repository.

*I updated the location identifier of my student repository, similar to how DNS manages internet addresses, by altering the reference to the repository's location, enabling me to access and share it from a different pathway.*

### Errors I Ran Into

1. GitHub SASS & CSS didn't load, and I was left with a built page with no style. I resolved this by changing `config.yml` and adding `baseurl: "/apcsa-blog-2024"` to it. I also added `github_username: PaarasPurohit` to the file. This way, I wouldn't be grabbing anything from the original repository, just my own.
2. `bundle exec jekyll serve` worked for localhost, but `make` didn't. First, I went to the make file and commented out the line `.SHELLFLAGS = -e`. This line runs error checking on all notebooks, but it interferes with building the site by causing directory paths to not be found. Removing this allows for Jekyll to host the site on localhost. If the site didn't host properly, I made changes to any markdown file and saved it, which refreshed the site and ran it smoothly. 

### Conclusions & Takeaways

After checking all my tools being installed, I took away some things from the lesson:

- Before going to the teacher for help, ask ChatGPT. If ChatGPT doesn't work - and this is very possible - you might want to ask a friend if they have a similar issue that ChatGPT wasn't able to correctly solve. Sometimes, you can Google the problem, but ChatGPT is better at shortening the many pieces of documentation you find. If none of these methods work, only then go to the teacher.