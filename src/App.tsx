import React from 'react';
import InputComponent from "./components/InputComponent"
import './index.css';
import Logo from "./img/CommunityAmericaLogo.jpg";


function App() {
  return (
    
    <div>
      <div className="header">
        <a href="https://www.communityamerica.com/">
          <div className = "logo">
          <img src={Logo} alt="CACU Logo"/>
          </div>
        </a>
        <h1 className="header_title">
          Member Referral Program
        </h1>
      </div>
      <h1 className="inner_title">Refer your friends. Pocket the rewards!</h1>
      <div className="page">
        <div className="text"> 
          Your friends will each get $50 when they become a member and meet a few requirements. <br/><br/>
          <b>How it works</b>  <br/>
           1. Send referrals to friends and family using your unique link, social media, or email. <br/>
          2. Within 70 days of opening their new Community America Checking Account, your friend must fund the account with a 
          minumum  of $50 and complete at least 10 Debit Card purchases. <br/>
          3. Sit back and relax! Within 70 days of your friend meeting the program requirements, you will recieve $50 deposited
          directly into your Checking Account
        </div>
        <InputComponent />
      </div>
      {/* <InputComponent /> */}

        <div className="footer"/> 
    </div>
    
  );
}

export default App;

{/* <div className="text"> 
Your friends will each get $50 when they become a member and meet a few requirements. 
</div>
<br/>
<div className="text"> 
<b>How it works</b> 
</div>
<br/>
<div className="text"> 
<b>1.</b> 
Send referrals to friends and family using your unique link, social media, or email. 
</div>
<br/>
<div className="text"> 
<b>2.</b>
Within 70 days of opening their new Community America Checking Account, your friend must fund the account with a 
minumum  of $50 and complete at least 10 Debit Card purchases. 
</div>
<br/>
<div className="text"> 
<b>3.</b>
Sit back and relax! Within 70 days of your friend meeting the program requirements, you will recieve $50 deposited
directly into your Checking Account
</div> */}