// pages/profile.js
import React from 'react';

const Profile = () => {
  const user = {
    registrationDate: "August 14, 2024 9:56 pm",
    firstName: "Abir",
    lastName: "Hossain",
    username: "abir12",
    email: "hitulyko@polkaroad.net",
    phone: "-",
    skill: "-",
    biography: "-",
    image: "https://images.pexels.com/photos/14653174/pexels-photo-14653174.jpeg",
    role: "Student",
  };

  return (
    <div className="max-w-3xl w-full rounded-lg mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Profile</h2>

      {/* Profile Image and User Info */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
          <img src={user.image} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{user.firstName} {user.lastName}</h3>
          <p className="text-gray-600">{user.role}</p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-5">
        <p className="text-gray-600"><strong>Username:</strong> {user.username}</p>
        <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
        <p className="text-gray-600"><strong>Phone Number:</strong> {user.phone}</p>
        <p className="text-gray-600"><strong>Registration Date:</strong> {user.registrationDate}</p>
        <p className="text-gray-600"><strong>Skill/Occupation:</strong> {user.skill}</p>
        <p className="text-gray-600"><strong>Biography:</strong> {user.biography}</p>
      </div>
    </div>
  );
};

export default Profile;
