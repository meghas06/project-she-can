# project-she-can
TO run the above project follow the give instructons and you can easily access the give data  use proper api keys mentioned in the following

Backend:

Install MongoDB and start the service
cd backend
npm install
Create .env file with MongoDB URI
npm start



Frontend:

cd frontend
npm install
npm start


Features Included:
Dummy Login: Enter any referral code (demo: alex2025, sam2025)
Dashboard Shows:
Intern name
Referral code
Total donations raised
Rewards section


Backend API:
/api/intern/dashboard/:referralCode - Returns intern data
/api/intern/leaderboard - Returns top 10 interns
Bonus Leaderboard: Shows top 10 interns by donations raised
Data Storage: MongoDB with pre-populated dummy data
Testing with Postman:
GET http://localhost:5000/api/intern/dashboard/alex2025
GET http://localhost:5000/api/intern/leaderboard
This implementation provides a complete full-stack solution with all requested features. The backend serves dummy data from MongoDB, and the React frontend provides a clean interface for accessing the dashboard and leaderboard. The solution is easily extensible for additional features like real authentication or dynamic data updates.
