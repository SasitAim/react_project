import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Login from '../Pages/Login';
import '../styles/style_header02.css';

function Header02() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/"); // กลับหน้าแรกหรือรีเฟรชหน้า
  };

  return (
    <>
      <div className="header">
        <Link to="/" className="logo">Logo</Link>
        <div className="header-right">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/contact02">Contact</NavLink>

          {!isLoggedIn ? (
            <button onClick={() => setIsModalOpen(true)}>Login</button>
          ) : (
            <button onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>

      <Login isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLoginSuccess={handleLoginSuccess} />
    </>
  );
}

export default Header02;

