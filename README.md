# Blog Task Application

## Overview

The Blog Task Application is a full-featured blogging platform built with Angular for the frontend and Django for the backend. This application enables users to register, log in, create, edit, and delete blog posts and comments, and manage their profiles. The platform is designed to be user-friendly, secure, and responsive, ensuring a seamless experience across all devices.

## Features

### User Registration & Authentication
- **User Registration**: Users can sign up with a username and password.
- **User Login**: Users can log in to access their dashboard.
- **Authentication**: Secure authentication using tokens.
- **Logout**: Users can log out from the profile page.

### Post Management
- **Create Posts**: Users can create new blog posts with a title and content.
- **Edit & Delete Posts**: Users can manage their own posts.

### Comment Management
- **Add, Edit, Delete Comments**: Users can comment on posts and manage their comments.

### User Profile
- **Profile Overview**: Displays username, last seen time based on the last post created, and other activity stats.
- **Logout**: Users can log out from their profile page.



## Installation
## Backend (Django)

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Run the server
python manage.py runserver

## Frontend (Angular)

# Navigate to the frontend directory
cd ../frontend

# Install Angular CLI (version 15)
npm install -g @angular/cli@15

# Install project dependencies
npm install

# Run the development server
ng serve

# Open your browser and navigate to
# http://localhost:4200

 ## Usage

### Registration
1. Navigate to the registration page.
2. Enter your username and password.
3. Click **Register** to create an account.

### Login
1. Enter your username and password on the login page.
2. Upon successful login, you'll be redirected to the posts page.

### Post Creation & Management
1. Create a post using the form on the posts page.
2. Edit or delete your posts using the available buttons.

### Commenting System
1. Add comments on any post.
2. Edit or delete your comments as needed.

### Profile Page
1. Access your profile by clicking the user icon.
2. View your username and last seen time.
3. Log out from the profile page.

###- Posts are displayed with pagination, showing 10 posts 

