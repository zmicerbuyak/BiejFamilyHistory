import React, { ReactElement, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import Cytoscape from "cytoscape";
import TidyTree from "cytoscape-tidytree";
import dagre from 'cytoscape-dagre';
import CytoscapeComponent from "react-cytoscapejs";

//Cytoscape.use(TidyTree);
Cytoscape.use(dagre);

export const CytoChart = (props: any): ReactElement => {
  const cyRef = useRef<Cytoscape.Core>();
  let navigate = useNavigate();

  const [elements, setElements] = useState(props.elements);

  // This effect runs once on mount and handles setting up imperative
  // event listeners on the Cytoscape core ref
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) {
      return;
    }
    cy.autoungrabify(true);
    cy.on("select", "node", (event) => {
      const data = event.target[0].data();
      if(data.route) {
        console.log(data.route);
        
        navigate(data.route);
      }
      
    });
  }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       setElements([
//         ...elements,
//         { data: { id: "Closed", label: "Closed" }, selectable: true },
//         {
//           data: {
//             source: "Approved",
//             target: "Closed",
//             label: "close",
//             id: "a7",
//           },
//         },
//       ]);
//     }, 3000);
//   }, []);

  const layout = {
    name: "dagre",
    padding: 5,
    spacingFactor: 1
  };

  const cytoscapeStylesheet: Array<cytoscape.Stylesheet> = [
    {
      selector: "node",
      css: {
        "width": (node) => {
        const ctx = document.createElement('canvas').getContext("2d");
        const fStyle = node.pstyle('font-style').strValue;
        const size = node.pstyle('font-size').pfValue + 'px';
        const family = node.pstyle('font-family').strValue;
        const weight = node.pstyle('font-weight').strValue;

        ctx.font = fStyle + ' ' + weight + ' ' + size + ' ' + family;
        return ctx.measureText(node.data('label')).width;
        //return node.data('label').length * 9
        
      },
        'shape': 'round-rectangle',
        'content': 'data(label)',
                            "background-color": "#dddddd",
                            "font-family": "FiraMono",
                            "font-size": "12pt",
                            "border-width": "1px",
                            "text-valign": "center",
                            "border-color": "#bbbbbb",
                            "border-style": "solid",
                            "text-max-width": 150,
                            "padding": 8,
                            "text-wrap": "wrap",
      }
    },
                    {
                        "selector": "node:selected",
                        "style": {
                            "border-width": "2px",
                            "border-color": "#666666",
                            "border-style": "solid",
                        }
                    },
    {
      selector: ':parent',
      css: {
        'text-valign': 'top',
        'text-halign': 'center',
        'shape': 'round-rectangle',
        'corner-radius': "10",
        'padding': 10
      }
    },
    {
      selector: 'node#e',
      css: {
        'corner-radius': "10",
        'padding': 0
      }
    },
    {
      selector: 'edge',
      css: {"curve-style": "taxi",
                            "taxi-direction": "downward",
                            "taxi-turn": "20px",
                            "target-arrow-shape": "triangle",
      }
    }
  ];

  return (
    <div style={{position: "relative", width: "80dvw", height: "100%"}}>
    <CytoscapeComponent
      boxSelectionEnabled={true}
       cy={(cy): void => {
         cyRef.current = cy;
       }}
      elements={elements}
      layout={layout}
      style={{
        top: 0,
        //bottom: 0,
        position: "absolute",
        width: "100%",
        height: "100%"
      }}
      stylesheet={cytoscapeStylesheet}
    />
    </div>
  );
};
