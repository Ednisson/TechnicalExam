# Technical Exam

This project is a full-stack application with a backend built using Node.js, Express, and MongoDB, and a frontend built using React and Vite.

## Setup Instructions


### Importing MongoDB Compass Connection

To import the MongoDB Compass connection settings from the `techExam-compass-connections.json` file, follow these steps:

1. If you don't have MongoDB Compass on your desktop, you can download it from this link: https://www.mongodb.com/try/download/community

2. After downloading, you can run the installation.

3. Open MongoDB Compass.

4. Click on the **Connections** tab on the left sidebar.

5. Click on the **Import** button at the top right corner of the Connections tab.

6. In the file dialog, navigate to the root directory of this project and select the `techExam-compass-connections.json` file.

7. Click **Open** to import the connection settings.

8. The imported connection named "technicalexam" should now appear in your list of connections. Click on it to connect to the MongoDB server.

This will allow you to quickly connect to the MongoDB server using the predefined connection settings.




### Backend Setup

1. Navigate to the `Backend` directory:
   ```sh
   cd Backend

 2.  After navigating to the Backend folder, Using cmd type "npm install" to install dependencies.


 3. Create .env file in the Backend directory with the following content
 DATABASE_URL=mongodb://localhost:27017/techexam
DATABASE_CONNECTED_MESSAGE=Connected to MongoDB
DATABASE_CONNECTERROR_MESSAGE=Error connecting to MongoDB
PORT=3000


4. After you took step 1 to 3, you can now run the backend server by typing this in cmd "npm run dev"






### Frontend Setup

1. Navigate to the fe/technicalexam directory by typing this in cmd "cd fe/technicalexam"


2. Install the dependencies by typing "npm install" in cmd.


3. After you took step 1 and 2, you may now start the frontend development server by typing "npm run dev".




### Accessing the Application

- the backend server will be running on 
http://localhost:3000.

- the frontend application will be running on
http://localhost:5173.


### Additional Information

-The backend API endpoints are defined in the taskRouter.js file.


- The frontend components are located in the components directory.










