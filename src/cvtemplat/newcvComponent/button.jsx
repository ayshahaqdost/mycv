
import bottom from "./../../cvtemplat/cvImage/12.png";
export default function Button(){
    function handelHide(){
        const page_on=document.querySelector(".page_on");
        if(getComputedStyle(page_on).display === "none"){
            page_on.style.display = "inline";
           }
           else{
            page_on.style.display = "none"
           }
        }
           function handelHidepage(){
            const page_in=document.querySelector(".page_in");
            if(getComputedStyle(page_in).display === "none"){ 
                page_in.style.display = "flex";
                }
                else{
                    page_in.style.display = "none"
                }
            }
    return(
        <div className="blue_cv">
        <div className="cv">
        <h1>RESUME
              <br/>/Cv</h1>
                <p>if you want to see my Cv click in here</p>
                <img src={bottom} alt=""/>
              <a onClick={() => {handelHide();handelHidepage();}}  href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  MY CV
              </a>
              </div></div>);};