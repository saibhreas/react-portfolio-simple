import React from 'react';
//import '../App.css';
import lilogo from '../img/174857.png';
import ghlogo from '../img/Giticon.png';
import qrcodeimg from '../img/qr.png';


export default function Contact() {
  return (
    <main>
        <div id="contact">
            <h2>- Contact -</h2>
            <div id="contact-form">
              <form>
                <div>
                  <label htmlFor="name">Name:</label>
                  <br />
                  <input type="text" id="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input type="email" id="email" required />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <br />
                  <textarea id="message" required />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
            <ul className="contact-info">
                <h4>Or feel free to contact me by:</h4>
                <li>Phone: (555) 555-1212</li>
                <li>Email: <span id="email">sr@saibhreas.com</span></li>
                <li className="icon" id="linkedin"><a href="https://www.linkedin.com/in/siobhanknuttel?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BJa4vjWRQBqluy0ANqmh9Q%3D%3D" target="_blank"><img src={lilogo} alt="linked in icon" width="30" height="30" /></a></li>
                <li className="icon" id="github"><a href="https://github.com/saibhreas" target="_blank"><img src={ghlogo} alt="github icon" width="30" height="30" /></a><img src={qrcodeimg} alt="Qr Code for Social Media" width="30" height="30" /></li>
                
            </ul>
        </div>
    </main>
  );
}
