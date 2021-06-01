import React, { useState, Suspense } from "react";
import search from "./picture/search.jpg";
import bigSearch from "./picture/bigSearch.png";

import { DefaultStyle, Bar, Logo, Search, Main, MainBigSearch, MainDefaultText } from "./uicomponents/uicomponents";
import { useWindowSize, getData } from "./utils/utils";

const LoadUserPage = React.lazy(() => import("./pages/userPage"))

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState();
  const fn = () => {
    window.open("./userPage.jsx")
  
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setQuery(value);
  };

  const handleKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 13) {
      setData(getData(query))
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
      {data ?
        (
          <Suspense fallback={<div>... Load</div>}>
            <LoadUserPage data={data} fn={fn}/>
          </Suspense>
        ) : (
          <div>
            <Main>
              <MainBigSearch icon={bigSearch} />
              <MainDefaultText>Start with searching<br /> a GitHub user</MainDefaultText>
            </Main>
          </div>
        )}
    </div>
  );
}
export default App;