import React, { createRef, useEffect, useState } from "react";

import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import PageTitle from "./Components/PageTitle";
import Stats from "./Components/Stats/Stats";
import Widget from "./Components/Widget";

export default function App() {
  const statsRef = createRef();
  const [sideBarOpened, setSideBarOpened] = useState(true);

  const randomize = () => {
    statsRef.current.randomize();
  };

  useEffect(() => {
    // Close sidebar on mobile and open on desktop
    const onResize = () => {
      const width = document.documentElement.clientWidth;
      setSideBarOpened(width > 500);
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, [setSideBarOpened]);

  return (
    <div id="wrapper">
      <SideBar opened={sideBarOpened} />
      <div id="content-wrapper" className="d-flex flex-column">
        <TopBar onToggleSideBar={() => setSideBarOpened(!sideBarOpened)} />
        <div className="container-fluid">
          <PageTitle onRandomize={randomize} />
          <Stats ref={statsRef} />
          <div className="row">
            <Widget title="My Widget" size={"threeQuarter"}>
              <span>Content</span>
            </Widget>
          </div>
        </div>
      </div>
    </div>
  );
}
