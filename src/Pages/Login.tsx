
import React, { useState } from 'react';
import '../styles/style_login.css';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      if (form.password !== form.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // ⬇️ ดึง users เดิมจาก localStorage หรือสร้าง array ใหม่ถ้ายังไม่มี
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

      // ⬇️ ตรวจสอบว่า username นี้มีอยู่แล้วหรือยัง
      const isDuplicate = existingUsers.some((u: any) => u.username === form.username);
      if (isDuplicate) {
        alert("This username is already registered.");
        return;
      }

      // ⬇️ เพิ่ม user ใหม่เข้า array และเก็บกลับ
      const updatedUsers = [...existingUsers, { username: form.username, password: form.password }];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      alert("Registration successful!");
      setIsSignUp(false);
      setForm({ username: '', password: '', confirmPassword: '' });
    } else {
      // ⬇️ login จาก users array
      const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const matchedUser = storedUsers.find((u: any) =>
        u.username === form.username && u.password === form.password
      );

      if (matchedUser) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", matchedUser.username); // เก็บชื่อ user ที่ login
        onLoginSuccess();
        onClose();
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <form className="modal-content animate" onSubmit={handleSubmit}>
        <div className="imgcontainer">
          <span onClick={onClose} className="close" title="Close Modal">&times;</span>
          <img src="https://sv1.img.in.th/7ZfZ1w.png" alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          {isSignUp ? (
            <>
              <label className="label-black"><b>New Username</b></label>
              <input type="text" name="username" onChange={handleChange} className="input" required />

              <label className="label-black"><b>New Password</b></label>
              <input type="password" name="password" onChange={handleChange} className="input" required />

              <label className="label-black"><b>Confirm Password</b></label>
              <input type="password" name="confirmPassword" onChange={handleChange} className="input" required />

              <button type="submit" className="btn-login-P">Register</button>
              <button type="button" className="btn-login-P" onClick={() => setIsSignUp(false)}>Back to Login</button>
            </>
          ) : (
            <>
              <label className="label-black"><b>Username</b></label>
              <input type="text" name="username" onChange={handleChange} className="input" required />

              <label className="label-black"><b>Password</b></label>
              <input type="password" name="password" onChange={handleChange} className="input" required />

              <button type="submit" className="btn-login-P">Login</button>
              <button type="button" className="btn-login-P" onClick={() => setIsSignUp(true)}>Sign Up</button>
            </>
          )}
        </div>
        
        <div className="container" style={{ padding: '8px' }}>
          <button type="button" onClick={onClose} className="btn-cancel-P">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Login;