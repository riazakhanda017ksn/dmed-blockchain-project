import React, { useState } from "react";
import { ethers } from "ethers";
import { registration } from "../actions/PatientDataManager";

const provider = new ethers.providers.Web3Provider(window.ethereum);

export default function SignUp({ userType }) {
  const [user, setUser] = useState({});

  const updateState = (e) => {
    const field = e.target.name || e.target.id;
    const value = e.target.value;
    user[field] = value;
    setUser(user);
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
            user.type = userType;
            const registrationReceipt = await registration(
              provider,
              address,
              user
            );
            console.log(registrationReceipt);
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
    <div className="sign-up-page">
      <form
        action=""
      >
        <h3>Registration</h3>
        <div>
          <label
           htmlFor="name"
          > 
            Name*
          </label> <br/>
          <input
  
            type="text"
            placeholder="Name"
            id="name"
            onChange={updateState}
          />
        </div>

        <div>
          <label
          htmlFor="email"
           >
            Email*
          </label> <br/>
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={updateState}
          />
        </div>

        <div>
          <label
          htmlFor="phone"
          >
            Phone*
          </label>  <br/>
          <input
            type="phone"
            placeholder="Phone"
            id="phone"
            onChange={updateState}
          />
        </div>

        <div>
          <label
          htmlFor="password"
          >
            Password*
          </label>  <br/>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={updateState}
          />
        </div>

        <div>
          <label
          >
            DOB*
          </label>  <br/>
          <input
            type="date"
            name="dob"
            onChange={updateState}
          />
        </div>
        <div>
          <label
          htmlFor=""
          >
            Blood Group*
          </label>  <br/>
          <select
      
            id="blood_group"
            onChange={updateState}
          >
            <option value="">Select</option>
            <option value="Farmer">Farmer</option>
            <option value="Food Producer">Food Producer</option>
            <option value="Distributor">Distributor</option>
            <option value="Retaler">Retaler</option>

          </select>
        </div>
        <div>
          <label
      
            htmlFor=""
          >
            Gender*
          </label>  <br/>
          <div

          >
            <div
              name="gender"
            >
              <label
                className="form-check-label"
                htmlFor="male_radio_btn"
              >
                <input
                  type="radio"
                  name="gender"
                  id="male_radio_btn"
                  value="Male"
                  onChange={updateState}
                />
                Male
              </label>{" "}
            </div>
            <div
    
            >
              <label
                className="form-check-label "
                htmlFor="female_radio_btn"
              >
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  id="female_radio_btn"
                  onChange={updateState}
                />{" "}
                Female
              </label>{" "}
            </div>
          </div>
        </div>

        <div className="mt-5">
          <input
            className="btn btn-primary fw-bold"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            style={{ width: "10rem" }}
          />
        </div>
      </form>
    </div>
  );
}
