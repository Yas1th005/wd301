import React from 'react';
import { Link } from 'react-router-dom';

const close=()=>{
  localStorage.removeItem('userData');
  localStorage.removeItem('authToken');
}

const Dashboard: React.FC = () => {
  let userData: { name?: string; email?: string } | null = null;

  try {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      userData = JSON.parse(userDataString);
    }
  } catch (error) {
    console.error('Error parsing user data:', error);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        {userData ? (
          <div className="text-left">
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        ) : (
          <p>No user data available</p>
        )}
        <Link to={'/signup'} id='logout-link' onClick={close}>Logout</Link>

      </div>
    </div>
  );
}

export default Dashboard;
