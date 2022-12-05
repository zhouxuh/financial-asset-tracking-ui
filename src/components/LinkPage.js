import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import useAuth from '../hooks/useAuth';

const LinkPage = () => {
  const { setAuth } = useContext(AuthContext);
  const { auth } = useAuth();
  const logout = async () => {
    setAuth({});
    alert('Logged out successfully.');
  };
  const isLoggedIn = auth?.userName !== undefined ? true : false;
  let loginlogoutButton;
  if (isLoggedIn) {
    loginlogoutButton = (
      <button
        onClick={logout}
        className="rounded text-white font-semibold bg-blue-400
    hover:bg-blue-700 px-6 py-2 shadow border-b-2"
      >
        <Link to="/">LogOut</Link>
      </button>
    );
  } else {
    loginlogoutButton = (
      <button
        className="rounded text-white font-semibold bg-blue-400
    hover:bg-blue-700 px-6 py-2 shadow border-b-2"
      >
        <Link to="/login">Login</Link>
      </button>
    );
  }

  let adminButton;
  if (auth?.roles?.includes('ROLE_ADMIN')) {
    adminButton = (
      <button
        className="rounded text-white font-semibold bg-blue-400
    hover:bg-blue-700 px-6 py-2 shadow border-b-2"
      >
        <Link to="/admin">Admin</Link>
      </button>
    );
  }

  let greetingMessage;
  if (isLoggedIn) {
    greetingMessage = <div className="font-bold">Hi {auth.userName}</div>;
  } else {
    greetingMessage = <h1>Welcome</h1>;
  }

  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          {greetingMessage}
        </div>
        <div className="flex item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            <Link to="/assetList">Home</Link>
          </button>
          {adminButton}
          {loginlogoutButton}
          <button
            className="rounded text-white font-semibold bg-blue-400
            hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            <Link to="/signup">SignUp</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkPage;
