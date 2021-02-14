---
title: "Deploy Django Project to Heroku"
date: "2020-07-11"
featuredImage: "../../images/blog_images/django.jpg"
---

## 1. Update the Pipfile.lock file
	* Add python_version to Pipfile: Add the following line to `Pipfile`:
		```
		[requires]
		python_version="3.7"
		```
	* Generate new `Pipfile.lock`: Run the following command:
		```bash
		pipenv lock
		```
## 2. Add a new Procfile
	* Create a `Procfile` in the root of the project:
		```bash
		touch Procfile
		```
	* Add the following line to the `Procfile`, where `<project_name>` is the name of the project:
		```
		web: gunicorn <project_name>.wsgi --log-file -
		```
## 3. Install Gunicorn
	* Install `Gunicorn`:
		```bash
		pipenv install gunicorn
		```
## 4. Update `settings.py`
	* Edit the `settings.py` to be following:
		```
		ALLOWED_HOSTS = ['*']
		```

Reference: [Django for Beginners by William S. Vincent](https://www.amazon.ca/Django-Beginners-Build-websites-Python/dp/1983172669/ref=sr_1_1?dchild=1&keywords=django+for+beginners&qid=1594466119&sr=8-1)