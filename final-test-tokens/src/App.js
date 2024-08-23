import "./App.scss";
import "./scss/index.scss";

function App() {
  return (
    <div>
      <div className="chakri">
        <h1 className="title_xl ">
          The quick brown fox jumps over the lazy dog
        </h1>
        <h1 className="content_m_strong ">
          The quick brown fox jumps over the lazy dog
        </h1>
        <h1 className="link_m_regular ">
          The quick brown fox jumps over the lazy dog
        </h1>
        <h1 className="monospace_m ">
          The quick brown fox jumps over the lazy dog
        </h1>
      </div>

      <div className="test">
        <h1>test color</h1>
      </div>
      <div className="test-1">
        <h1>test color-1</h1>
      </div>
      <div className="test-2">
        <h1>test color-2</h1>
      </div>
    </div>
  );
}

export default App;
