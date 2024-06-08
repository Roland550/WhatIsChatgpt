import React from "react";
import "./feature.css";
import { feature } from "../../components";


const featureData = [
  {
    title: "Improving and distrusts instantly",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus",
  },
  {
    title: "Become the tended active",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus",
  },
  {
    title: "Message or am nothing",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus",
  },
  {
    title: "Really boy law county",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Esse Quod Unde Eius Voluptas Dolorem Eos Asperiores, Cumque Facere Necessitatibus",
  },
];

const Feature = () => {
  return (
    <div className="gpt4_features section_padding" id="features">
      <div className="pgt4_features-heading">
        <h1 className="gradient_text">
          The future is now there and you just nedd to realisze it. Step into
          future today & make it happen
        </h1>
        <p>Request Early Access to get Started</p>
      </div>
      <div className="gpt3_features-container">
        {featureData.map((item,index)=>(
          <feature />
        ))

        }
      </div>
    </div>
  );
};

export default Feature;
