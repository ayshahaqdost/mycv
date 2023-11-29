
import pp from "./../../cvtemplat/cvImage/p.png";
import pp2 from "./../../cvtemplat/cvImage/p2.jpg";
import ppp3 from "./../../cvtemplat/cvImage/p3.jpg";
export default function Education(){
    return(
        <div className="container">
    <div className="box">
      <div className="skill project" id="Project">
        <div className="left">
          <h2> <a href="#Box">Educational records</a></h2>
          <p>in 2022, after the cancore exam I was accepted to the Computer Science in University of Herat, after that i
            styde web in Code To Inspire (CTI), Fortunately I finished the web, and now I am a Full Stack Web Developer.</p>
        </div>
        <div className="right">
           <h2>Projects</h2>
        <img src={pp} alt=""/>
        <img src={pp2} alt=""/>
        <img src={ppp3} alt=""/>
        </div>
      </div>
    </div>
  </div>
    );
};