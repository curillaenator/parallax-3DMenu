import { useState } from "react";
import styles from "./menu.module.scss";

const MenuItem = (props) => {
  if (/^menu*/.test(props.title))
    return (
      <div
        className={`${styles.item}`}
        onClick={props.handler}
      >
        {props.title}
      </div>
    );
  return <button className={styles.button}>{props.title}</button>;
};

const Menu = (props) => {
  const [show, setShow] = useState(false);
  const menuHandler = () => setShow(!show);
  return (
    <div className={styles.menu}>
      <MenuItem title={props.title} handler={menuHandler} show={show} />
      {show && (
        <div className={styles.buttons}>
          {Object.keys(props.menu.items).map((item) => (
            <MenuItem title={props.menu.items[item]} key={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Menu;
