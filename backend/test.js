const graphviz = require('graphviz');

// Extract the dotScript from your JSON
const jsonData = {
    "message": "FSM visualized successfully",
    "dotScript": `digraph finite_state_machine {
        rankdir = LR;
        node [shape = circle, color="#e8cdad", fontcolor="#e8cdad"]; 0;
        node [shape = doublecircle, color="#e8cdad", fontcolor="#e8cdad"]; 5;
        node [shape = plaintext];  "" -> 0 [label="start", color="#e8cdad", fontcolor="#e8cdad"];
        node [shape = circle, color="#e8cdad"];  0 -> 1 [label="a", color="#e8cdad", fontcolor="#e8cdad"];
        1 -> 2 [label="b", color="#e8cdad", fontcolor="#e8cdad"];
        2 -> 3 [label="b", color="#e8cdad", fontcolor="#e8cdad"];
        3 -> 4 [label="ε", color="#e8cdad", fontcolor="#e8cdad"];
        3 -> 5 [label="ε", color="#e8cdad", fontcolor="#e8cdad"];
        4 -> 6 [label="a", color="#e8cdad", fontcolor="#e8cdad"];
        6 -> 4 [label="ε", color="#e8cdad", fontcolor="#e8cdad"];
        6 -> 5 [label="ε", color="#e8cdad", fontcolor="#e8cdad"];
    }`
};

// Create a new graph object from the DOT string
const g = graphviz.parse(jsonData.dotScript);

// Render the graph to SVG and output it
graphviz.render(
    "svg",
    g,
    {},
    (error, svg) => {
      if (error) {
        console.error("Error rendering graph:", error);
      } else {
        console.log(svg); // This will output the SVG content to the console
      }
    }
  );
