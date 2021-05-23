import React, { useState } from "react";
import search from "./picture/search.jpg";
import bigSearch from "./picture/bigSearch.png";

import { DefaultStyle, Bar, Logo, Search } from "./uicomponents/uicomponents";
import { useWindowSize } from "./hooks/hooks";
import MainPage from "./pages/mainPage";
import UserPage from './pages/userPage';

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  console.log(data)
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setQuery(value);
  };
  const handleKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      fetch(`https://api.github.com/users/${query}`)
      .then((response) => response.json())
      .then((data) => setData({data: data}))
      .catch((error) => console.log(error))
  };
}
  return (
    <div>
      <DefaultStyle />
      <Bar>
        <Logo width={useWindowSize()}>
          <img src={""} alt="" width="40" height="40" />
        </Logo>
        <Search
          width={useWindowSize()}
          icon={search}
          placeholder="Enter GitHub username"
          type="text"
          name="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </Bar>
      {/* <MainPage icon={bigSearch} /> */}
      {data && <UserPage data={data}/>}
    </div>
	);
}
export default App;