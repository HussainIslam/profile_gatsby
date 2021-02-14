---
title: "Excerpt from Pro Git"
date: "2020-05-22"
featuredImage: "../../images/blog_images/django.jpg"
---

## What is Git?
Git is a version control system, which means Git keeps track of all the different changes that we make to one or more files. This way if we want to jump or revert back to an older version, we would be able to do that easily. Git will keep track of all the changes for us automatically; so, we don't have to memorize or manually create different versions of file(s).

## Git Basics
There are few basic concepts that we need to understand before we dive into full fledged tutorial.

1. **Snapshots, not differences:** Git stores data in snapshots. That is when we commit our codes, Git takes a snapshot of the files that has been changed and creates a reference to that snapshot. This is completly different from what the other version controls are doing. 
2. **Nearly Every Operation is Local:** Most of the operations performed are based on local files and resources. The data related to git is also stored locally; so, anyone can work with git even without internet connection.
3. **Git has Integrity:** It is not possible to change any file without git knowing it. Git maintains this checksum integrity using a SHA-1 hash. This is a 40-character hexadecimal string based on the content of the content.
4. **Git Generally Only Adds Data:** For most of the actions git only adds data; so, it is possible for the user to revert back to a previous state.
5. **The Three States:** This concept is very important to understand git. Git has three main states: 
	1. _Committed:_ This means that the data is safely stored in local repository.
	2. _Motified:_ This means that a file that hasn't been committed yet.
	3. _Staged:_ This means that we have marked a file in the current verstion to into the next commit snapshot.
6. **The Three Sections of Git Project:** Git has three main sections or working areas:
	1. _Git Directory:_ This is the most important part of git. This is where git stores all metadata and object database for project. 
	2. _Working Directory:_ This is a single checkout of the one version of the project. These files are pulled out of the compressed database in the git directory and placed on disk for us to work on it.
	3. _Staging Area:_ This is a file that stores information about what will go into the next commit. This is sometimes referred to as 'Index'.

## Basic Git Worksflow:
1. Modify the file(s) in working directory
2. Stage the file(s), adding snapshots of the files to the staging area
3. Do a commit. This saves the snapshots to the permanently.

## Installing Git
For Mac and Windows, please visit [git-scm](http://git-scm.com) to download and install Git for different operating systems. 

On Linux, we can run the following command:
* Fedora: `yum install git`
* Ubuntu (debian-based): `apt-get install git`

## Configuring Git
Git uses `git config` to get and set the configuration variables. These variables can be in three different locations:

1. **`/etc/gitconfig` file:** Contains variables that affect all the users on a system and respective repositories. We need to pass `--system` option to read/modify from this file.
2. **`~./gitconfig` or `~/.config/git/config` file:** This configuration variables are specific to a user. We need to pass `--global` option to read/modify from this file.
3. **`.git/config` file:** This settings are specific a single repository.

## Initial Setup
* Add user name: `git config --global user.name "Hussain"`
* Add email address: `git config --global user.email hussain@gmail.com`
* Set default text editor for Git: `git config --global core.editor emacs`
* Check all settings: `git config --list`
* Check specific setting: `git config user.name`
* Check specific help: `git help <verb>` for example: `git help config`
				
## Fundamental Actions - Local
* Initializing repository: `git init`
* Adding all files to repository: `git add .`
* Adding one file to repository: `git add readme.txt`
* Adding a file type to repository: `git add *.c`
* Committing staged changes: `git commit -m 'initial commit'`
* Cloning existing repository: `git clone https://github.com/libgit2/libgit2`
* Clone existing repository with another name: `git clone https://github.com/libgit2/libgit2 mylibgit`
* Checking status of files: `git status`
* Checking short status: `git status -s` or `git status --short`
* Checking detailed status of all changes (modified and staged) since last commit: `git diff`
* Checking staged changes and commits: `git diff --staged`
* Pushing all the changes directly to commit (skipping stage): `git add -a -m 'new changes'` or `git commit -a -m 'new changes'`
* Remove a file from tracking and commit: `git rm readme.md`
* Remove a tracked file from tracking: `git rm --cahced readme.md`
* Rename a file: `git mv file_from file_to`
* View history: `git log`
* Detailed history with spcific number of entries: `git log -p -#ofEntries`
* History with brief stats of each commit: `git log --stat`
* History with one line description: `git log --pretty=oneline`
* History with graph for branch: `git --pretty=format:"%h %s" --graph`
* Limiting log output: `git log --since=2.weeks`
* Adding some missed files (currently in stage) to previous commit: `git commit --amend`
* Moving all changes from stage to working directory: `git reset`
* Moving one file from stage to working directory: `git reset HEAD readme.md`
* Discard changes made to a file: `git checkout -- readme.md`
* Listing all tags: `git tag`
* Listing tags with a pattern: `git tag -l 'v1.8.5*'` 	_(here * is a regex)_
* Create Annotated Tag: `git tag -a v1.4 -m '[message_for_the_tag]'` _(here, v1.4 is the tag)_
* Display data related to a tag: `git show v1.4`
* Create Lightweight tag: `git tag v1.5`
* Creating a tag later (after moving past the commit): `git tag -a v1.2 [SHA Number]`
* Push a tag to remote: `git push origin v1.4` _(tags are NOT automatically pushed to remote)_
* Push all tags to remote: `git push origin --tags`

## Fundamental Actions - Remote
* Clone remote repository: `git clone https://github.com/schacon/ticgit`
* Show remote URLs: `git remote -v`
* Add remote repository: `git remote add origin https://github.com/paulboone/ticgit` [here `origin` is just an alias. We could've used any other name]
* Fetch all information from remote to local: `git fetch origin`
* Pushing local to remote: `git push origin master`
* Show detail information about remote: `git remote show origin`
* Removing a remote: `git remote rm origin`
* Renaming a remote: `git remote rename [current_name] [changed_to_name]`

## Ignoring Files
User can have Git ignore some files from tracking by creating a `.gitignore` file inside the project directory. All the files and directories included in this files are not tracked by git. A comprehensive list is maintained by `GitHub`, which can be found [here](https://github.com/github/gitignore). General rules for writing a `.gitignore` file are following:

* Comment:  `#this is a comment`
* Ignore particular type of file: `*.cpp`
* Exception to ignore: `!lib.cpp`
* Ignore root TODO, not subdir/TODO: `/TODO`
* Ignore all files in build/ directory: `build/`
* Ignore particular file type in particular directory level: `doc/*.txt` _(ignore doc/notes.txt, but not doc/server/arch.txt)_
* Use regular expressions: `*.[oa]` _( all file that end with .o or .a)_

## Git Aliases
We can create smaller aliases for longer git commands. This will be handy if we are typing a lot of long commands frequently. The structure that defining aliases follow is: `git config --global alias.[name] [command]`. For example: 

* Changing checkout: `git config --global alias.co checkout`
* Working with branch: `git config --global alias.br branch`

## Git Branching

### Basic Commands
As mentioned previously, git saves all data as screenshot at the times of commits. A branch in Git is simple a pointer to one of these commits.

* Create new Branch: `git branch [branch_name]`
* Log the position of HEAD: `git log --oneline --decorate`
* Switching branch: `git checkout [branch_name]`
* Merge a branch with current branch: `git merge [branch_to_be_merged]`
* Delete a branch: `git branch -d [branch_name]`
* See the last commit on each branch: `git branch -v`
* See the branches that are merged to the current branch: `git branch --merged`
* See the branches that are NOT merged to the current branch: `git branch --no-merged`

### Git Merging
Sometimes when we are merging branches, there would be conflicts arising from the changes made. Conflicts arise when there are different changes made to the same part of the same file. We need to fix these issues before git can merge the branches. In this situation we can use the `git mergetool` to resolve the issue. When we try to execute a `merge` command with conflicts, git will show us a list of tools that can be used to resolve the issue, for example: `opendiff`, `kdiff3`, `tkdifff`, `diffuse`, and many more.

### Remote Branches
Remote branches are pointers to the state of branches in remote repositories. They are local branches that are only moved automatically when we communicate with remote. They work as bookmarks to remind us where the branches were when we last connected to them. Remote branches take the form: (remote)/(branch). For example, if we want to see the `master` branch on `origin` remote: `origin/master`.

When we `clone` from this remote repository, git automatically names this branch `origin`, pulls down all data, creates pointer to the `master` branch and names it `origin/master` locally. Git also give the local `master` branch the same place as `origin`'s `master` branch.

### Pushing and Pulling
When we want to share our branch to the world, we need to push our branch to the remote. Our local branches are NOT automatically pushed to the remote repository; we have to explicitly push our remote branch to the remote. To push our local branch to the remote we have to run a command with this pattern: `git push [remote_name] [branch_name]`. For example, if we have a local branch name `serverfix`, we can push that to our remote called `origin` with this command: `git push origin serverfix`. 

If we want to rename the branch on the remote, we can use the following pattern: `git push [remote_name] [local_branch]:[remote_branch]`. Continuing the same example, if we want to rename the local branch `serverfix` to remote branch `newbranch`, we can use the following command: `git push origin serverfix:newbranch`.

When we fetch a remote (`git fetch origin`), we don't automatically have an editable copy of the branch; we only get the pointer `origin/serverfix`. If we want the remote branch locally, we need to execute the following command: `git checkout -b [local_branch] [remote]/[remote_branch]`. For our previous example, we need to execute: `git checkout -b serverfix origin/serverfix`.

When we `checkout` a remote branch to a local branch, we automatically create a 'tracking' or 'upstream' branch. Another way of writing this command is: `git checkout --track [remote]/[remote_branch]`. If we want to change the name of the local branch, we can execute: `git checkout -b [local_branch] [remote]/[remote_branch]`.

If we want to add an upstream or change the current upstream, we can use the following pattern: `git branch -u [remote]/[remote_branch]`. When we have a tracking branch setup, we can use the short-hand `@{upstream}` or `@{u}` instead of `origin/master`. 

If we want to see the tracking branches, we can use the following command: `git branch -vv`.

When we are fetching, we are just getting the information from the remote, we are not merging the branches. We can use the command `git pull` as combination of `git fetch` and `git merge` in most cases.

### Deleting Remote Branch
The command that we can use to delete a remote branch is: `git push [remote] --delete [remote_branch]`.

* Push local branch to remote: `git push origin serverfix`
* Rename remote branch from local branch: `git push origin serverfix:newbranch`
* Create local branch from remote branch: `git checkout -b serverfix origin/serverfix`
* Create local branch from remote branch (alternative): `git checkout --track origin/serverfix`
* Add or change upstream: `git branch -u origin/serverfix`
* See all tracking branches: `git branch -vv`
* Delete branch: `git push origin --delete serverfix`

## Rebasing

### Basics	
If we are working with branches, at some point in our workflow we would need to combine our works. We have already looked at one of the techniques of combining these branches: merging. There is another way of combining: rebasing. In Rebasing, all the changes made to a branch is applied on another branch. This goes to the common ancestor of the two branches, getting all the changes done on the current branch, saving those changes to a temporary file, resetting the current branch to the same commit as the branch we are rebasing onto, and finally applying all the changes. When we are doing rebase from the feature branch, the feature branch connection to the master branch will be realigned. On the other hand, when we are doing rebase from the master branch on the feature branch, the feature branch commits will be copied and added to the master branch as new commits. Because of this the git workflow will be like a straight line although all the works were done in parallel. For a more cleaner understanding of the Git Rebase, please watch the video from 'Reference' section of this note. Command for rebase: `git rebase [branch_name]`.

### Rebase Branch-of-branch
If we have a branch (`subbranch`) from another branch (`branch`), which is from `master` branch, and we want to integrate the changes done on `subbranch` to `master` we will be able to do that with just one command: `git rebase --onto master branch subbranch`. After this we can `checkout` to `master` and do a `merge` from client. If now we want to integrate our `branch` to `master`, first we need to `rebase` our `branch`: `git rebase master branch`. Then we need to `checkout` to master: `git checkout master`. After that we can do a `merge`: `git merge branch`.

### Cons of Rebase
When we rebase stuff, we’re abandoning existing commits and creating new ones that are similar but different. If we push commits somewhere and others pull them down and base work on them, and then we rewrite those commits with git rebase and push them up again, the collaborators will have to re-merge their work and things will get messy when we try to pull their work back into yours. So, it's better NOT to rebase commits that are outside our repository.


## References: 
1. [Git log pretty formats detailed documentation](https://git-scm.com/docs/pretty-formats)
2. [Git log options documentation](https://git-scm.com/docs/git-log)
3. [Git Mergetool - opendiff](https://borgs.cybrilla.com/tils/opendiff-as-difftool/)
4. [Git Rebase - The Modern Coder](https://www.youtube.com/watch?v=f1wnYdLEpgI)