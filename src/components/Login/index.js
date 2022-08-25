import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => { //catched prop
  const adminEmail = 'shalu@gmail.com';
  const adminPassword = 'shalu';

  const [email, setEmail] = useState('shalu@gmail.com');
  const [password, setPassword] = useState('shalu');

  const handleLogin = e => {
    e.preventDefault(); //onclick,event listner

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Successfully logged in!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
      });
    } else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Incorrect email or password.',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  const shalu=(e)=>{
    const pankaj=e.target.value;
    setEmail(pankaj)
  };
  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>  
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="shalu@gmail.com"
          value={email}
          onChange={shalu}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="shalu"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input style={{ marginTop: '12px' }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
