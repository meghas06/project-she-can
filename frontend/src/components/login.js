import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [referralCode, setReferralCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/dashboard/${referralCode}`);
  };

  return (
    <div className="login-container">
      <h1>Intern Portal Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter referral code"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          required
        />
        <button type="submit">Enter Dashboard</button>
      </form>
      <p>Demo codes: alex2025, sam2025</p>
    </div>
  );
}

export default Login;