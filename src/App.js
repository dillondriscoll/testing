import "./styles.scss";
import { useState } from "react";
import { render } from "sass";

const NavBar = ({ content }) => {
  console.log(content);
  let list = [];
  content.forEach((item) => {
    list.push(<li>{item}</li>);
  });

  return <div className="NavBar">{list}</div>;
};

const HeadBox = ({ content }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="HeadBox">
      <div className="hbox-1">
        <a href="#" onClick={() => setVisible(!visible)}>
          <img
            alt="placeholder"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Feedbin-Icon-menu.svg"
          />
        </a>
      </div>
      <div className="hbox-2">
        <h1> {content.name} </h1>
        {visible && (
          <div>
            <NavBar content={content.NavBar} />
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
