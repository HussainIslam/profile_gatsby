---
title: "Django Tutorial"
date: "2020-05-06"
---

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.

### Virtual Environment

To work with any Django or Python project, we may want to create a virtual environment first. This will create a virtual working environment for that particular project, which will help us control the versions of our dependencies that are specific to our project. In short this will create a container to host our dependencies and project.

We can create a virtual environment in linux/macOS like this:

`python3 -m venv [target_directory]`

However, for linux we would first need to install the a package, like this:

`sudo apt install python3-venv`

Then we need to activate the virtual environment:

`source ./[target_directory]/bin/activate`

We can deactivate our virtual environment by entering the following command:

`deactivate`

To check that we are in a virtual environment that don't have the extra dependencies, we can run the following command:

`pip freeze`

This will show us a list of all the dependencies that are install inside the virtual environment. To install any dependency in our project, we must first activate our virtual environment and then install that particular dependency like this:

`pip install django`

### Create Django Project

To create django projects, we are going to use `django-admin` CLI. The command that we run to create a django project is:

`django-admin startproject [project_name] [target_directory_location]`

This will create a boilerplate code for the django project.

### Project Structure

```
/ (root)
|
|--	manage.py
|--	[project_directory]
	|--	__init__.py
	|--	asgi.py
	|--	settings.py
	|--	urls.py
	|-- wsgi.py

```

- **\_\_init\_\_.py:** this file is used so that we can use files as packages.

- **asgi.py:**

- **settings.py:** One of the most important files. This contains all the settings for our project. This includes security, database, static file location, location, and time settings.

- **urls.py:** This is the routing file. This contains urls for all our apps.
- **wsgi.py:** Web Server Gateway Interface (WSGI) determines how web server communicates with web application and how web applications together process one request. This is used in hosting and deployment.

### Running the Project

Now that we have created our project, we can run this project by entering the following command to terminal:

`python3 manage.py runserver`

### Creating and setting up App

The command to create the boilerplate code for an app is:

`python manage.py startapp [app_name]`

The app will initially have the following strucutre:

```
/ (app root)
|--	init.py
|--	admin.py
|-- apps.py
|-- models.py
|-- tests.py
|-- views.py
|--	migrations
	|-- init.py
```

After the app is added created, we need to add that to the `settings.py` file, under the `INSTALLED_APPS` like this: `'[app_name].apps.PagesConfig'`. This basically referring to the `PagesConfig` method inside `apps.py` file.

Now, we need to add a new file inside our app directory called `urls.py`.

#### 1. Writing `urls.py` file for the app

First thing we need to do is to import the `path` from `django.urls` package, like this:

```python
from django.urls import path
```

Then we need import the views that we are going to attach to our url. We can do this by:

```py
from . import views
```

Then, we need to define `urlpatterns`, which would be an array of `paths`, like this:

```py
urlpatterns = [
	path('', views.index, name='index')
]
```

This portion of code has three parts. First part is the actual route, which in this case will be the '/' root route. Second part is a function called `index` from `views`. In the third part, we name this view `index`.

#### 2. Modifying the `views.py` file

Here we need to create a method respective to the method name that we created in the `urls.py` file. In this case, we need to create a `index` method inside the `views.py` file. The view may return a simple http response. For that we need to import the following:

```py
from django.http import HttpResponse
```

Then we can write a simple method, like this:

```py
def index( request ):
    return HttpResponse('<h1>Hello, World!</h1>')
```

#### 3. Modify the `urls.py` file of the Project

After we have created the `urls.py` file for the app and have modified the views to serve us a view, we need to go ahead and re-route the request to a route to the app url. For this we would need to import `include` from `django.urls` like this:

```py
from django.urls import path, include
```

Then we need to add our just created route to the urlpatterns, like this:

```py
urlpatterns = [
    path('', include('pages.urls')),
    path('admin/', admin.site.urls),
]
```

Here, the `urlpatterns` has two paths. The admin path was already included in the array when we created our project. The path for the app that we just created hast two parts. Part one has the main route, which in this case is the 'root'. Part two includes the `urls` of under the `pages` app.

#### 4. Adding template pages

First we need to go the `settings.py` file and look for `TEMPLATES` section. In this array, under `DIRS` section, we need to add the location where django is going to look for template files. For this first, we need to create a directory that will contain our templates. In our case, we will create a new directory in our project root directory, called `templates`. Then we can add the following piece of code in the `DIRS` section:

```py
'DIRS': [os.path.join(BASE_DIR, 'templates')]
```

Next, we can create template files inside our `templates` directory. These will be `*.html` files. For example, let's create a basic `*.html` file, called `index.html`. Inside that file, we can put in the following html code:

```html
<h1>Home</h1>
```

#### 5. Modify `views.py` to serve template file

Now, we need to go to our `views.py` file inside the app and rather than sending hard-coded html text, we are going to render our template file that we just created. After we make that changes, our code in `views.py` file would look like this:

```py
def index( request ):
    return render( request, 'pages/index.html' )
```

Here, the render method is taking two parameters. First, the request object that is passed to it by default. Second, the location of the template file inside the template location (remember, in our settins file, we told django where to look for the templates). The template location is `templates` directory in our case. So, django will go into `pages` directory inside `templates` directory and serve the `index.html` file.

#### 6. Creating Base layout

Our web application may have some common layout that we may want to use again and again. For that we can create a `base.html` file in our `templates` directory. We can create the base layout here and in the `body` tag we want to render our specific contents. So, we can add `Jinja` syntax, which is the default template engine for django.

```html
<body>
  {% block content %} {% endblock %}
</body>
```

This indicates the starting of a block content and the end of it.

#### 7. Modify template file

Now, we need to connect our template file to the base file. We do this by first doing the following:

```html
{% extends 'base.html' %}
```

Here `base.html` is the name of the base file. Then, we need to surround our code in the `index.html` file with Jinja code, like this:

```html
{% block content %}
<h1>Home</h1>
{% endblock %}
```

#### 8. Using Partials

To avoid our base file from getting cluttered with code and to reuse pieces of parts in different sections of our project, we can create partials. These are similar to our templates but the difference is that they might be reused. For example, our navigation bar could be a partial that we are going to use in differnt pages.

We start creating partials by creating a new directory called `partials` inside our `templates` directory. This directory will hold our parttial html files. The convention to writing the names of the files is to begin with and underscore to indicate partial.

After we have moved all our partial codes to seperate files, we can go to our base file and include that like following:

```py
{% include 'partials/_topbar.html' %}
```

### Serving Static Files

We can host and serve static files from our project. To do this, we need to create a directory inside our project folder that has the same name as our project, in our case it's 'btre'. The directory should be called `static`. We can put all our static contents inside this directory. We can see this in our `settings.py` file as well under the `STATIC_URL` section.

We also want add `STATIC_ROOT` and `STATICFILES_DIRS` at the bottom of our `settings.py` file, like this:

```py
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'btre/static')
]
```

When we are going to deploy our code we these parameters are going to be used by django to create a new directory called `static` at our project root directory. We can demonstrate this by running the following command in the terminal:

`python manage.py collectstatic`

After we run this command, we should see a new static directory being created in our root directory, which will contain all the static contents of our project, including our `admin` files.

_Note: We might want to add this second `static` directory to our `.gitignore` file._

After we do this, we would like to use our static contents in our templates. For example, in our case, we want use some static contents in our base file. To use the static contents, first we need to load the static contents in our file, like this:

```
{% load static %}
```

Then, we can refer to the static contents using Jinja syntax. For example, if we want to use our css file, we can link that in our base `head` tag like this:

```
<link rel="stylesheet" href="{% static 'css/all.css' %}">
```

Similarly, the script files would be included like this:

```
<script src="{% static 'js/jquery-3.3.1.min.js' %}"></script>
```

### Connecting Database (PostgreSQL)

To work with a database, we need to connect our project to the database. In our case, we will be working with PostgreSQL on our local machine. So, for that we need to install postgres first and create an empty database from the CLI.

After we have created an empty database, we need to connect our project to the database created by modifying the `settings.py` file in our project with something like this:

```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'btredb',
        'USER': 'postgres',
        'PASSWORD': 'password',
        'HOST': 'localhost'
    }
}
```

#### 1. Creating Models

To work with databases, we need to map our data to the database. This can be done using the models. A model for an app should be created in the `models.py` files of a an app. For example, if were to create table for 'realtors' in our app, we might have an app called 'realtors', which would have a file called `models.py`. We need to define the data structure or table structure of 'Realtor' inside this file.

_Note: The model name is singular._

An example of a model is:

```python{numberLines: 0}
class Listing( models.Model ):
    realtor = models.ForeignKey(Realtor, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.title

```

There are few items to notice in the model that is created above:

_Note: There not primary key or id. Postgres automatically creates and increments id, which works as primary key._

1. realtor is a foreighn key from another model called 'Realtor' and we don't do anything if this item is deleted, despite the fact it being a FK. We also need to import the `Realtor` model to use in this field
2. title, address are CharField that have maximum length of 200 characters
3. description is a TextField and will allow blank values
4. price and bedrooms are IntegerField
5. bathrooms in this case is DecimalField that has 2 digits and one of them will be for decimal place
6. photo_main and photo_1 are ImageFields and it is defining where the images will be uploaded to in the server
7. is_published is a BooleanField that is True by default
8. list_date is a DateTimeField, which will store the current date and itme to the database. For this we need to import the `datetime` package of Python
9. Finally, we have a `__str__` method that returns the title of the listing when called

#### 2. Make Migrations

After we have created our model, we need to create migrations from our model. In other words, we would need something to hookup our model with our database. This `migration` will transport the model that we have created to our database table.

We can migrate our model by running the following command:

`python migrate.py makemigrations [model_name]`

To migrate all the models, we can run the following command:

`python migrate.py makemigrations`

After we run this command, we should get a python script in the `migrations` directory of the specific app for which the migration is run.

We can check the SQL that would be parsed from the migration file with the following command:

`python manage.py sqlmigrate [app_name] [number_in_migrate_file_name]`

For example, we might run:

`python manage.py sqlmigrate realtors 001`

This far we have created the migration script only. The tables haven't been created on the database. So, when we are done with creating the migration scripts, we can run the following command to actually create the tables on the database:

`python manage.py migrate`

This would create a table in the database in this format: `[app_name]_[model_name]`.

### Admin Section

Django by default creates an 'Admin' section for our application. This can be used to modify our application after deployment.

#### 1. Create Superuser

To use the admin section we have to create a 'super user' for the project. We can do that with the following command:

`python manage.py createsuperuser`

This will ask for the username, email addrss, password for the user. Once all the parameters are entered this will create the superuser.

#### 2. Add an app to admin section

If we want to work on a particular app or more specifically a model, we can register that model in the respective `admin.py` file. For example, if we want to be able to work on `Listing` from our admin page, we can go to the `admin.py` page in our `Listings` app.

Then we need to import the model like this:

```py
from .models import Listing
```

Here the `Listing` is the name of our model for the `Listings` app. After that we need to register the model in our admin site like this:

```py
admin.site.register(Listing)
```

#### 3. Modifying the Admin section

We can also modify the way the Admin page looks. We can do this by creating a template file for the page. For this we may want to create a new directory inside the template directory called `admin` and create a new html file, i.e. `base_size.html`. In this file we can `extend` the admin `base.html` and add a `block` that would define the styling. For example, the file may look like:

```py
{% extends 'admin/base.html' %}
{% load static %}

{% block branding %}
    <h1 id="head">
        <img 	src="{% static 'img/logo.png' %}"
        		alt="BT Real Estate"
        		height="50"
        		width="80"
        		class="brand_img">
        Admin Area
    </h1>

{% endblock branding %}
```

#### 4. Modifying Admin Styling

We can also add our own styling for the `admin` section by adding a extra `block` in the template file that we just created. This may look like this:

```py
{% block extrastyle %}
	<link rel="stylesheet" href="{% static 'css/admin.css' %}">
{% endblock %}
```

Now, we can create a `.css` file under the `static` directory inside our main app directory with the same name that we defined in the template.

The way we can change styling of the Admin page is using the Developer Tool in the browser. Using that we can see which portion (id/class/element) we want to style and then go ahead and add some styling for that portion in the `.css` file that we just created.

#### 5. Display Information about a model in admin page

If we want to display the information that is shown in the admin page about a model, we need to modify the `admin.py` file of that particular app. For example, if we want to modify the 'Listings' app to show differnet information about a listing in the admin page, we need to add a new class that will inherit from `admin.ModelAdmin` class, which must have a data member called `list_display` of `list` type with the names of the field names from the model that created for the respective `admin.py` page (Listing, in our case). So, the class may look something like this:

```py
class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'is_published', 'price', 'list_date', 'realtor')
    list_filter = ('realtor',)
    list_display_links = ('id', 'title')
    list_editable = ('is_published', 'price')
    search_fields = ('title', 'description', 'address', 'city', 'state', 'zipcode', 'price')
    list_per_page = 25
```

The `list_display_links` defines the list of items that would be clickable to enter the details of the specific item to be editable.

The `list_filter` defines the list of fields by which the admin will be able to filter the data table.

`list_editable` defines the list of fields that can be edited directly from the data table. However, field can't be in both `list_editable` and `list_display_links`.

`search_fields` defines the fields that could be searched by the admin to find item(s).

`list_per_page` adds pagination to the datatable page.

After we have created the class, we need to pass this class to the `register` method. Previously, we only passed our model name to this `register` method. Now, we need to pass the name of the newly created class as second parameter to this method, like this:

```py
admin.site.register(Listing, ListingAdmin)
```

### Adding Media

To be able to work with media files, we need to specify settings for media directory first. To do that we need to go to the `settings.py` file and add two parameters `MEDIA_ROOT` and `MEDIA_URL` with appropriate values. For example,

```py
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'
```

Then for our medias to show up in the page, we need to go to the project `urls.py` file and add the `MEDIA_URL` and `MEDIA_ROOT` to the `urlpatterns`. After the modifications our `urls.py` file for the project will look something like following:

```py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('pages.urls')),
    path('listings/', include('listings.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

### Parsing Dynamic data into templates

We need to be able to load data from our database and dynamically insert that into our websites. To be able to do this, we need to send the model data into our templates and then in our template, we are going to access that data while rendering.

So, the first step is to load the model data into our respective `views.py` file. In the `views.py` file, we have to modify the method that is used to render a specific view. In that particular method, first we need to load the objects from our model:

```py
listings = Listing.objects.all()
```

Here, `listings` is the variable that is holding the all the data and `Listing` is the name of the model.

_Note: If using VSCode, this may result into an error because of linting. We would need to do `pip install pylint-django` and add some settings to the VSCode settings file (refer to reference#7)_

Then, we need to wrap the data into a dictionary because 'views' can only pass dictionary to a template. We do this like:

```py
context = {
	'listings': listings
}
```

Now, we can pass this `context` dictionary into our template using the `render` method that we are using:

```py
return render(request, 'listings/listings.html', context)
```

After we have modified our `views.py` file, we need to modify our respective template file. To understand how to do that refer to the Jinja section of this file.

### Routing to dynamic url

If we want to pass some specific URL, we may need to pass some parameters using the url. For example, if we want to go to the specific details of a listing by clicking on the list of listings, the URL that we may follow may be: `/listings/5/`; here '5' could be the id of the listing.

To Achieve this, first we need to add a dynamic route in our `url.py` file of the respective app. The way we can add this dynamic route is add a new `path` in our `urlpatterns`, like this:

```
path('<int:listing_id>', views.listing, name='listing')
```

Then we need to modify our respective `views.py` file to access the URL parameter. We need to pass this variable as parameter to the method that is handling the specific view. For example:

```py
def listing( request, listing_id ):
    return render(request, 'listings/listing.html')
```

### User Registration and Login

In our webs applications, we may need to have user registration and login features. To implement those, first we may want to create a new app that handles the account related issues, i.e. registration, login, logout. For this we would need to have at least two templates, one for registration and another for login.

_Note: You may want to add CSRF Token to your form that sends user data to server. Reference#9_

### Jinja Techniques

There are some Jinja syntaxes that would be handy for loading and displaying dynamic data:

- `{% if [condition] %} <block of code> {% endif %}`: This is used to conditionally render some block of markup. We can also add `{% elif [condition] %}` and `{% else %}` blocks.

- `{% for [variable] in [list] %} <block of code> {% endfor %}`: This is a for-loop.

- `{{ [variable] }}`: access a variable

- `{{ [variable].[parameter] }}`: access parameter of a variable/dictionary

- `{% extends '[base template name]'%}`: uses a base template in extended template

- `{% block content %} {% endblock %}`: this is in base template; defines where content will be loaded

- `{% block content %} <block of code> {% endblock %}`: this is in extended template; defines the code that will be loaded in base template

- `{% loads static %}`: loads static content

- `{% loads humnize %}`: loads humanize package

- `{% include '[address of partials]' %}`: includes partial files

- `{% url '[url name]' %}`: used as a link; navigates to the url name defined in `urls.py` files.

### Small Tricks

- To work with numbers and format them, we can use a package that comes with django, called `humanize`. To use this we need to add `django.contrib.humanize` to `INSTALLED_APP` under `settings.py` file. Then we need to load `humanize` using Jinja syntax. Then we can use humanize methods in our templates like: `{{ listing.price | intcomma }}`.

### References:

1. [Virtual Environment](https://docs.python.org/3/tutorial/venv.html)
2. [Jinja](https://jinja.palletsprojects.com/en/2.11.x/)
3. [PostgreSQL](https://www.postgresql.org/)
4. [Django Models](https://docs.djangoproject.com/en/3.0/topics/db/models/)
5. [Django Migrations](https://docs.djangoproject.com/en/3.0/topics/migrations/)
6. [Django Admin](https://docs.djangoproject.com/en/3.0/ref/contrib/admin/)
7. [Django has no object member problem](https://stackoverflow.com/questions/45135263/class-has-no-objects-member)
8. [Humanize](https://docs.djangoproject.com/en/3.0/ref/contrib/humanize/)
9. [CSRF Token](https://docs.djangoproject.com/en/3.0/ref/csrf/)
10. [Django Messages](https://docs.djangoproject.com/en/3.0/ref/contrib/messages/)

### VSCode Extensions:

1. Python Extension Pack
   1. MagicPython
   2. Python by Microsoft
   3. Jinja
   4. Django
   5. Visual Studio IntelliCode
