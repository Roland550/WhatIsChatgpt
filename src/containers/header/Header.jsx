import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt4_header section_padding" id="home">
      <div className="gpt4_header-content">
        <h1 className="gradient_text">
          Let's Build Something amazing with GPT-4 Open Al
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quod
          unde eius voluptas dolorem eos asperiores, cumque facere
          necessitatibus, harum quia debitis officiis. Nulla molestiae qui,
        </p>
        <div className="gpt4_header-content_input">
          <input type="email" name="" id="" placeholder="Your email" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt4_header-content_people">
          <img src={people} alt="" />
          <p>1,3000 peope requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt4_header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
