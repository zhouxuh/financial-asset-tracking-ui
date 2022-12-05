import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

const LinkPage = () => {
  const { setAuth } = useContext(AuthContext);
  const logout = async () => {
    setAuth({});
    alert('Logged out successfully.');
  };
  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <h1>Welcome</h1>
        </div>
        <div className="flex item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            <Link to="/assetList">Home</Link>
          </button>
          <button
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            <Link to="/login">Login</Link>
          </button>
          <button
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            <Link to="/signup">SignUp</Link>
          </button>
          <button
            onClick={logout}
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            <Link to="/">LogOut</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
