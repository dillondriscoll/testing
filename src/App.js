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
        <h1> {content.name} </h1>
      </div>
    </div>
  );
}
function TributePage({ content }) {
  return (
    <div>
      <HeadBox content={content} />
    </div>
  );
}
export default function App() {
  return <TributePage content={CONTENT} />;
}

const CONTENT = {
  name: "elon Musk",
  sliders: ["lorem ipsum", "ipsum lorem", "testing 12345 testing"]
};
