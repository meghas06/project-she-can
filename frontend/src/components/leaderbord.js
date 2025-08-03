import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Leaderboard() {
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/intern/leaderboard')
      .then(res => res.json())
      .then(data => setInterns(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="leaderboard">
      <h1>Donation Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern, index) => (
            <tr key={intern.referralCode}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>${intern.donationsRaised}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Back to Login</Link>
    </div>
  );
}

export default Leaderboard;