import "./styles.scss";
import { useState } from "react";

const MainContent = (props) => {
  const contentList = [];
  props.contentText.forEach((item, index) => {
    const idName = props.contentID[index];
    contentList.push(<div id={idName}>{item}</div>);
  });
  return <div className="mainContent">{contentList}</div>;
};

const NavBar = (props) => {
  const list = [];
  props.names.forEach((item, index) => {
    let linksItem = props.links[index];
    list.push(
      <a href={"#" + linksItem}>
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
      <MainContent
        contentText={content.contentText}
        contentID={content.NavBarLinks}
      />
    </div>
  );
};

export default function App() {
  return <TributePage content={CONTENT} />;
}

const CONTENT = {
  contentText: ["tesla is a car", "lorem Ipsum", "lots of money"],
  NavBar: ["elon", "musk", "tesla"],
  NavBarLinks: ["uno", "dos", "tres"],
  name: "elon Musk"
};

const CONTENT2 = {
  contentText: ["apple technology", "lorem Ipsum", "lots of money"],
  NavBar: ["steve", "jobs", "apple"],
  NavBarLinks: ["#testing", "#one", "#two"],
  name: "Steve Jobs"
};
