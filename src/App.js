import "./styles.scss";
import { useState } from "react";

const MainContent = (props) => {
  const contentList = [];
  props.contentText.forEach((item, index) => {
    const contentImage = props.contentImage[index];

    const idName = props.contentID[index];
    if (contentImage) {
      contentList.push(
        <div id={idName}>
          <img src={contentImage} alt="test"></img>
          <br />
          {item}
        </div>
      );
    } else {
      contentList.push(<div id={idName}>{item}</div>);
    }
  });
  return <div className="mainContent">{contentList}</div>;
};

const NavBar = (props) => {
  const [visible, setVisible] = useState(false);
  const list = [];

  props.names.forEach((item, index) => {
    let linksItem = props.links[index];
    list.push(
      <a href={"#" + linksItem}>
        <li key={item}>{item}</li>
      </a>
    );
  });

  return (
    <div className="NavBar">
      <button onClick={() => setVisible(!visible)}>
        <img
          alt="placeholder"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Feedbin-Icon-menu.svg"
        />
      </button>
      {visible && <div>{list}</div>}
    </div>
  );
};

const HeadBox = (props) => {
  return (
    <div className="HeadBox">
      <div className="hbox-1"></div>
      <div className="hbox-2">
        <h1> {props.name} </h1>
      </div>
    </div>
  );
};

const TributePage = ({ content }) => {
  return (
    <div>
      <NavBar links={content.NavBarLinks} names={content.NavBar} />

      <HeadBox name={content.name} />

      <MainContent
        contentText={content.contentText}
        contentID={content.NavBarLinks}
        contentImage={content.contentImages}
      />
    </div>
  );
};

export default function App() {
  return <TributePage content={CONTENT} />;
}

// Pages are dynamically generated based on which object is used for props.
//contentText,NavBar,NavBarLinks, and contentImage should all have the same length and be arrays

const CONTENT = {
  contentImages: ["images/musk1.jpg", "images/tesla.jpg"],
  contentText: ["tesla is a car", "lorem Ipsum", "lots of money"],
  NavBar: ["elon", "musk", "tesla"],
  NavBarLinks: ["uno", "dos", "tres"],
  name: "elon Musk"
};

const CONTENT2 = {
  contentText: ["apple technology", "lorem Ipsum", "lots of money"],
  NavBar: ["steve", "jobs", "apple"],
  NavBarLinks: ["testing", "one", "two"],
  name: "Steve Jobs"
};
