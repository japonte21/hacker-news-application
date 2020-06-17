import * as React from "react";
import "./App.css";
import Stories from "./Stories";
import SearchStories from "./SearchStories";

export const App: React.FC = () => (
  <div className="app">
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontStyle: "italic",
      }}
    >
      Search a topic to get stories shared on Hacker News
    </div>
    &nbsp;
    <div className="interactions">
      <SearchStories />
    </div>
    <Stories />
  </div>
);
