
# React Task Management Application

## Overview

This web application is built using React and includes several features for managing tickets. It utilizes Chakra UI for styling, React Router for navigation, and Axios for making HTTP requests. The backend is simulated using `json-server` to provide RESTful API endpoints.

## Features

- **Navbar**: Visible on all pages, includes links to Home, About, Contact, Task, and Login. Contains a LOGOUT button visible only when logged in.
- **Login Page**: Allows users to log in. Successful login redirects to the Home page and stores a token for authentication. Use
                fake { email:eve.holt@reqres.in,
                     password:cityslicka } to login
- 
- **Private Routes**: All pages except the Login page are accessible only to logged-in users.
- **Home Page**: Displays a visually appealing UI.
- **About Page**: Displays a visually appealing UI.
- **Contact Us Page**: Contact form and details.
- **Task Page**: 
  - Displays a list of tickets as cards.
  - Includes sorting and filtering options.
  - Create Ticket button redirects to Ticket Create page.
- **Ticket View Page**: 
  - Displays detailed information about a ticket.
  - Includes Edit and Delete buttons.
- **Ticket Create Page**: 
  - Form to create a new ticket with inputs for Title, Description, Assignee, Status, and Priority.
  - Submits the form via a POST request.
- **Ticket Edit Page**: 
  - Form to edit an existing ticket with pre-filled values.
  - Submits the form via a PUT request.

## Live Demo
Check out the live demo of the ToDo App [here](https://task-management-app-fj8c.vercel.app/)

## Technologies Used

- **React**: Frontend library.
  - `useState`, `useContext`, `useEffect`, `useRef`
- **Chakra UI**: UI components and styling.
- **React Router**: Routing and navigation.
- **Axios**: HTTP requests.
- **json-server**: Mock backend server.



## Getting Started

- Install Prerequisites: Ensure Node.js, npm, and json-server are set up.
- Clone the Repository: Use git clone to get the project code.
- Install Dependencies: Run npm install to get all required packages.
- Set Up Backend: Create db.json and start  json-server.
- Run the Application: Use npm run dev to launch the React app.

