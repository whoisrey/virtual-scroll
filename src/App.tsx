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
  }) => <div style={{ ...style, ...rowStyle }}>Row #{index}</div>;

  return (
    <div style={appContainerStyle}>
      <h2 style={headingStyle}>🧪 Virtual Scroll</h2>
      <div style={listWrapperStyle}>
        <List
          height={600}
          itemCount={itemCount}
          itemSize={itemHeight}
          width={400}
        >
          {Row}
        </List>
      </div>
    </div>
  );
}

export default App;

const appContainerStyle: React.CSSProperties = {
  height: "100vh",
  width: "100vw",
  background: "#f5f5f5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  boxSizing: "border-box",
};

const headingStyle: React.CSSProperties = {
  marginBottom: "1rem",
  fontFamily: "sans-serif",
  color: "#333",
};

const listWrapperStyle: React.CSSProperties = {
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: "#fff",
};

const rowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "0 1rem",
  borderBottom: "1px solid #eee",
  fontFamily: "monospace",
  fontSize: "14px",
  transition: "background 0.2s ease",
  cursor: "pointer",
  backgroundColor: "#fff",
};
