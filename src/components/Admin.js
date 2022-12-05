import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <h1>Admin Page</h1>
        </div>
        <p>Welcome admin.</p>
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

export default Admin;
