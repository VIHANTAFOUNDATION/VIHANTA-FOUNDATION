import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./App.css";

import Scanner from "./assets/Scanner.jpg";
import OneMoment from "./assets/1Moment.png";
import Empower from "./assets/Empower.png";
import INDUSTRIP from "./assets/INDUSTRIP.png";
import ALLIANCEPATH from "./assets/ALLIANCEPATH.png";
import BCOLLAB from "./assets/BCOLLAB.png";
import WOM from "./assets/WOM.png";
import BIZWOMEN from "./assets/BIZWOMEN.png";
import CULTUREDU from "./assets/CULTUREDU.png";
import BCREATIVE from "./assets/BCREATIVE.png";
import RELIVEB from "./assets/RELIVEB.png";
import logo from "./assets/off_Logo.png";

function App() {
  // References for scroll-to navigation sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
      });
    }
  });

  // Function to smoothly scroll to target section when nav item clicked
  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Reference to the contact form for EmailJS submission
  const formRef = useRef();

  // EmailJS send email handler
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service", // Default Gmail service
        "template_bqxm1mf", // Your EmailJS Template ID
        formRef.current,
        "aUlX7d5Bbv0KdOBra" // Your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Mail sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send. Try again.");
        }
      );
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          <img className="VF" src={logo} alt="" />
          VIHANTA FOUNDATION
        </div>
        <nav>
          <ul>
            <li onClick={() => scrollTo(homeRef)}>Home</li>
            <li onClick={() => scrollTo(aboutRef)}>About</li>
            {/* <li onClick={() => scrollTo(blogRef)}>Ser~vices</li> */}
            <li onClick={() => scrollTo(blogRef)}>Projects</li>
            <li onClick={() => scrollTo(contactRef)}>Contact</li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section className="section home" ref={homeRef}>
        <h1>Welcome to Vihanta Foundation</h1>
        <p>
          <i>Are You from Business Fraternity ?</i> <br />
          One of its kind, first time for well established mind of self
          dependend which can help India grow exponentially to make every Indian
          Proud.
        </p>
        <h1>WHY WE ?</h1>
        <br />
        <br />
        <p>
          First Non Government Organisation not for profit who Address the
          issues of Business Owners. <br />
          If you feel you have some charismatic power to make your life better
          but don't know what is missing & you believe that it can be achieved
          only through your profession, we are waiting for you to approach us.
          We are there with you to achieve that.
        </p>
        {/*         
        <p><a className="cta-btn1" href="https://forms.gle/1GMyDmCBVDTX7yV77">
          Tell Me About You
        </a> <br />
        ( Click Here to Become Foundation Member)</p>

        <a
          className="cta-btn2"
          href="https://ngodonation-e91d7.web.app/main-booking?id=EGQcPoHZmiddJR7D7qhxSa6kL3r2"
          >
          Help in our Vision
        </a>
        <p>
        ( Click here to Explore All our Projects Gallery and Join as Volenteer/Donate)
        </p>  */}
        <div className="button-text-row">
          <div className="column">
            <a
              className="custom-btn"
              href="https://forms.gle/1GMyDmCBVDTX7yV77"
            >
              👉Tell Me About You
            </a>
            <p>( Click Here to Become Foundation Member )</p>
          </div>
          <div className="column">
            <a
              className="custom-btn"
              href="https://ngodonation-e91d7.web.app/main-booking?id=EGQcPoHZmiddJR7D7qhxSa6kL3r2"
            >
              👉Help in our Vision
            </a>
            <p>
              ( Click here to Explore All our Projects Gallery and Join as
              volunteer/Donate )
            </p>
          </div>
        </div>
        <br /> <br /> <br />
        <img className="scanner" src={Scanner} alt="scan me " />
        <p>
          Scan Me <br />{" "}
          <span className="span">
            (Take a screenshot and upload it on Google Lens)
          </span>
        </p>
      </section>

      {/* About Section */}
      <section className="section about" ref={aboutRef}>
        <h2>About Us</h2>
        <p>
          Vihanta Foundation is a non-profit organization focused on business
          issues. Our team works tirelessly to bring meaningful impact to those
          in need.
        </p>
        <div className="about-boxes">
          <div className="about-card">
            <h3>The Story</h3>
            <p>
              Imagine MR. Ram, who has a dream like you to have his family,
              society celebrate your nationwide success as soon as possible but
              waiting for the right person to support him. One day he met
              someone like that & the challenge was to gain the trust of such
              godfather. Ram could manage to sustain the relation with him and
              continued the learning & working journey together. Ram worked
              hard, harder, even Hardest & tasted the success bit by bit,
              everything eventually started falling in his favor due to his
              respect for the godfather and his attention and hard work towards
              work. All of a sudden, he faces much bigger problem but the
              destiny has decided that ram could handle this monster issue
              alone. Ram successfully did the same, now Problems are like a
              piece of cake for RAM & he is enjoying the success every second of
              his life with happiness. The nationwide celebration looks closer.
            </p>
          </div>
          <div className="about-card">
            <h3>The Founding Mind</h3>
            <p className="Mind">
              Mr. Rahim started his journey by making his all personal and
              profession decision by himself only with an idea to become big.
              None other than Rahim wants him to earn big & become powerful.{" "}
              <br />
              If you could relate your life situation to the above, The Founding
              mind will be with you and happy to see you gain respect, Power &
              Money Only By empowering you to become best at your
              work/Profession.
              <br />
              Come forward to reach us, and let's create a like-minded work
              community.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To Empower the self dependent community touch the height of
              success and to be celebrated by millions of like minded group
              across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section blog" ref={blogRef}>
        <b>
          <h2>Our Projects</h2>
        </b>
        <div className="blog-posts">
          <div className="blog-card moment1">
            <img
              className="oneMoment"
              src={OneMoment}
              alt="not able to load image"
            />
            <b>
              <span>JULY 2018</span>
            </b>
            <p>
              Do you think you want to share about the trouble in clearing a
              transaction with anyone in past. Take 1moment & share with us.{" "}
              <br />
              Our heartfelt intention is to help you out of that trouble,
              completely free of cost, simply by understanding your problem and
              subject better as part of 1Moment.
            </p>
            <br />
            {/* <button className="moment"><a href="https://forms.gle/cHZ5S8z6uhgCRkVLA" className="join">PARTICIPATE</a></button>
            <button className="wp"><a href="https://forms.gle/cHZ5S8z6uhgCRkVLA">JOIN</a></button> */}

            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/cHZ5S8z6uhgCRkVLA" className="join">
                  PARTICIPATE
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/IaheXdesHQt7MkQtF60Lte">join</a>
              </button> <br />
            </div>
              <span>Google Form</span><span>   WhatsApp Community</span> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/cHZ5S8z6uhgCRkVLA"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/IaheXdesHQt7MkQtF60Lte"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>




          </div>

          <div className="blog-card">
            <img className="Empower" src={Empower} alt="" />
            <b>
              <span>JANUARY 2019</span>
            </b>
            <p>
              Giving first is the way to gain the most! We believe every person
              has unique power and special qualities that can make a difference.
              Let’s come forward and use our strength to change the nation
              together. We welcome you.
            </p>
            <br />
            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/PTcEFCdFqnLnTdi16" className="join">
                  PARTICIPATE
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/GDDyRM4APLkGYjNWp6o2rC">JOIN</a>
              </button>
              <br />

            </div>
             <span className="but-join">Google Form  WhatsApp Community</span> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/PTcEFCdFqnLnTdi16"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/GDDyRM4APLkGYjNWp6o2rC"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>

          </div>

          <div className="blog-card">
            <img className="INDUSTRIP" src={INDUSTRIP} alt="" />
            <b>
              <span>AUGUST 2020</span>
            </b>
            <p>
              For us creating no Competition is like creating no challenge or
              Fear of failure, any way it fails! For Sustainable Market synergy
              we share an opportunity to learn about any product by visiting to
              its origin or root place. Come and reach to farmers with an idea
              to learn about its developing process.
            </p>
            <br />

            {/* <button className="j-f">
              <a href="https://forms.gle/djYyzFevpX1odLuKA">PARTICIPATE</a>
            </button> */}
            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/djYyzFevpX1odLuKA" className="join">
                  PARTICIPATE 
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/Ftdq8OtAfzJ7EycA6cVZOj">JOIN</a>
              </button>
                            <span>Google Form     WhatsApp Community</span>

            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/djYyzFevpX1odLuKA"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/Ftdq8OtAfzJ7EycA6cVZOj"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>

          </div>
          <div className="blog-card">
            <img className="INDUSTRIP" src={ALLIANCEPATH} alt="" />
            <b>
              <span>MARCH 2018</span>
            </b>
            <p>
              ALLIANCEPATH All you need is to tie up with the right energetic
              organization for all your project extension, Who will be seriously
              taking interest on your growth path and making it enjoyable
              journey. We provide here all Trusted and tested connection you can
              trust upon.
            </p>
            <br />
            {/* <button className="j-f">
              <a href="https://forms.gle/RYV3B4UWZkvyEuG89">PARTICIPATE</a>
            </button> */}

            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/RYV3B4UWZkvyEuG89" className="join">
                  PARTICIPATE Google Form
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/BQhCTH2onLi5O7q2y47hwJ">JOIN WhatsApp Community</a>
              </button>
            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/RYV3B4UWZkvyEuG89"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/BQhCTH2onLi5O7q2y47hwJ"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>
          </div>
          <div className="blog-card">
            <img className="BCOLLAB" src={BCOLLAB} alt="" />
            <b>
              <span>MARCH 2018</span>
            </b>
            <p>
              Generally, trust is misunderstood by if you can trust someone but
              actually it is other way round correct that if someone trust you
              is called truly trust. Here you can check about any business
              individual's profile before you trust him and we achieve that
              given our in-house network across India.
            </p>
            <br />
            {/* <button className="j-f">
              <a href="https://forms.gle/E1w1y3wEHPXaTA7P6">PARTICIPATE</a>
            </button> */}
            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/E1w1y3wEHPXaTA7P6" className="join">
                  PARTICIPATE Google Form
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/IeFZwgwhc6nDX1hLnJ9c7I">JOIN WhatsApp Community</a>
              </button>
            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/E1w1y3wEHPXaTA7P6"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/IeFZwgwhc6nDX1hLnJ9c7I"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>

          </div>

          <div className="blog-card">
            <img className="WOM" src={WOM} alt="" />
            <b>
              <span>APRIL 2020</span>
            </b>
            <p>
              Word of Mouth popularity is the way how you can be trusted by
              someone and is the timeless proven formula for expanding your
              market reach. We Help you here for expanding via an authentic
              source for your Project.
            </p>
            <br />
            {/* <button className="j-f">
              <a href="https://forms.gle/ayRiZVVskiGZbVkv6">PARTICIPATE</a>
            </button> */}
            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/ayRiZVVskiGZbVkv6" className="join">
                  PARTICIPATE
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/H07KaKtgi1f78Ctv2XwHGf">JOIN WhatsApp Community</a>
              </button>
            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/ayRiZVVskiGZbVkv6"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/H07KaKtgi1f78Ctv2XwHGf"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>

          </div>

          <div className="blog-card">
            <img className="BIZWOMEN" src={BIZWOMEN} alt="" />
            <b>
              <span>JANUARY 2021</span>
            </b>
            <p>
              We Believe that businesswoman is double powered as the beauty of
              making money apart from inherent beauty never fades! There is
              nothing like being self dependent for women. We support this as a
              culture to all business family.
            </p>
            <br />
            {/* <button className="j-f">
              <a href="https://forms.gle/etPZY6T5SUicRuBF6">PARTICIPATE</a>
            </button> */}
            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/etPZY6T5SUicRuBF6" className="join">
                  PARTICIPATE Google Form
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/BFe4JzV0Fd22sLzgz9AbAW">JOIN WhatsApp Community</a>
              </button>
            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/etPZY6T5SUicRuBF6"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/BFe4JzV0Fd22sLzgz9AbAW"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>

          </div>

          <div className="blog-card">
            <img className="CULTUREDU" src={CULTUREDU} alt="" />
            <b>
              <span>MARCH 2019</span>
            </b>
            <p>
              For Us the top subjects are the diverse culture in India. Learning
              that enables us to deal with them no matter whatever project with
              whomever you deal with. Being an Indian Citizen it feels proud to
              have respect for across cultures. University of the same is in
              demand!
            </p>
            <br />
            {/* <button className="j-f">
              <a href="https://forms.gle/QpQrv57oaje1Ptw39">PARTICIPATE</a>
            </button> */}
            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/QpQrv57oaje1Ptw39" className="join">
                  PARTICIPATE Google Form
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/EXucULhGLApHIY28nd8bhk">JOIN WhatsApp Community</a>
              </button>
            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/QpQrv57oaje1Ptw39"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/EXucULhGLApHIY28nd8bhk"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>

          </div>

          <div className="blog-card">
            <img className="BCREATIVE" src={BCREATIVE} alt="" />
            <b>
              <span>NOVEMBER 2017</span>
            </b>
            <p>
              BCREATIVE Add Wings here to your Idea just by sharing the same.
              Our intention about you fly full on will give you way to support
              your project unbiased. You require someone along the way to walk
              the path without money motives. Pure Satisfaction in seeing your
              Idea taking shape.
            </p>
            <br />
            {/* <button className="j-f">
              <a
                href="https://forms.gle/3s5FgD1C96xvcjjT8
            "
              >
                PARTICIPATE
              </a>
            </button> */}
            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/3s5FgD1C96xvcjjT8" className="join">
                  PARTICIPATE Google Form
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/JfnOLS6jl97Gh2RxacwtfP">JOIN WhatsApp Community</a>
              </button>
            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/3s5FgD1C96xvcjjT8"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/JfnOLS6jl97Gh2RxacwtfP"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>


          </div>

          <div className="blog-card">
            <img className="RELIVEB" src={RELIVEB} alt="" />
            <b>
              <span>DECEMBER 2020</span>
            </b>
            <p>
              Every Project that any dreamer Start has the potential to touch
              the sky but something was not matching/right/fit at that moment so
              she/he moves to explore new one. Let's Figure out the Missed
              Something and Jerk starts to revive that Project. This time all
              will be right. We are with you.
            </p>
            <br />
            {/* <button className="j-f">
              <a href="https://forms.gle/4WxYinyC24WQa9FM7">PARTICIPATE</a>
            </button> */}

            {/* <div className="button-container">
              <button className="moment">
                <a href="https://forms.gle/4WxYinyC24WQa9FM7" className="join">
                  PARTICIPATE Google Form
                </a>
              </button>
              <button className="wp">
                <a href="https://chat.whatsapp.com/F8XTjHvMEoBAy1X0hPg94Q">JOIN WhatsApp Community</a>
              </button>
            </div> */}

            <div className="cta-buttons">
              <div className="cta-with-text">
                <a
                  href="https://forms.gle/4WxYinyC24WQa9FM7"
                  className="cta-btn1"
                  target="_blank"
                  rel="noopener noreferrer"
                >PARTICIPATE</a>
                <div className="cta-subtext1">Google Form</div>
              </div>
              <div className="cta-with-text">
                <a
                  href="https://chat.whatsapp.com/F8XTjHvMEoBAy1X0hPg94Q"
                  className="cta-btn2"
                  target="_blank"
                  rel="noopener noreferrer"
                >JOIN</a>
                <div className="cta-subtext2">WhatsApp community</div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Contact Section with form */}
      <section className="section contact" ref={contactRef}>
        <h2>Contact Us</h2>
        <form
          className="contact-form"
          autoComplete="off"
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" name="message" required />
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-details">
          <p>Email: vihantafoundation@gmail.com</p>
          <p>Phone: +91 9867679750</p>
        </div>
      </section>
      <div className="terms">
        <h3>Terms and Condition</h3>
        <h5>
         - By accessing this website and making a donation to VIHANTA FOUNDATION, donors agree to the following terms: <br />
         - All donations are voluntary and will be used for the charitable objectives and projects of VIHANTA FOUNDATION. <br />
         - Donors confirm that all funds offered are from lawful sources and that the donations are non-refundable. <br />
         - Tax exemption is available only if VIHANTA FOUNDATION holds the necessary government certification; donors must provide correct details for receipts and benefits. <br />
         - VIHANTA FOUNDATION pledges that all funds will be utilized in line with its mission and will not be used for unlawful purposes. <br />
         - Donors may receive donation receipts or acknowledgment, but no goods or services of commercial value are provided in return. <br />
         - The foundation reserves the right to update or amend these terms. Continued use of the donation facilities constitutes acceptance of any changes. <br />
         - Any dispute arising from donations shall be subject to the jurisdiction of Mumbai.</h5>
        <br />
        <h3 className="pvc">Privacy Policy </h3>
        <h5>
          - VIHANTA FOUNDATION values the privacy of its donors and website visitors. This notice describes our personal data handling practices: <br />
          - Information such as donor name, contact information, and transaction details is collected only for processing donations, recordkeeping, and issuing receipts. <br />
          - Personal data is not shared or sold to third parties except as required for legal compliance, auditing, or enabling payment gateways. <br />
          - Payment-related data is secured and processed via certified payment gateways; VIHANTA FOUNDATION does not store card or sensitive banking details. <br />
          - Donors can request updates or corrections to their information at any time by contacting Email: vihantafoundation@gmail.com <br />
          - Website cookies and analytics tools may be used for site monitoring and improvement; no sensitive personal data is collected through these means. <br />
          - The foundation does not knowingly collect information from children or minors. <br />
          - This policy may be updated; updated versions will be posted on this page.</h5>
        <br />
        <h3>Return and refund policy</h3>
        <h4 className="rfp">We do not have any return and refund policy as we are functioning as not for profit.</h4>

      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Vihanta Foundation. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
