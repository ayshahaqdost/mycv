import AboutMe from "./AboutMe";
import Button from "./button";
import Contact from "./Contact";
import Education from "./Education";
import "./newcv.css";
import Skill from "./Skill";
import Location from "./Location";
export default function Header(){
    return( <div>
        <div className="container">
            <div className="box" id="Box">
            <div className="page_on">
        <div className="n">
        </div></div>
      <div className="page_in">
        <div className="page_1_item">
          <a id="m" href="#me">About Me</a>
        </div>
        <div className="page_1_item m">
        <a href="#Project">Education</a>
        </div>
        <div className="page_1_item m">
        <a href="#Skill">Skills</a>
        </div>
        <div className="page_1_item">
          <a href="#Languages">Contact</a>
        </div></div>
      <Button></Button>
    </div></div>
<AboutMe></AboutMe>
<Education></Education>
<Skill></Skill>
<Contact></Contact>
<Location></Location>
</div>);};