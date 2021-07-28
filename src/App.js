import React, { useState, useEffect } from "react";

function App() {
  useEffect(
    // side effect function
    () => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return <button>Click Me</button>;
}

export default App;
