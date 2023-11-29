
import lin from "./../../cvtemplat/cvImage/lin.gif";
import ge from "./../../cvtemplat/cvImage/ge.jpg";
import int from "./../../cvtemplat/cvImage/in.gif";
import tu from "./../../cvtemplat/cvImage/tu.gif";
import bottom from "./../../cvtemplat/cvImage/12.png";
export default function Contact(){
    return(
        <div class="container">
        <div class="box">
             <div class="skill Languages" id="Languages">
          <div class="left">
            <h2><a href="#Box">Languages</a></h2>
            <ul class="skills">
              <li class="main">English</li>
              <li class="bar"><span class="English"></span></li>
              <li class="main">Persian</li>
              <li class="bar"><span class="Persian"></span></li>
          </ul>
          </div>
          <div class="right">
        <h2><a href="#Box">Contact With Me</a></h2>
        <a href="#"><img src={lin} alt=""/></a>
        <a href="https://github.com/ayshahaqdost"><img src={ge} alt=""/></a>
        <a href="https://www.instagram.com/aayy121243/"><img src={int} alt=""/></a>
        <a href="https://x.com/Aysha17175563/status/1621697793441107969?t=MVP8CRQS-LvyA-x0LtCujw&s=35">
          <img src={tu} alt=""/></a>
        <br/><br/><br/>
          <p>And at the bottom of my location 🏠</p>
         <a href="#home"><img src={bottom} alt=""/></a>
          </div>
             </div>  
        </div>
      </div>
    );
};