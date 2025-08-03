import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Dashboard() {
  const { referralCode } = useParams();
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/intern/dashboard/${referralCode}`)
      .then(res => res.json())
      .then(data => setIntern(data))
      .catch(err => console.error(err));
  }, [referralCode]);

  if (!intern) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Intern Dashboard</h1>
      <div className="card">
        <h2>Welcome, {intern.name}!</h2>
        <p><strong>Referral Code:</strong> {intern.referralCode}</p>
        <p><strong>Donations Raised:</strong> ${intern.donationsRaised}</p>
      </div>
      
      <div className="card">
        <h3>Your Rewards</h3>
        <ul>
          {intern.rewards.map((reward, index) => (
            <li key={index}>{reward}</li>
          ))}
        </ul>
      </div>
      
      <Link to="/leaderboard">View Leaderboard</Link>
    </div>
  );
}

export default Dashboard;