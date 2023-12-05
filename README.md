# Mitca

## Description

This is a personal CRUD API built with Mongoose, Express and React project built for my own evaluation as a student. I chose a marathon themed webpage intended for creating users, runners, sponsors and the races they are interested in. 

### Tree Diagram

![Descripción de la imagen](backend/public/images/tree.png)

## Table of Contents

- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [.env Files](#env-files)
  - [Frontend .env](#frontend-env)
  - [Backend .env](#backend-env)
- [Database Setup](#database-setup)
  - [MongoDB](#mongodb)
  - [MongoDB Atlas](#mongodb-atlas)
- [User Guide](#user-guide)
  - [Signing Up and Log In](#Signing-Up-and-Log-In)
  - [Loading Data](#Loading-Data)
  - [Admin Guide](#Admin-Guide)
  - [User Guide](#User-Guide)
  - [Company Guide](#Company-Guide)
- [Acknowledgements](#acknowledgements)
- [Bibliography](#bibliography)

---

## Installation

```bash
git clone https://github.com/DanielMesaGarcia/mitca.git
```

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd ../backend
npm install
npm start
```

### .env Files

Generate your Vapid keys with this command in the console:

```bash
npx web-push generate-vapid-keys --json
```

#### Frontend .env

Create a `.env` file in the `frontend` directory with the following content:

```bash
REACT_APP_API_URL=your_api_url
REACT_APP_PUBLIC_KEY=your_public_key
REACT_APP_PRIVATE_KEY=your_private_key
```

#### Backend .env

Create a `.env` file in the `backend` directory with the following content:

```bash
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_user_password
DB_NAME=your_database_name

PUBLIC_KEY=your_public_key
PRIVATE_KEY=your_private_key
```

## Database Setup

### MongoDB

To install MongoDB locally, follow the instructions [here](https://docs.mongodb.com/manual/installation/).

### MongoDB Atlas

To use MongoDB Atlas, sign up [here](https://www.mongodb.com/cloud/atlas), create a cluster, and follow the setup instructions.

## User Guide

### Signing Up and Log In

You can create your own account by signing up. if you do, you will create a normal user by default. As a normal user, you will be able to create runners and join them to races. If during the sign up you open the company modal, you will be able to create a company account by filling the company form, which will allow you to sponsor a Race. If you're an admin, you just have to create a normal user account and ask another admin to give you the admin role.

Given this system, of course you would need an original admin to make other users admin. That's why there's an admin user always present, with admin@admin.com as the email and admin1 as the password.

### Loading Data

Of course, the first time you open the web page there will be no data, and as a user or company there won't be much to do other than check your own user settings. At this point, it would be wise to log in as an admin (or ask one) to create races for you to join or sponsors. Given this webpage is mainly for formation purposes and not something a real company will use, there's also a "demo data" option in the header menu, which after clicking and reloading the page will create 3 demostration user (one with two runners and the other two with one company each), 2 demostration races with one runner and one sponsor each.

### Admin Guide

If you're an admin, you will be able to create races from the get go once you've logged in. This will create a race, route, and the current status of the race (it will always start as not started). Once you click on a race, you have a button to modify the status (one click will just start the race and notify every user subscribed to the webpage about the race starting, and the second click will trigger a little form asking you who won the race and what was his time. Any click after the second one will just allow you to edit the winner and time). There is no "update route" or "update race", given I consider changing, say, the location, goal or name of the race would be counter efficient given most users may not see the notification and this may result in them showing up at the old location or whatever. If you want to change the race location, it would be wise to simply delete it and create a new one. 

Also, as an admin, you have access to the company, runner and user CRUD in your user settings. Just click on the header and go to your user settings, you will have a modal button which will redirect you to each one. Here you can kick runners, companies or users or change their information if needed. You can't create for security, given some malicious user with admin role may sign non-related companies or people against without their consent and that may lead to some issues.

### User Guide

As an user, you will be able to click on each created race and check it's details, check who sponsors each race, and sign your runners into a particular race. In your user settings you can change your user info and create runners. This works this way because one family could use a single account, and it's more convinient to fill a form for each family member once per account instead of once each time you join a race. In case of some runner not popping up in the runner list, try refreshing the page and doing the transaction again, it's safer to always double check.

### Company Guide

Your guide is pretty much the same as the normal user one, but with the main difference being that you can sign your company in and out of a company as a sponsor, and you can update your company details in your user settings. You can only do one company per account.

### Demo Data

Preinstalled: admin@admin.com / admin1

After clicking create demo data:
user1@example.com / password1 (user)
user2@example.com / password2 (sponsor)
user3@example.com / password3 (sponsor)