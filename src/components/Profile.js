import React from 'react';

const Profile = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center text-indigo-800 mb-6">User Profile</h2>
      
      {/* User Avatar */}
      <div className="flex justify-center mb-6">
        <img
          src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/552d4700-55bb-4492-bb97-75f43d2df333/fd740456-d67d-4dfd-b94b-c27fea73af5b.png"
          alt="User Avatar"
          className="rounded-full w-32 h-32 border-4 border-indigo-600"
        />
      </div>
      
      {/* User Information */}
      <div className="text-center space-y-4">
        <div>
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">johndoe@example.com</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="font-medium"><span className="text-gray-700">New York, USA</span></p>
          <p className="font-medium"> <span className="text-gray-700">Frontend Developer</span></p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
