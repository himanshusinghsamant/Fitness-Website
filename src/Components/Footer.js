import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footerstyle.css";
import apple from "../images/apple-store.jpg"
import google from "../images/Google-Play.webp"
import Wk1 from "../images/workout-2.jpg"
import Wk2 from "../images/workout-4.jpg"
import Wk3 from "../images/workout-14.jpg"


function Footer() {
  const Navigate = useNavigate()


  return (
    <div className="footer">
      <div className="sec-1">
        <div className="block1">
          <h1>THE BODYFIT GAMES APP</h1>
          <p>
            Watch the BodyFit games app, access the leaderboard, follow athlete
            and see the latest news & updates.
          </p>
          <div className="icons">
            <img className="appl" src={apple} alt="" />
            <img className="goog" src={google} alt="" />
          </div>
        </div>
        <div className="block2">
          <img className="img-1" src={Wk1} alt="" />
          <img className="img-2" src={Wk2} alt="" />
          <img className="img-3" src={Wk3} alt="" />
        </div>
      </div>
      <div className="sec-2">
        <div className="part-1">
          <h3>ABOUT BODYFIT</h3>
          <span>What is BrossFit?</span>
          <span>Get Started</span>
          <span>Workouts</span>
          <span>Movements</span>
          <span>FAQ</span>
          <span>Careers</span>
          <h3 className="h3">THE CROSSFIT GAMES</h3>
          <span>About the Games</span>
          <span>Leaderboard</span>
          <span>Read Articles</span>
          <span>Shop</span>
        </div>
        <div className="part-2">
          <h3>EDUCATIONS</h3>
          <span>Courses Near You</span>
          <span>Certificate Courses</span>
          <span>Certifications</span>
          <span>Online Courses</span>
        </div>
        <div className="part-3">
          <h3>AFFILIATES</h3>
          <span>Starter Kit</span>
          <span>Affiliation</span>
          <span>Requirements</span>
          <span>Field Leaders</span>
        </div>
        <div className="part-4">
          <h3>FIND A GYM TODAY!</h3>
          <p>Start your fitness journey and get healthy.</p>
          <button className="part-4-btn" onClick={()=>Navigate('/contact')}>FIND A GYM NEAR YOU</button>
        </div>
      </div>
      <hr className="hr-tag"/>
      <div className="sec-3">
        <div className="p-1">
          <p>© 2023 CrossFit, LLC. CrossFit, Fittest on Earth, 3...2...1...Go! CrossFit Games, and Sport of Fitness are trademarks of CrossFit, LLC in the U.S. and/or other countries. All Rights Reserved.</p>
          <span>Terms & Condtions</span>
          <span>Privacy Policy</span>
          <span>Coolie Policy</span>
          <span>Disclaimer</span>
          <span>Do not sell my info</span>
          <span>Contact Us</span>
          <span>Report IP Theft</span>
        </div>
        <div className="p-2">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-square-twitter"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-square-youtube"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
