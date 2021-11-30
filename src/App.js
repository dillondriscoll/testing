import "./styles.scss";

function HeadBox({ content }) {
  return (
    <div>
      <div class="hbox-1">
        <img
          alt="placeholder"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Feedbin-Icon-menu.svg"
        />
      </div>
      <div class="hbox-2">
        <h1> content.name </h1>
      </div>
    </div>
  );
}
function tributePage({ content }) {
  return <HeadBox content={content} />;
}
export default function App() {
  return (
    <div className="App">
      <div class="headbox-1">
        <div class="box-1">
          <img
            alt="placeholder"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Feedbin-Icon-menu.svg"
          />
        </div>
        <div class="box-2">
          <h1>Hello</h1>
        </div>
      </div>

      <div class="sliderbar">
        <div class="sbox-1"></div>
      </div>
      <div class="main content"></div>
      <div class="footer"></div>
    </div>
  );
}

const content = { name: "elon Musk" };
