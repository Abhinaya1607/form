import React, { useState } from 'react';

function Loginform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Form is valid, submit it
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        localStorage.setItem('details',[`${name}, ${email},${password}`])
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    } else if(!/^[a-zA-Z]+$/i.test(name)){
        errors.name='Only alphabetes allowed'

    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </label>
      <br />
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Loginform;