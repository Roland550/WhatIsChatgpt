import React from "react";
import "./whatGPT4.css";
import { Feature } from "../../components";
const WhatGPT4 = () => {
  return (
    <div className="gpt4_whatgpt4  section_margin">
      <div className="gpt4_whatgpt4-feature">
        <Feature
          title="What is GPT-4"
          text="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus"
        />
      </div>
      <div className="gpt4_whatgpt4-heading">
        <h1 className="gradient_text">
          The possibility are beyong your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt4_whatgpt4-container" id="wgpt4">
        <Feature
          title="Chatbots"
          text="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus"
        />
        <Feature
          title="Education"
          text="Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus"
        />
      </div>
    </div>
  );
};

export default WhatGPT4;
