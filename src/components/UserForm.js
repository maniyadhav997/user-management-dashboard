import React, { useState, useEffect } from 'react';

function UserForm({ userToEdit, onSubmit }) {
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    company: { name: '' },
  });

  // Update form fields when userToEdit changes (for editing existing user)
  useEffect(() => {
    if (userToEdit) {
      setUser({
        id: userToEdit.id,
        name: userToEdit.name,
        email: userToEdit.email,
        company: { name: userToEdit.company.name },
      });
    }
  }, [userToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user); // Pass the user data to the parent component
    setUser({ id: '', name: '', email: '', company: { name: '' } }); // Reset form after submit
  };

  return (
    <div className="container mt-4">
      <h2>{userToEdit ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={handleChange}
            className="form-control"
            placeholder="ID"
            required
            disabled={userToEdit !== null} // Disable the ID field if editing
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="form-control"
            placeholder="First Name Last Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="company"
            value={user.company.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Department"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {userToEdit ? 'Update User' : 'Add User'}
        </button>
      </form>
    </div>
  );
}

export default UserForm;
