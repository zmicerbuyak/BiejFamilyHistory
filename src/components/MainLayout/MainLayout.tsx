import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { CytoChart } from "../CytoChart/CytoChart.tsx"
import { NavBar } from "../NavBar/NavBar.tsx"
import styles from "./styles.module.css"
import elements from "../../data/cytoElements.ts";
import { Routes, Route } from "react-router";
import { RootRoute, BiejRoute, IntroRoute } from "../../routes/index.ts";

function MainLayout() {
  return (
    <>
    <NavBar />
    <PanelGroup direction="horizontal" style={{minHeight: "calc(100dvh - 64px)"}}>
      <Panel className={styles.panel} defaultSize={65} minSize={10} maxSize={80}>
        <CytoChart elements={elements}/>
      </Panel>
      <PanelResizeHandle className={styles.resizeHandle} />
      <Panel style={{"overflowY": 'auto', "overflowX": 'unset'}} className={styles.panel} defaultSize={35} minSize={10}>
        <Routes>
          <Route path="/" Component={RootRoute} />
          <Route path="biej" Component={BiejRoute} />
          <Route path="intro" Component={IntroRoute} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Panel>
    </PanelGroup>
    </>
  );
}

export default MainLayout;
