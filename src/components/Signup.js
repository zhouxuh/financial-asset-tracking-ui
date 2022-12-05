import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthService from '../services/AuthService';
import AuthContext from '../context/AuthProvider';

const usernameRegex = /^[A-z][a-zA-Z0-9]{3,19}$/;
const passwordRegex = /^[a-zA-Z0-9]{8,20}$/;

const Signup = () => {
  const nav = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUser] = useState('');
  const [validName, setValidName] = useState(false);

  const [password, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setAuth({});
  }, [setAuth]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(usernameRegex.test(userName));
  }, [userName]);

  useEffect(() => {
    setValidPwd(passwordRegex.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [userName, password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userValidation = usernameRegex.test(userName);
    const pwdValidation = passwordRegex.test(password);
    if (!userValidation || !pwdValidation) {
      setErrMsg('Invalid.');
      return;
    }

    AuthService.signUp(JSON.stringify({ userName, password }))
      .then((response) => {
        if (response.status === 201) {
          alert('Sign up successfully.');
        }
        console.log(response);
        nav('/login');
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response.data);
      });

    setUser('');
    setPwd('');
    setMatchPwd('');
  };

  return (
    <div className="max-w-xl mx-auto shadow border-b py-4">
      <div className="grid place-content-center py-4">
        <div className="font-bold text-2xl tracking-wider py-4">
          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
            {errMsg}
          </p>
          <h1>Sign up</h1>
        </div>
        <form>
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
              autoComplete="off"
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
              autoComplete="off"
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
          </div>

          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-bold">
              Confirm
            </label>
            <input
              type="password"
              id="confirm"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              autoComplete="off"
              className="h-10 w-96 border mt-2 px-2 py-2"
            />
          </div>

          <div className="flex item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button
              onClick={handleSubmit}
              className="rounded text-white font-semibold bg-blue-400
              hover:bg-blue-700 px-6 py-2 shadow border-b-2"
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
