# Todo List Application

- **Prerequisites:**

  - Node.js and npm
  - MongoDB

- **Getting Started:**

  1. **Clone the repository:**

     ```bash
     git clone https://github.com/your-username/todo-list-app.git
     ```

  2. **Navigate to the project folder:**

     ```bash
     cd todo-list-app
     ```

  3. **Install dependencies for both the client and server:**

     ```bash
     cd client
     npm install
     cd ../server
     npm install
     ```

  4. **Start the MongoDB server:**

     ```bash
     mongod
     ```

  5. **Run the server:**

     ```bash
     cd server
     npm start
     ```

  6. **Run the client:**

     ```bash
     cd client
     npm start
     ```

  7. **Open the application in your browser:**
     - [http://localhost:3000](http://localhost:3000) to view the Todo List application.

- **Additional Information:**

  - The server runs on port 3001, and the client runs on port 3000. Ensure that these ports are available.
  - The MongoDB connection string is set in the `server.js` file. Replace it with your actual MongoDB connection string.
  - Make sure to set up the MongoDB database and collection for your application.
