import React, { createRef, useEffect, useState } from "react";

import SideBar from "./Components/SideBar";
import TopBar from "./Components/TopBar";
import PageTitle from "./Components/PageTitle";
import Stats from "./Components/Stats/Stats";
import Widgets from "./Components/Widgets/Widgets";

export default function App() {
  const statsRef = createRef();
  const widgetsRef = createRef();
  const [isMobile, setIsMobile] = useState(false);

  const randomize = () => {
    statsRef.current.randomize();
    widgetsRef.current.randomize();
  };

  useEffect(() => {
    // Close sidebar on mobile and open on desktop
    const onResize = () => {
      const width = document.documentElement.clientWidth;
      setIsMobile(width < 501);
    };

    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, [setIsMobile]);

  return (
    <div id="wrapper">
      <SideBar opened={!isMobile} />
      <div id="content-wrapper" className="d-flex flex-column">
        <TopBar onToggleSideBar={() => setIsMobile(!isMobile)} />
        <div className="container-fluid">
          <PageTitle onRandomize={randomize} />
          <Stats ref={statsRef} />
          <Widgets isMobile={isMobile} ref={widgetsRef} />
        </div>
      </div>
    </div>
  );
}
