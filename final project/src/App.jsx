import React from 'react'
import './App.css'

function App() {
  return(
    <>
    <div class="bghead">
    <div class="header1">
        <ul>
            <li><a href="/blogpages">Blogs</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/login">Login</a></li> 
        </ul>
    </div>
    <img class="img2" src="./images/added3.png" alt="Random Image"/>
    <img class="img3" src="./images/2132963edf3587e22c215f8974add411-removebg-preview.png" alt="Random Image"/> 
    <img class="img4" src="./images/download-removebg-preview.png" alt="Random Image"/> 
    <img class="img1" src="./images/added2.png" alt="Random Image"/>
    <h1>Collaborate,Critique <br/>and Work together <br/>to make blogs</h1>
    <h3>Connecting growth
        and impact to
        drive performance.
        Structured,<br/> objective, always-on feedback, goals and career development <br/>to accelerate business impact.</h3>
        <button><a href="/login">Sign Up</a></button>
    </div>
    <div className='second'>
      <h1>Foster a Culture Of Continuous Growth and Learning</h1>
      <p>Pando makes career progression accessible so employees can continuously level-up and track their impact as they grow.</p>
      <img src="./images/Screenshot_2024-05-26_033645-removebg-preview.png" alt="image" className="growth" />
</div>
    </>
)}

export default App
