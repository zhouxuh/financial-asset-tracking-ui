import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';
import AuthContext from '../context/AuthProvider';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const nav = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUser] = useState('');
  const [password, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [userName, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    AuthService.signIn(JSON.stringify({ userName, password }))
      .then((response) => {
        if (response.status === 200) {
          alert('Sign in successfully.');
        }
        console.log(response);
        const roles = response?.data?.roles;
        const token = response?.data?.token;
        console.log(roles);
        console.log(token);
        setAuth({ userName, password, roles, token });
        setSuccess(true);
        setUser('');
        setPwd('');
        nav('/assetList');
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response.data);
      });
  };

  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
            {errMsg}
          </p>
          <h1>Sign in</h1>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Username
          </label>
          <input
            type="text"
            id="username"
            ref={userRef}
            onChange={(e) => setUser(e.target.value)}
            value={userName}
            required
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-bold">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={password}
            required
            className="h-10 w-96 border mt-2 px-2 py-2"
          />
        </div>

        <div className="flex item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={handleSubmit}
            className="rounded text-white font-semibold bg-blue-400
              hover:bg-blue-700 px-6 py-2 shadow border-b-2"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
