import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";

interface F3CardProps {
  Pin_Title: string;
  Img_Source: string;
}

const F3Card: React.FC<F3CardProps> = ({
  Pin_Title,
  Img_Source,
}) => {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <div>
        <PinContainer title={Pin_Title}>
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <Image
              src={Img_Source}
              width={400}
              height={400}
              alt="Logo"
            />
            <div className="flex flex-1 w-full mt-4 bg-gradient-to-br from-blue-300 via-blue-700 to-blue-500" />
          </div>
        </PinContainer>
      </div>
    </div>
  );
};

export default F3Card;