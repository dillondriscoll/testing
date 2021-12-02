import "./styles.scss";
import { useState } from "react";

const NavBar = (props) => {
  const list = [];
  props.names.forEach((item, index) => {
    let linksItem = props.links[index];
    list.push(
      <a href={linksItem}>
        <li key={item}>{item}</li>
      </a>
    );
  });

  return <div className="NavBar">{list}</div>;
};

const HeadBox = ({ content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="HeadBox">
      <div className="hbox-1">
        <button onClick={() => setVisible(!visible)}>
          <img
            alt="placeholder"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Feedbin-Icon-menu.svg"
          />
        </button>
      </div>
      <div className="hbox-2">
        <h1> {content.name} </h1>
        {visible && (
          <div>
            <NavBar names={content.NavBar} links={content.NavBarLinks} />
          </div>
        )}
      </div>
    </div>
  );
};

const TributePage = ({ content }) => {
  return (
    <div>
      <HeadBox content={content} />
    </div>
  );
};

export default function App() {
  return <TributePage content={CONTENT} />;
}

const CONTENT = {
  NavBar: ["uno", "dos", "tres"],
  NavBarLinks: ["#uno", "#dos", "#tres"],
  name: "elon Musk"
};
