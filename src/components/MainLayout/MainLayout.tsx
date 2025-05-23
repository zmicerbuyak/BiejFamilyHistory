import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { CytoChart } from "../CytoChart/CytoChart.tsx"
import { NavBar } from "../NavBar/NavBar.tsx"
import styles from "./styles.module.css"
import elements from "../../data/cytoElements.ts";
import { Routes, Route } from "react-router";

function MainLayout() {
  return (
    <>
    <NavBar />
    <PanelGroup direction="horizontal" style={{minHeight: "calc(100dvh - 64px)"}}>
      <Panel className={styles.panel} defaultSize={80} minSize={10} maxSize={80}>
        <CytoChart elements={elements}/>
      </Panel>
      <PanelResizeHandle className={styles.resizeHandle} />
      <Panel className={styles.panel} minSize={10}>
        <Routes>
          <Route path="/" element={<>Root</>} />
          <Route path="foo" element={<>FOO</>} />
          <Route path="bar" element={<>BAR</>} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Panel>
    </PanelGroup>
    </>
  );
}

export default MainLayout;
