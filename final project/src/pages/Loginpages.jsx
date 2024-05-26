import React from "react"
import '../App.css'

function Loginpages() {
    return(
        <div className="login">
            <img className="images3" src="./images/a.png" alt="image" />
            <img className="images1" src="./images/added1.png" alt="image" />
            <img className="images2" src="./images/added2.png" alt="image" />
            <div className="container">
                <h1>Sign Up</h1>
                <form action="/action_page.php">
  <label for="fname">Full Name*</label>
  <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

  <label for="lname">Username*</label>
  <input type="text" id="lname" name="lastname" placeholder="Your Username.."/>

  <label for="lname">Email*</label>
  <input type="text" id="lname" name="lastname" placeholder="Your Email.."/>

  <label for="lname">Password*</label>
  <input type="password" id="lname" name="lastname" placeholder="Your Password.."/>

  <input type="submit" value="Submit"/>
</form>
  <div className="bts">
       <p><a href="">Sign In</a></p>
       <p><a href="/">Back</a></p>
       </div>
            </div>
        </div>
    )
}
export default Loginpages