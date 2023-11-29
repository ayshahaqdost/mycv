
import About from "./../../cvtemplat/cvImage/2.jpg";
export default function AboutMe(){
    return(
        <div className="container">
    <div className="box">
      <div className="about_Me" id="me">
        <div className="left">
          <h1><a href="#Box"> Hi, I am Aysha</a></h1>
          <h3>Full Stack Web Developer</h3>
          <p>I am a web developer, I study web in Cti, Until now i do not have a work experience, but i
            work very hard, becaues I want to become a freeLancer in the Future.</p>
        </div>
        <div className="right">
          <img src={About} alt=""/>
        </div>
      </div>
    </div>
  </div>
    );
};