# Mitca

## Description

Brief description of your project.

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

## Acknowledgements

Special thanks to anyone who contributed or inspired this project.

## Bibliography

- List any references or resources you used during the development of this project.
