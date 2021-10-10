import React from "react";
import { useParams } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import { ClassicBlock } from "../../components/ClassicBlock/ClassicBlock";

export const Home = () => {
  let { id } = useParams();

  return (
    <div>
      Bonjour
      <Hero
        subcomponent={() => {
          return (
            <ClassicBlock
              title="おはようございます"
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et id autem repudiandae adipisci nesciunt repellendus earum magni, rerum nulla! Non."
              btnText="click me!"
            />
          );
        }}
      />
    </div>
  );
};
