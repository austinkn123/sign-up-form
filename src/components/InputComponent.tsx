import React, { SyntheticEvent } from "react";
import { useState } from "react";
import "../index.css";
import {Referral, ReferralRequest} from "../types/referral";

const InputComponent = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState(true); //for email
  const [dateMsg, setDateMsg] = useState(true); //for date
  const referralRequest:ReferralRequest = {

  }

  const emailValidation = () => {
    //move check in here
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if(regex.test(email) ){
      return true;
    }
    if (!regex.test(email) && email !== "")
    {
      return false;
    }
  }

  const dateValidation = () => {
    let dayBirth = new Date(date).getDay() + 1;
    let monthBirth = new Date(date).getMonth() + 1;
    let yearBirth = new Date(date).getFullYear();

    const dayToday = new Date().getDay() + 1;
    const monthToday = new Date().getMonth() + 1;
    const yearToday = new Date().getFullYear();

    let age = 0;

    if(monthToday > monthBirth){
      age = yearToday - yearBirth
    }
    else if(monthToday == monthBirth){
      if(dayToday >= dayBirth){
        age = yearToday - yearBirth
      }
      else{
        age = yearToday - yearBirth - 1
      }
    }
    else{
      age = yearToday - yearBirth - 1
    }

    if(age > 18){
      return true;
    }
    else{
      return false;
    }
  }


  //Month and Day start from 0
  //Day = 0-6 for weekdays


  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();

    // build the referral object
    const referral: Referral = {
      firstName,
      lastName,
      email,
      dateOfBirth: new Date(date)
    };

    if(emailValidation())
    {
      setMessage(true)
      if(dateValidation())
      {
        setDateMsg(true)
          // use fetch to POST it to your back end
        fetch("http://localhost:8080/referral/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(referralRequest.referral = referral),
        })
        //head
        .then((response) => response.json())
        //body (function)
        .then((referral) => {
          console.log(referral);
          // setMyWeather(data);
        });
      }
    }
    if (!emailValidation()){
      setMessage(false)
    }
    if(!dateValidation()){
      setDateMsg(false)
    }
  };

  return (
    <div className="form">
      <p>
        To ensure you recieve your referral reward, be sure your first and last
        name match what is listed on your Community America account.
      </p>
      <form className="input-wrap">

        <div className="labelCol">
          {/* Id needs to match 'htmlFor' */}
          <label htmlFor="First Name">First Legal Name: </label>
        </div>
        <div className="inputCol">
          <input
            type="text"
            name="First Name"
            id="First Name"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            required
          />
        </div>

        <div className="labelCol">
          <label htmlFor="Last Name">Last Legal Name: </label>
        </div>
        <div className="inputCol">
          <input
            type="text"
            name="Last Name"
            id="Last Name"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            required
          />
        </div>
          
        <div className="labelCol">
          <label htmlFor="email">Email Address: </label>
        </div>
        <div className="inputCol">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="validation">
            {!message ? "Please enter a valid email address": ""}
          </div>
        </div>

        <div className="labelCol">
          <label htmlFor="date">Date of Birth: </label>
        </div>
        <div className="inputCol">
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date of Birth"
            required
          />
          <div className="validation">
            {!dateMsg ? "You must be over the age of 18": ""}
          </div>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            value="agreement"
            required
          />
          <label >
            I have read and agreed to the Community America Member Referral
            Program Terms and Conditions and I agree to only refer friends and
            family.
          </label>
          <br />
          <br />
        </div>

        <div className="button">
          <button onClick={submitHandler} type="submit" className="button">
            <h1>Refer Now</h1>
          </button>
        </div>

      </form>
       {/* <p>
          {firstName} <br/>
          {lastName} <br/>
          {email} <br/>
          {date} <br/>
        </p>  */}
        
    </div>
    
  );
};

export default InputComponent;
