import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import { login } from "../actions/PatientDataManager";
import { Link, useNavigate } from 'react-router-dom';
const provider = new ethers.providers.Web3Provider(window.ethereum);

const Login = () => {
  const [user, setUser] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const [success,setSucess] = useState(false)
  const navigate = useNavigate()
  const updateState = (e) => {
    const field = e.target.name || e.target.id;
    const value = e.target.value;
    user[field] = value;
    setUser({ ...user, [field]: value });
    setSucess(true)
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (window.ethereum) {
        provider
          .send("eth_requestAccounts", [])
          .then(async () => {
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            const loginReceipt = await login(
              provider,
              address,
              user.email || "",
              user.password || ""
            );
            console.log(loginReceipt);
            if (success) {
              navigate('/dashboard');
            }{
              navigate('/dashboard');
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log("Metamask not install");
      }
    } catch (error) {}
  };

  return (
    <div className="lsign-up-page">
      <form
        action=""
        className=" "
      >
        <h2>Login</h2>

        <input
          className=""
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={updateState}
        />
        <input
          className=""
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={updateState}
        />
          <select
      
            id="blood_group"
            value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select</option>
            <option value="farmer">Farmer</option>
            <option value="food-producer">Food Producer</option>
            <option value="distributor">Distributor</option>
            <option value="retaler">Retaler</option>

          </select>
        {/* <button onClick={handleSubmit}>
          Login
        </button> */}
        <Link to={`/${selectedOption}`}>
          Login
        </Link>
      </form>
    </div>
  );
};

export default Login;
