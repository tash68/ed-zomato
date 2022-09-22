import React from "react";

import { useState } from "react";
import "./MobilePage.css";
import { useNavigate } from "react-router-dom";


export default function MobilePage() {
  const [isEmail, setEmailFlag] = useState(true);
  const [isPhone, setPhoneFlag] = useState(false);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const navigate=useNavigate();

  return (
    <>
      <div className="container">
        <div className="imageDiv">
          <img
            width="100%"
            src="https://b.zmtcdn.com/web_assets/91fd934b79f23aeba3c3908837208ec71626083686.png"
          />
        </div>
        <div className="dataDiv">
          <div className="headings">
            <h1>Get the Zomato App</h1>
            <p>
              We will send you a link, open it on your phone to download the app
            </p>
          </div>
          <div className="radioButtons">
            <div>
              <input
                type="radio"
                name="link"
                id="email"
                checked={isEmail}
                onChange={() => {
                  setEmailFlag(!isEmail);
                  setPhoneFlag(!isPhone);
                }}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input
                type="radio"
                name="link"
                id="phone"
                onChange={() => {
                  setEmailFlag(!isEmail);
                  setPhoneFlag(!isPhone);
                }}
                checked={isPhone}
              />
              <label htmlFor="phone">Phone</label>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              // alert("Link shared successfully");
              navigate("/");
            }}
            className="inputs"
          >
            <div className="inputDiv">
              <div
                className="emailPhoneInputs"
                style={{ display: isPhone ? "block" : "none" }}
              >
                {/* <PhoneInput
                  defaultCountry="IN"
                  placeholder="type here..."
                  value={number}
                  onChange={setNumber}
                /> */}
              </div>

              <div
                className="emailPhoneInputs"
                style={{ display: isEmail ? "block" : "none" }}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="emailPhoneInputs">
              <input
                id="btn"
                name="submit"
                type="submit"
                value="Share App Link"
              />
            </div>
          </form>
          <div className="downloadDiv">
            <p>Download app from</p>
            <div className="storeButtons">
              <img
                width="150px"
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
              />
              <img
                width="150px"
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}