/* import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<h1 className="h1">Hello My name is Kushal</h1>);
 */

// challenge 1
import React from "react";
import "./styles.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

let greeting = "NULL";
let alias = "NULL";
const time = new Date();
const currentTime = time.getHours();
const costomColor = {
  color: ""
};
if (currentTime < 12) {
  greeting = "Good Morning";
  costomColor.color = "Blue";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  costomColor.color = "Red";
} else {
  greeting = "Good night";
  costomColor.color = "Green";
}
if (currentTime > 12) {
  alias = "pm";
} else {
  alias = "am";
}

root.render(
  <h1 className="heading" style={costomColor}>
    its {currentTime - 12} {alias} so {greeting}
  </h1>
);
