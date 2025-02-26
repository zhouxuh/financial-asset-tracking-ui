import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

const Logout = () => {
  const { setAuth } = useContext(AuthContext);
  setAuth({});
  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <h1>Logout Page</h1>
        </div>
        <p>You logged out, bye.</p>
        <br />
        <div
          className="rounded text-white font-semibold bg-blue-400
          hover:bg-blue-700 px-6 py-2 shadow border-b-2"
        >
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Logout;
