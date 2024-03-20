import React from "react";

function Results() {
  return (
    <div>
      <>
        <div className="container">
          <div className="box" id="Result">
            <div className="title">
              <h2 className="font-Robo text-3xl text-center">Results</h2>
            </div>
            <div className="desc1">
              <p className="desc font-Robo">
              Hence,by employing the Depth-First Search (DFS) Algorithm, we can systematically traverse through all nodes or vertices of a graph by diving as deep as possible along each branch before backtracking. DFS prioritizes exploring the deepest unexplored nodes first, gradually backtracking only when necessary to fully uncover the graph's structure. This method of exploration consumes less memory compared to breadth-first search (BFS) as it delves deeply into the graph before expanding outward, making it efficient for certain types of graph traversal tasks.
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Results;
