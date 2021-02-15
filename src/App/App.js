import { useState } from "react";
import styles from "./App.module.scss";

const ThirdPlan = ({ title, pos }) => {
  const style = {
    left: pos.cX - pos.posX / 20,
    top: pos.cY - pos.posY / 20,
    transform: `
      translate(-50%, -50%) 
      rotate3d(0, 1, 0, ${(pos.posX / pos.cX) * 10}deg)
      rotate3d(-1, 0, 0, ${(pos.posY / pos.cY) * 10}deg)
    `,
  };
  return (
    <div className={styles.third} style={style}>
      <p>{title}</p>
    </div>
  );
};
const SecondPlan = ({ title, offset, pos }) => {
  const Q = 7;
  const style = {
    left: pos.cX + offset.X - pos.posX / Q,
    top: pos.cY + offset.Y - pos.posY / Q,
  };
  return (
    <div className={styles.second} style={style}>
      <p>{title}</p>
    </div>
  );
};

const App = () => {
  const initialPos = {
    cX: window.innerWidth / 2,
    cY: window.innerHeight / 2,
    posX: 0,
    posY: 0,
  };
  const centerDistance = 0.65;

  const [pos, setPos] = useState(initialPos);

  const mouseHandler = (e) => {
    const mouse = {
      cX: window.innerWidth / 2,
      cY: window.innerHeight / 2,
      posX: e.pageX - window.innerWidth / 2,
      posY: e.pageY - window.innerHeight / 2,
    };
    setPos(mouse);
  };

  return (
    <div className={styles.container} onMouseMove={mouseHandler}>
      <SecondPlan
        title="2ndPlan"
        offset={{
          X: -initialPos.cX * centerDistance,
          Y: -initialPos.cY * centerDistance,
        }}
        pos={pos}
      />
      <SecondPlan
        title="2ndPlan"
        offset={{
          X: initialPos.cX * centerDistance,
          Y: -initialPos.cY * centerDistance,
        }}
        pos={pos}
      />
      <SecondPlan
        title="2ndPlan"
        offset={{
          X: -initialPos.cX * centerDistance,
          Y: initialPos.cY * centerDistance,
        }}
        pos={pos}
      />
      <SecondPlan
        title="2ndPlan"
        offset={{
          X: initialPos.cX * centerDistance,
          Y: initialPos.cY * centerDistance,
        }}
        pos={pos}
      />
      <ThirdPlan title="3DMenu" pos={pos} />
    </div>
  );
};

export default App;
