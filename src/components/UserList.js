import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';


function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        setError('Failed to fetch users');
      });
  }, []);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEdit = (userToEdit) => {
    setEditingUser(userToEdit); // Set the user to be edited
  };

  const handleAddOrEditUser = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditingUser(null); // Reset editing user after update
    } else {
      setUsers([...users, user]); // Add new user
    }
  };

  return (
    <div className="container mt-5">
      {error && <p className="alert alert-danger">{error}</p>}

      {/* Only render UserForm if editingUser is set or if adding a new user */}
      {/* Only render UserForm if editingUser is set or if adding a new user */}
<UserForm userToEdit={editingUser} onSubmit={handleAddOrEditUser} />


      {/* Users Table */}
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.split(' ')[0]}</td>
              <td>{user.name.split(' ')[1]}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
