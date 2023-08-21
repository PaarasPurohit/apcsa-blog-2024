---
layout: post
title: Linux Setup & Bash Checks
units: "0"
course: APCSA
permalink: /linux-and-bash
---

> Setting up Linux and using Bash to check tools

### Student View
> Come up with your own student view of this procedure to show your tools are installed.

```
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ %%script bash
bash: fg: %%script: no such job
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ cat <<EOF > /tmp/variables.sh
> export project_dir=$HOME/vscode
> export project=\$project_dir/apcsa-blog-2024
> export project_repo="https://github.com/PaarasPurohit/apcsa-blog-2024.git"
> EOF
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "Project dir: $project_dir"
Project dir: /home/paaras_purohit/vscode
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "Project: $project"
Project: /home/paaras_purohit/vscode/apcsa-blog-2024
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "Repo: $project_repo"
Repo: https://github.com/PaarasPurohit/apcsa-blog-2024.git
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "Using conditional statement to create a project directory and project"
Using conditional statement to create a project directory and project
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ cd ~ 
(base) paaras_purohit@DESKTOP-8UK4ATC:~$ if [ ! -d $project_dir ]
> then 
> echo "Directory $project_dir does not exists... makinng directory $project_dir"
> mkdir -p $project_dir
> fi
(base) paaras_purohit@DESKTOP-8UK4ATC:~$ echo "Directory $project_dir exists." 
Directory /home/paaras_purohit/vscode exists.
(base) paaras_purohit@DESKTOP-8UK4ATC:~$ if [ ! -d $project ]
> then
> echo "Directory $project does not exists... cloning $project_repo"
> cd $project_dir
> git clone $project_repo
> cd ~
> fi
(base) paaras_purohit@DESKTOP-8UK4ATC:~$ echo "Directory $project exists." 
Directory /home/paaras_purohit/vscode/apcsa-blog-2024 exists.
(base) paaras_purohit@DESKTOP-8UK4ATC:~$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~$ echo "Navigate to project, then navigate to area wwhere files were cloned"
Navigate to project, then navigate to area wwhere files were cloned
(base) paaras_purohit@DESKTOP-8UK4ATC:~$ cd $project
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ pwd
/home/paaras_purohit/vscode/apcsa-blog-2024
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo ""

(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "list top level or root of files with project pulled from github"
list top level or root of files with project pulled from github
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ ls
Gemfile       Makefile     _data      _notebooks  activate.sh  csse.md   indexBlogs.md           vsc-and-ghp-setup.md
Gemfile.lock  README.md    _includes  _posts      csa.md       images    scripts
LICENSE       _config.yml  _layouts   _site       csp.md       index.md  tools-and-equipment.md
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "Navigate to project, then navigate to area wwhere files were cloned"
Navigate to project, then navigate to area wwhere files were cloned
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ cd $project
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ pwd
/home/paaras_purohit/vscode/apcsa-blog-2024
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo ""

(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ 
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "list all files in long format"
list all files in long format
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ ls -al   # all files -a (hidden) in -l long listing
total 120
drwxr-xr-x 12 paaras_purohit paaras_purohit 4096 Aug 17 11:44 .
drwxr-xr-x 10 paaras_purohit paaras_purohit 4096 Aug 16 16:58 ..
drwxr-xr-x  8 paaras_purohit paaras_purohit 4096 Aug 17 08:11 .git
drwxr-xr-x  3 paaras_purohit paaras_purohit 4096 Aug 16 16:58 .github
-rw-r--r--  1 paaras_purohit paaras_purohit  104 Aug 16 16:58 .gitignore
-rw-r--r--  1 paaras_purohit paaras_purohit  122 Aug 16 16:58 Gemfile
-rw-r--r--  1 paaras_purohit paaras_purohit 7294 Aug 16 17:07 Gemfile.lock
-rw-r--r--  1 paaras_purohit paaras_purohit 1081 Aug 16 16:58 LICENSE
-rw-r--r--  1 paaras_purohit paaras_purohit 3116 Aug 17 11:31 Makefile
-rw-r--r--  1 paaras_purohit paaras_purohit 5798 Aug 16 16:58 README.md
-rw-r--r--  1 paaras_purohit paaras_purohit  475 Aug 17 08:10 _config.yml
drwxr-xr-x  2 paaras_purohit paaras_purohit 4096 Aug 16 16:58 _data
drwxr-xr-x  2 paaras_purohit paaras_purohit 4096 Aug 16 16:58 _includes
drwxr-xr-x  2 paaras_purohit paaras_purohit 4096 Aug 16 16:58 _layouts
drwxr-xr-x  2 paaras_purohit paaras_purohit 4096 Aug 16 19:51 _notebooks
drwxr-xr-x  2 paaras_purohit paaras_purohit 4096 Aug 17 11:44 _posts
drwxr-xr-x  8 paaras_purohit paaras_purohit 4096 Aug 17 11:44 _site
-rwxr-xr-x  1 paaras_purohit paaras_purohit 1291 Aug 16 16:58 activate.sh
-rw-r--r--  1 paaras_purohit paaras_purohit   92 Aug 16 16:58 csa.md
-rw-r--r--  1 paaras_purohit paaras_purohit   98 Aug 16 16:58 csp.md
-rw-r--r--  1 paaras_purohit paaras_purohit  108 Aug 16 16:58 csse.md
drwxr-xr-x  2 paaras_purohit paaras_purohit 4096 Aug 16 19:57 images
-rw-r--r--  1 paaras_purohit paaras_purohit  788 Aug 16 16:58 index.md
-rw-r--r--  1 paaras_purohit paaras_purohit   53 Aug 16 16:58 indexBlogs.md
drwxr-xr-x  3 paaras_purohit paaras_purohit 4096 Aug 17 08:01 scripts
-rw-r--r--  1 paaras_purohit paaras_purohit 3551 Aug 17 12:19 tools-and-equipment.md
-rw-r--r--  1 paaras_purohit paaras_purohit 4487 Aug 17 12:11 vsc-and-ghp-setup.md
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "Look for posts"
Look for posts
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ export posts=$project/_posts  # _posts inside project
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ export posts=$project/_posts
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ cd $posts
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_posts$ pwd
/home/paaras_purohit/vscode/apcsa-blog-2024/_posts
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_posts$ ls -l
total 28
-rw-r--r-- 1 paaras_purohit paaras_purohit 1812 Aug 16 16:58 2023-08-15-Tools_Sprint.md
-rw-r--r-- 1 paaras_purohit paaras_purohit 4397 Aug 16 16:58 2023-08-16-Tools_Equipment.md
-rw-r--r-- 1 paaras_purohit paaras_purohit 3752 Aug 17 11:44 2023-08-17-AP-pseudo-vs-python_IPYNB_2_.md
-rw-r--r-- 1 paaras_purohit paaras_purohit  468 Aug 16 16:58 2023-08-21-GitHub_Pages.md
-rw-r--r-- 1 paaras_purohit paaras_purohit 6059 Aug 17 11:44 2023-08-21-VSCode-GitHub_Pages_IPYNB_2_.md
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_posts$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_posts$ echo "Look for notebooks"
Look for notebooks
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_posts$ export notebooks=$project/_notebooks
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_posts$ cd $notebooks
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ pwd
/home/paaras_purohit/vscode/apcsa-blog-2024/_notebooks
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ ls -l
total 20
-rw-r--r-- 1 paaras_purohit paaras_purohit 5415 Aug 16 16:58 2023-08-17-AP-pseudo-vs-python.ipynb
-rw-r--r-- 1 paaras_purohit paaras_purohit 8615 Aug 16 16:58 2023-08-21-VSCode-GitHub_Pages.ipynb
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ echo "Look for images in notebooks, print working directory, list files"
Look for images in notebooks, print working directory, list files
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ cd $notebooks/images
bash: cd: /home/paaras_purohit/vscode/apcsa-blog-2024/_notebooks/images: No such file or directory
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ pwd
/home/paaras_purohit/vscode/apcsa-blog-2024/_notebooks
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ source /tmp/variables.sh
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ echo "Navigate to project, then navigate to area wwhere files were cloned"
Navigate to project, then navigate to area wwhere files were cloned
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024/_notebooks$ cd $project
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo "show the contents of README.md"echo "show the contents of README.md"
show the contents of README.mdecho show the contents of README.md
(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ echo ""

(base) paaras_purohit@DESKTOP-8UK4ATC:~/vscode/apcsa-blog-2024$ cat README.md
## Blog site using GitHub Pages and Jekyll
> This site is intended for Students.   This is to record plans, complete hacks, and do work for your learnings.
- This can be customized to support computer science as you work through pathway (JavaScript, Python/Flask, Java/Spring)
- All tangible artifact work is in a _posts or in a _notebooks.  
- Front matter (aka meta data) in ipynb and md files is used to organize information according to week and column in running web site.

## GitHub Pages
All `GitHub Pages` websites are managed on GitHub infrastructure. GitHub uses `Jekyll` to tranform your content into static websites and blogs. Each time we change files in GitHub it initiates a GitHub Action that rebuilds and publishes the site with Jekyll.  
- GitHub Pages is powered by: [Jekyll](https://jekyllrb.com/).
- Publised teacher website: [nighthawkcoders.github.io/teacher](https://nighthawkcoders.github.io/teacher/)

## Preparing a Preview Site 
In all development, it is recommended to test your code before deployment.  The GitHub Pages development process is optimized by testing your development on your local machine, prior to files on GitHub

Development Cycle. For GitHub pages, the tooling described below will create a development cycle  `make-code-save-preview`.  In the development cycle, it is a requirement to preview work locally, prior to doing a VSCode `commit` to git.

Deployment Cycle.  In the deplopyment cycle, `sync-github-action-review`, it is a requirement to complete the development cycle prior to doing a VSCode `sync`.  The sync triggers github repository update.  The action starts the jekyll build to publish the website.  Any step can have errors and will require you to do a review.

### WSL and/or Ubuntu installation requirements
- The result of these step is Ubuntu tools to run preview server.  These procedures were created using [jekyllrb.com](https://jekyllrb.com/docs/installation/ubuntu/)
- Run scripts in scripts directory of teacher repo: setup_ubuntu.sh and activate.sh.  Or, follow commands below.
```bash
## WSL/Ubuntu commands
# sudo apt install, installs packages for Ubuntu
echo "=== Ugrade Packages ==="
sudo apt update
sudo apt upgrade -y
#
echo "=== Install Ruby ==="
sudo apt install -y ruby-full build-essential zlib1g-dev
# 
echo "=== Install Python ==="
sudo apt-get install -y python3 python3-pip python-is-python3
#    
echo "=== Install Jupyter Notebook ==="
sudo apt-get install -y jupyter-notebook

# bash commands, install user requirements.
echo "=== GitHub pages build tools  ==="
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
echo "=== Gem install starting, thinking... ==="
gem install jekyll bundler
head -30 ./teacher/scripts/activate.sh
echo "=== !!!Start a new Terminal!!! ==="
```

### Frequent Linux Commands
> Name and create notes on some Linux commands you will use frequently.


1. **ls**: List files and directories in the current directory.
   - Example: `ls -l` (long format), `ls -a` (including hidden files), `ls -lh` (long format with human-readable file sizes).

2. **cd**: Change the current directory.
   - Example: `cd /path/to/directory`.

3. **pwd**: Print the current working directory.

4. **mkdir**: Create a new directory.
   - Example: `mkdir new_folder`.

5. **rm**: Remove files or directories.
   - Example: `rm file.txt` (remove a file), `rm -r directory` (remove a directory recursively), `rm -rf directory` (forcefully remove a directory and its contents).

6. **cp**: Copy files or directories.
   - Example: `cp file.txt /path/to/destination`, `cp -r source_dir/ destination_dir/`.

7. **mv**: Move (rename) files or directories.
   - Example: `mv old_file.txt new_file.txt`, `mv file.txt /new/directory`.

8. **touch**: Create an empty file.
   - Example: `touch new_file.txt`.

9. **cat**: Display the contents of a file.
   - Example: `cat file.txt`.

10. **nano** or **vim**: Text editors for creating or editing files from the terminal.
    - Example (nano): `nano file.txt`, exit with `Ctrl + X`.
    - Example (vim): `vim file.txt`, exit with `:wq`.

11. **grep**: Search for text patterns in files.
    - Example: `grep "pattern" file.txt`.

12. **chmod**: Change file permissions.
    - Example: `chmod +x script.sh` (add executable permission), `chmod 644 file.txt` (set specific permission mode).

13. **chown**: Change file ownership.
    - Example: `chown user:group file.txt`.

14. **ps**: Display information about running processes.
    - Example: `ps aux`.

15. **top** or **htop**: Display real-time system resource usage and process information.
    - Example (top): `top`, exit with `q`.
    - Example (htop): `htop`, exit with `F10`.

16. **df**: Display disk space usage.
    - Example: `df -h` (human-readable sizes).

17. **du**: Display file/directory disk usage.
    - Example: `du -h file.txt` (human-readable size), `du -sh directory` (summary).

18. **wget**: Download files from the internet.
    - Example: `wget URL`.

19. **tar**: Create or extract compressed archive files.
    - Example (create): `tar -czvf archive.tar.gz files/`.
    - Example (extract): `tar -xzvf archive.tar.gz`.

20. **ssh**: Securely log into a remote server.
    - Example: `ssh username@remote_server`.

### Version Checking
> Is there anything we use to verify tools we install? Review versions checks.

We can either use `which`, `pwd`, `tool -v`, or variables such as `$tool` to verify tools we install.

### Verify WSL and Anaconda
> Is there anything we could verify with Anaconda? or WSL?

Yes, in our Powershell we can run `wsl --v` to verify our WSL. Same syntax applies to Anaconda.

### Updating Repositories With Bash
> How would you update a repository? Could you do that in script above?

You can update a repository with Linux using Git commands:

``` bash
cd /path/to/your/repository
git fetch origin
git pull origin master
git commit -m "msg" -a
git push
```