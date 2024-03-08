import React from "react";
import F3Card from "./F3Card"; 

const F3Container: React.FC = () => {
  const cardData = [
    {
      Pin_Title: "Fun",
      Pin_Href: "/404",
      Display_Title: "Fun",
      Img_Source: "/IMG/Fun.png",
    },
    {
      Pin_Title: "Functional",
      Pin_Href: "/404",
      Display_Title: "Functional",
      Img_Source: "/IMG/Functional.png",
    },
    {
      Pin_Title: "Fully Equipped",
      Pin_Href: "/404",
      Display_Title: "Fully Equipped",
      Img_Source: "/IMG/Fully_Equiped.png",
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