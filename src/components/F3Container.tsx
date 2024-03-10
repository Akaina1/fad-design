import React from "react";
import F3Card from "./F3Card"; 

const F3Container: React.FC = () => {
  const cardData = [
    {
      Pin_Title: "Unique and exciting designs that will attract consumers.  Our websites are meant to be an experience that people will search out for.",
      Display_Title: "Fun",
      Img_Source: "/IMG/Fun_2.png",
    },
    {
      Pin_Title: "Highly interactive sites that will engage your audience and drive them to your business. This will be a new standard for advertisements",
      Display_Title: "Functional",
      Img_Source: "/IMG/Functional_2.png",
    },
    {
      Pin_Title: "Our websites are guaranteed to be the best in the industry.  We back this up with 1 year of support for every project.",
      Display_Title: "Fully Equipped",
      Img_Source: "/IMG/Fully_Equipped_2.png",
    },
  ];

  return (
    <div className="flex justify-between">
      {cardData.map((card, index) => (
        <F3Card key={index} {...card} />
      ))}
    </div>
  );
};

export default F3Container;