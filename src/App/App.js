import { useState } from "react";
import { menuContent } from "./config";
import Menu from "./Menu/Menu";
import styles from "./App.module.scss";
import bg from "../Assets/Image/bg.jpg";

const ThirdPlan = ({ pos }) => {
  const Q = 20; // rate of parallax movement
  const style = {
    left: pos.cX + pos.posX / Q,
    top: pos.cY + pos.posY / Q,
    transform: `
      translate(-50%, -50%)
      rotate3d(0, 1, 0, ${(pos.posX / pos.cX) * 8}deg)
      rotate3d(-1, 0, 0, ${(pos.posY / pos.cY) * 8}deg)
    `,
  };
  return (
    <div className={styles.third} style={style}>
      <img src={bg} alt="background" />
    </div>
  );
};
const SecondPlan = ({ title, pos }) => {
  const style = {
    left: pos.cX,
    top: pos.cY,
    transform: `
      translate(-50%, -50%) 
      rotate3d(0, 1, 0, ${(pos.posX / pos.cX) * 8}deg)
      rotate3d(-1, 0, 0, ${(pos.posY / pos.cY) * 8}deg)
    `,
  };
  return (
    <div className={styles.second} style={style}>
      <p>{title}</p>
    </div>
  );
};
const FirstPlan = ({ offset, pos, menu }) => {
  const Q = 14; // rate of parallax movement
  const style = {
    left: pos.cX + offset.X - pos.posX / Q,
    top: pos.cY + offset.Y - pos.posY / Q,
  };
  return (
    <div className={styles.first} style={style}>
      <Menu title={menu.title} menu={menu} />
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
  const centerDistanceX = 0.5;
  const centerDistanceY = 0.62;

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
      <ThirdPlan pos={pos} />
      <SecondPlan title="3DMenu" pos={pos} />
      <FirstPlan
        offset={{
          X: -initialPos.cX * centerDistanceX,
          Y: -initialPos.cY * centerDistanceY,
        }}
        pos={pos}
        menu={menuContent.menu1}
      />
      <FirstPlan
        offset={{
          X: initialPos.cX * centerDistanceX,
          Y: -initialPos.cY * centerDistanceY,
        }}
        pos={pos}
        menu={menuContent.menu2}
      />
      <FirstPlan
        offset={{
          X: -initialPos.cX * centerDistanceX,
          Y: initialPos.cY * centerDistanceY * 0.7,
        }}
        pos={pos}
        menu={menuContent.menu3}
      />
      <FirstPlan
        offset={{
          X: initialPos.cX * centerDistanceX,
          Y: initialPos.cY * centerDistanceY * 0.7,
        }}
        pos={pos}
        menu={menuContent.menu4}
      />
    </div>
  );
};

export default App;
