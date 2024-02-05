import { useEffect } from "react";
import { useState } from "react";
import bgLogin from "../../assets/bgLogin.svg";
import Button from "../../components/Button";
import {
  AUTHORIZE_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE_PARAM,
} from "../../helpers/config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate()

  const handleLogin = () => {
    window.location.href = `${AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE_PARAM}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const access_token = params.get("access_token");

    if (access_token) {
      localStorage.setItem("access_token", access_token);
      setToken(access_token);
    }
  }, []);

  
  return (
    <>
      <div
        className="flex justify-center items-center h-screen font-poppins bg-center bg-cover"
        style={{ backgroundImage: `url(${bgLogin})` }}
      >
        <div className="text-center text-white">
          <h1 className="text-[60px] font-semibold ">Songfy</h1>
          <p className="text-[20px] mb-4 font-light">
            Discover, listen to, and enjoy millions of songs from around the
            world.
          </p>

          <button
            onClick={() => {token? navigate('/dashboard'):handleLogin()}}
            className="bg-[#0A68AB] text-[15px] py-[8px] px-[32px] rounded-[5px] font-semibold hover:bg-[#065791] duration-200"
          >
            {token? "Go to Dashboard": "Login With Spotify"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
