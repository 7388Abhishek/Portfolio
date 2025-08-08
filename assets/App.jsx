import { useState } from 'react';
import './App.css';
import Portfolio from './components/Portfolio'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    const validUsername = 'admin';
    const validPassword = '123456';

    if (username === validUsername && password === validPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='hob' type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem' }}>
      {/* <h2>{welcome}!</h2> */}
      <Portfolio />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;