import { useState, useEffect } from 'react';

const useFSMData = (fsmData) => {
  const [nodePositions, setNodePositions] = useState({});
  const [transitions, setTransitions] = useState([]);

  useEffect(() => {
    if (fsmData && fsmData.fsm) {
      const { acceptStates, transitions: fsmTransitions, initialState, numOfStates, type } = fsmData.fsm;

      // Calculate positions for nodes dynamically based on number of states
      const positions = {};
      const spacing = 100; // Distance between nodes (adjust as necessary)

      // Assign positions to each state in a straight line (horizontal)
      for (let i = 0; i < numOfStates; i++) {
        positions[`q${i}`] = {
          x: 100 + i * spacing,  // Start at x = 100, then space them out horizontally
          y: 150,                // Keep y constant for a horizontal line
        };
      }

      setNodePositions(positions);

      // Parse the transitions into a usable format
      const formattedTransitions = [];
      for (const fromState in fsmTransitions) {
        for (const toState in fsmTransitions[fromState]) {
          const label = fsmTransitions[fromState][toState];
          formattedTransitions.push({ from: `q${fromState}`, to: `q${toState}`, label });
        }
      }

      setTransitions(formattedTransitions);
    }
  }, [fsmData]);

  return { nodePositions, transitions };
};

export default useFSMData;
