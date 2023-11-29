
import "./newcv.css";
export default function Location(){
    return(
        <div className="container">
        <div className="box">
          <div className="skill">
            <div className="left">
               <form action="" method="get">
                <input type="text" name="name" placeholder="name"/>
                <input type="text" name="phon" placeholder="phon numder"/><br/>
                <input class="empte" name="email" type="email" placeholder="Email"/>
                <textarea name="Message" placeholder="your Message" id="" cols="30" rows="13"></textarea>
                <input class="empte" type="submit"/>
              </form> 
            </div>
            <div class="right">
              <h2><a  id="home" href="#Languages">my Location</a></h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3293.595054485101!2d62.20906642446942!3d34.
                36078277304243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f3ce7dd418775ff%3A0x9da4ffef37cb3d0a!
                2z2YXYs9is2K8g2KzYp9mF2Lkg2KjYp9i6INin2LPZhNin2YXbjA!5e0!3m2!1sfa!2s!4v1701068819830!5m2!1sfa!2s"
                width="400" height="300" style={{border:"0", allowfullscreen:"", loading:"lazy",
                referrerpolicy:"no-referrer-when-downgrade", title:"google Maps"}}></iframe>
            </div>
          </div>
        </div>
      </div>    

    );
}