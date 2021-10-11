import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { ClassicBlock } from "../../components/ClassicBlock/ClassicBlock";

export const Home = (props) => {

  return (
    <div>
      Bonjour, {props.isAuth ? "vous êtes connecté." : "vous n'êtes pas connecté."}
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
