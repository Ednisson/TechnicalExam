# Technical Exam

This project is a full-stack application with a backend built using Node.js, Express, and MongoDB, and a frontend built using React and Vite.




## Setup Instructions




### Installing Nodejs on your machine

1.If you don't have Node.js on your machine yet. You can install Node.js with this link:
https://nodejs.org/en

2.Click the button "Download Node.js (LTS)", after downloading, run the installation to completely install nodejs in your machine.

3.After you took steps 1 and 2, Node.js was already installed on your machine. You can go to cmd and type "node -v" to ensure that you have Node.js on your machine already.










### Importing MongoDB Compass Connection

To import the MongoDB Compass connection settings from the `techExam-compass-connections.json` file, follow these steps:

1.If you don't have MongoDB Compass in your machine, you can download it from this link: https://www.mongodb.com/try/download/community

2.After downloading, you can run the installation.

3.Open MongoDB Compass.

4.Click on the **Connections** tab on the left sidebar.

5.Click on the **Import** button at the top right corner of the Connections tab.

6.In the file dialog, navigate to the root directory of this project and select the `techExam-compass-connections.json` file.

7.Click **Open** to import the connection settings.

8.The imported connection named "technicalexam" should now appear in your list of connections. Click on it to connect to the MongoDB server.


This will allow you to quickly connect to the MongoDB server using the predefined connection settings.








## Download the Technical Exam project

1.Go to this link to see the technical exam project : https://github.com/Ednisson/TechnicalExam

2.There is a "<> Code" button dropdown right there; click the button dropdown, and the dropdown will expand. Go to the Local section, and in the Local section, go to the HTTPS section and then click the "Download ZIP" button. 

3.After downloading, you can extract the zip, and you will see the "TechnicalExam-main/TechnicalExam-main" folder already.





### Backend Setup

1.Go to cmd, point to the path of "TechnicalExam-main/TechnicalExam-main" and navigate to the Backend directory by typing this in cmd "cd Backend"

 2.After navigating to the Backend folder, Using cmd type "npm install" to install dependencies.


3.After you took steps 1 and 2, you can now run the backend server by typing this in cmd "npm run dev".






### Frontend Setup

1.Go back to the "TechnicalExam-main/TechnicalExam-main" path by typing this  in cmd "cd ..".

2.Navigate to the fe/technicalexam directory by typing this in cmd "cd fe/technicalexam"


3.Install the dependencies by typing "npm install" in cmd.


3.After you took steps 1 to 3, you may now start the frontend development server by typing "npm run dev".






### Accessing the Application

-The backend server will be running on 
http://localhost:3000.

-The frontend application will be running on
http://localhost:5173.








### Additional Information

-The backend API endpoints are defined in the taskRouter.js file.


-The frontend components are located in the components directory.










