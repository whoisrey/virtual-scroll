import { FixedSizeList as List } from "react-window";
import "./App.css";

const itemCount = 10000;
const itemHeight = 35;

function App() {
  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => <div style={style}>Row #{index}</div>;

  return (
    <div style={{ width: "100%", height: "100vh", padding: "2rem" }}>
      <h2>🧪 Virtual Scroll 실습 (react-window)</h2>
      <List
        height={500}
        itemCount={itemCount}
        itemSize={itemHeight}
        width={300}
      >
        {Row}
      </List>
    </div>
  );
}

export default App;
