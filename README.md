# COLORS LAMP Web Application


## Overview

This is a web application built using LAMP stack that lets users add colors and search for colors within a MySQL database upon validation of login through the use of a PHP API. Users must log in to access color application functions. 


## Features

* Login Validation
* Add color entries through backend API
* Search for colors using backend API
* User Interface built with HTML, CSS, and frontend JavaScript that communicate to PHP scripts using JSON requests


## Technologies Used

* Frontend: HTML, CSS, JavaScript
* Backend: PHP (API endpoints)
* Database: MySQL
* Web Server: Apache
* Stack: LAMP (Linux/Apache/MySQL/PHP)  


## Requirements

* LAMP Environment (DigitalOcean)
* Apache + PHP 
* MySQL


## Setup Instructions

1. Create a LAMP Droplet on DigitalOcean
2. Move project folder into web server directory
3. Create MySQL Database
4. Database name: [YOUR_DB_NAME]
    * Create tables required by app including:
        * Users table with columns for firstName, lastName, Login, and Password
        * Colors table with column for id and color name
5. Update placeholder database credentials in Login.php, AddColor.php, and SearchColors.php based on set user name ([YOUR_DB_USER]), database password ([YOUR_DB_PASSWORD]), and database name ([YOUR_DB_NAME])


## How to Run / Access

1. Start web server (Apache) and database (MySQL)
2. Open login page in browser based on pathway: 
    * For deployment on DigitalOcean / Domain: http://YOUR_DROPLET_IP_OR_DOMAIN/colors-lamp/public/index.html
3. Log in to account using a user created in user table within database
4. Upon successful login credential submission, UI navigates to colors application, allowing use to add or search for a color name in the database at:
    * For deployment on DigitalOcean / Domain: http://YOUR_DROPLET_IP_OR_DOMAIN/colors-lamp/public/color.html


## Assumptions & Limitations

* Assumes Apache + PHP + MySQL environment hosted on DigitalOcean 
* Database schema names must consistently match with PHP naming expectations


## AI Usage

* AI tools used: None
