import React from "react";
import "./Mainstyle.css";
// import Video1 from "./videos/shortV-1.mp4"
import image from "../images/workout-12.jpg";
import image2 from "../images/diet-8.jpg";
import img1 from "../images/diet-12.jpg";
import img2 from "../images/diet-5.jpg";
import img3 from "../images/diet-4.jpg";
import img4 from "../images/diet-3.jpg";
import img5 from "../images/workout-10.jpg";
import img6 from "../images/workout-19.jpg";
import img7 from "../images/workout-16.jpg";
import img8 from "../images/workout-6.jpg";
import img9 from "../images/image-6.jpg";
import img10 from "../images/chris-bumsted.webp";
import img11 from "../images/Cristiano.jpg";
import img12 from "../images/gymnast.webp";

import { useNavigate } from "react-router-dom";

const Main = () => {
  const Navigate = (useNavigate())

  return (
    <div className="container">
      <div className="video">
        {/* <video><source src={Video1} type="video/mp4"/></video> */}
      </div>
      <div className="section">
        <div className="sec-img">
          <img src={img5} alt="" />
        </div>
        <div className="sec-info">
          <h1>PHYSICAL FITNESS BENEFITS</h1>
          <p>
            One of the most obvious benefits of exercise is the improvement of
            physical health. Regular exercise can help to increase
            cardiovascular fitness, which can lead to a healthier heart and a
            reduced risk of heart disease. Exercise can also help to increase
            muscle and bone strength, which can lead to improved overall fitness
            and a reduced risk of osteoporosis. Additionally, exercise can help
            to promote weight loss, which can lead to healthier body composition
            and a reduced risk of obesity-related diseases.
          </p>
          <p>
            Exercise also encourages self-awareness and self-acceptance. Regular
            exercise can help to increase self-esteem and self-confidence, as
            well as promote a positive body image. This can be beneficial for
            people who struggle with negative body image or self-esteem issues.
          </p>
        </div>
      </div>
      <div className="section-1">
        <div className="box-1">
          <h1>WORKOUT</h1>
          <h2>OF THE DAY</h2>

          <h3>SATURDAY</h3>
          <h4>230128</h4>
        </div>
        <div className="box-2">
          <p className="para-1">Back squat 5-5-5-5-5 reps</p>
          <hr />
          <p className="para-2">Scaling:</p>
          <p className="para-detail">
            Experienced athletes should build to a heavy set of 5 and plan to go
            as heavy as possible across all sets. Newer athletes should start
            light, focus on mechanics, and slowly add weight as they are
            comfortable.
          </p>
        </div>
        <div className="box-3">
          <img className="image" src={image} alt="" />
        </div>
      </div>
      <hr className="hr" />
      <div className="section-2">
        <div className="box-1">
          <h1>DIET</h1>
          <h2>OF THE DAY</h2>

          <h3>SATURDAY</h3>
          <h4>230128</h4>
        </div>
        <div className="box-2">
          <p className="para-1">After workout a very good diet</p>
          <hr />
          <p className="para-2">Scaling:</p>
          <p className="para-detail">
            Athlete should have this diet for good muscle recovery, you get good
            protien from this diet, this is vegitarian diet after a good
            workout.
          </p>
        </div>
        <div className="box-3">
          <img className="image2" src={image2} alt="" />
        </div>
      </div>
      <div className="section-3">
        <div className="img-1">
          <img src={img1} alt="" />
        </div>
        <div className="img-1">
          <img src={img2} alt="" />
        </div>
        <div className="img-1">
          <img src={img3} alt="" />
        </div>
        <div className="img-1">
          <img src={img4} alt="" />
        </div>
        <div className="info">
        <h1>EATING THE RIGHT FOODS FOR EXERCISE</h1>
        <h2>Nutrition is important for fitness</h2>
        <p>
          Eating a well-balanced diet can help you get the calories and
          nutrients you need to fuel your daily activities, including regular
          exercise.
        </p>
        <p>
          When it comes to eating foods to fuel your exercise performance, it’s
          not as simple as choosing vegetables over doughnuts. You need to eat
          the right types of food at the right times of the day.
        </p>
        <p>
          Eating a healthy breakfast is especially important on days when
          exercise is on your agenda. Skipping breakfast can leave you feeling
          lightheaded or lethargic while you’re working out.
        </p>
      </div>
      </div>
        <h1 className="articles">ARTICLES OR MORE</h1>
      <div className="section-4">
        <div className="block-1" onClick={()=>Navigate('/workout')}>
          <img src={img6} alt="" />
          <h2>Yoga Session | jan. 20-1-2023</h2>
          <p>How do yoga, meditation, breathing practices, and relaxation help us heal? The topic is a big one, which we will examine from many points of view as we move through this multipart series: Yoga as a Healing Art. In fact, healing is something we all aspire to, even if we do not always realize it—we all want to be healthy physically, mentally, and emotionally, and many of us also aspire to what we might call healing on the spiritual level as well.</p>
          <button className="sec-4-btn">Read more </button>
        </div>
        <div className="block-2" onClick={()=>Navigate('/workout')}>
          <img src={img7} alt="" />
          <h2>CrossFit, "Man Muscles," And The Feminine Idel</h2>
          <p>internet troll love to point out how unnaturally masculine female crossfit athletes looks. But if a training and nutrition regimen increases one's capacity and health , how can the resulting physique be anything but natural?</p>
            <button className="sec-4-btn">Read more </button>
        </div>
        <div className="block-3" onClick={()=>Navigate('/workout')}>
          <img src={img8} alt="" />
          <h2>Good strength and control of "Gymnast Athlete"</h2>
          <p>Gymnastics is a type of sport that includes physical exercises requiring balance, strength, flexibility, agility, coordination, dedication and endurance. The movements involved in gymnastics contribute to the development of the arms, legs, shoulders, back, chest, and abdominal muscle groups.</p>
            <button className="sec-4-btn">Read more </button>
        </div>
      </div>
      <div className="section-5">
        <div className="sec-5-img">
          <img src={img9} alt="" />
        </div>
        <div className="sec-5-info">
          <h1>TAKE YOUR TRAINING TO <br /> THE NEXT LEVEL</h1>
          <p>CrossFit courses and certifications are open to individuals and trainers seeking to improve their health and fitness through effective training and nutritional strategies.</p>
          <div className="btn">
            <button>BECOME A TRAINER</button>
            <button>EXPAND YOUR KNOWLEDGE</button>
          </div>
        </div>
      </div>
      <h1 className="articles">SUCCESS STORIES</h1>
      <div className="section-6">
        <div className="block-1">
          <img src={img10} alt="" />
          <h2>Journey Of "Chris bumsted"</h2>
          <p>Chris Bumstead feels like an anomaly: Both a throwback to bodybuilding’s past and a portent of a more promising future for the sport. Bumstead came out of nowhere—well, Canada—to win the classic physique division of the esteemed Pittsburgh Pro contest on May 6, 2017. </p>
          <button className="sec-4-btn">Read more </button>
        </div>
        <div className="block-2">
          <img src={img11} alt="" />
          <h2>List of career achievements by Cristiano Ronaldo</h2>
          <p>Collectively, Ronaldo has won 32 senior trophies in his career. He has also attained one title from youth and at least five titles from friendly competitions. All in all he had won over 300 trophies and medals by January 2021, with some of them dating back to his childhood.</p>
            <button className="sec-4-btn">Read more </button>
        </div>
        <div className="block-3">
          <img src={img12} alt="" />
          <h2>Dipa Karmakar "Gymnast Athlete"</h2>
          <p>Dipa Karmakar (born 9 August 1993)[1] is an Indian Gymnast from Tripura State. She is the first gymnast of India who competed in the Olympics. In her debut 2016 Summer Olympics, in the final she reached till 4th position..</p>
            <button className="sec-4-btn">Read more </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
