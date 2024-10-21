import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={ulStyle}>
          <li style={liStyle}>Photography Portfolio</li>
          <li style={liStyle}>Sunset Pictures</li>
        </ul>
      </nav>
    </header>
  );
}
const headerStyle: React.CSSProperties = {
  padding: "10px 20px",
  backgroundColor: "#222",
  color: "#fff",
  textAlign: "center",
};

const ulStyle: React.CSSProperties = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
  padding: "0",
};

const liStyle: React.CSSProperties = {
  margin: "0 15px",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
};
