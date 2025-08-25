import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  // References for scroll-to navigation sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Hamburger menu logic for mobile/compact navbar
  // Using DOMContentLoaded event - runs once on page load
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
          <img className="VF" src="/src/assets/VF1.png" alt="" />
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
        <a className="cta-btn1" href="https://forms.gle/1GMyDmCBVDTX7yV77">
          Tell Me About You
        </a>
        <a
          className="cta-btn2"
          href="https://ngodonation-e91d7.web.app/main-booking?id=EGQcPoHZmiddJR7D7qhxSa6kL3r2"
        >
          Help in our Vision
        </a>
        <br /> <br /> <br />
        <img
          className="scanner"
          src="/src/assets/Scanner.jpg"
          alt="scan me "
        />
        <p>Scan Me </p>
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
              Imagine MR. RAM, who has a dream like you to have his family,
              society celebrate your nationwide success as soon as possible but
              waiting for the right person to support him. One day he met
              someone like that & the challenge was to gain trust of such
              godfather. Ram could manage to sustain the relation with him and
              continues the learning & working journey together. Ram worked
              hard, harder even Hardest & tasted the success bit by bit,
              everything eventually started falling in his favor due to his
              respect to godfather and his attention and hard work towards work.
              All of sudden he faces much bigger problem but the destiny has
              decided that ram could handle this monster issue alone. Ram
              successfully did the same, now Problems are like a cake for RAM &
              he is enjoying the success every second of his life with
              happiness. The nationwide celebration looks closer.
            </p>
          </div>
          <div className="about-card">
            <h3>The Founding Mind</h3>
            <p className="Mind">
              MR. Rahim started his journey by taking his all personal and
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
            <img className="oneMoment" src="/src/assets/1Moment.png" alt="not able to load image" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              Do you think you want to share about the trouble in clearing a
              transaction with anyone in past. Take 1 moment & share with us.{" "}
              <br />
              Our heartfelt intention is to take you out of that trouble
              absolutely without any cost only by understanding your problem &
              subject better be the part of 1Moment.
            </p>
          </div>

          <div className="blog-card">
            <img className="Empower" src="/src/assets/Empower.png" alt="" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              EMPOWER Giving first is the way to get most! We know somewhere
              every human is powerful and has a special quality which can help
              the others which is of high importance. Let's come forward and
              change the Nation by your strength. We welcome you.
            </p>
          </div>

          <div className="blog-card">
            <img
              className="INDUSTRIP"
              src="/src/assets/INDUSTRIP.png"
              alt=""
            />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              For us creating no Competition is like creating no challenge or
              Fear of failure, Any way it fails! For Sustainable Market synergy
              we share an opportunity to learn about any product by visiting to
              its origin or root place. Come and reach to farmers with an idea
              to learn about its developing process.
            </p>
          </div>
          <div className="blog-card">
            <img
              className="INDUSTRIP"
              src="/src/assets/ALLIANCEPATH.png"
              alt=""
            />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              ALLIANCEPATH All you need is to tie up with the right energetic
              organisation for all your project extention, Who will be seriously
              taking interest on your growth path and making it enjoyable
              journey. We provide here all Trusted and tested connection you can
              trust upon.
            </p>
          </div>
          <div className="blog-card">
            <img className="BCOLLAB" src="/src/assets/BCOLLAB.png" alt="" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              Generally trust is misunderstood by if you can trust someone but
              actually it is other way round correct that if someone trust you
              is called truly trust. Here you can check about any business
              individual's profile to before you trust him and we achive that
              given our in-house network across India.
            </p>
          </div>

          <div className="blog-card">
            <img className="WOM" src="/src/assets/WOM.png" alt="" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              Word of Mouth popularity is the way how you can be trusted by
              someone and is the timeless proven formula for expanding your
              market reach. We Help you here for expanding via an authentic
              source for your Project.
            </p>
          </div>

          <div className="blog-card">
            <img className="BIZWOMEN" src="/src/assets/BIZWOMEN.png" alt="" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              We Believe that business women is double powered as the beauty of
              making money apart from inherent beauty never fades! There is
              nothing like being self dependent for women. We support this as a
              culture to all business family.
            </p>
          </div>

          <div className="blog-card">
            <img className="CULTUREDU" src="/src/assets/CULTUREDU.png" alt="" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              For Us the top subjects are the diverse culture in India. Learning
              that enables us to deal with them no matter whatever project with
              whomever you deal with. Being an Indian Citizen it feels proud to
              have respect for across cultures. University of the same is in
              demand!
            </p>
          </div>

          <div className="blog-card">
            <img className="BCREATIVE" src="/src/assets/BCREATIVE.png" alt="" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              BCREATIIVE Add Wings here to your Idea just by sharing the same.
              Our intention about you fly full on will give you way to support
              your project unbiased. You require someone along the way to walk
              the path without money motives. Pure Satisfaction in seeing your
              Idea taking shape.
            </p>
          </div>

          <div className="blog-card">
            <img className="RELIVEB" src="/src/assets/RELIVEB.png" alt="" />
            <b>
              <span>September 2025</span>
            </b>
            <p>
              Every Project that any dreamer Start has the potential to touch
              the sky but something was not matching/right/fit at that moment so
              she/he moves to explore new one. Let's Figure out the Missed
              Something and Jurk starts to Relive that Project. This time all
              will be right. We are with you.
            </p>
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
