import React from 'react';
import Nav from "../Nav/Nav"; // ✅ Correct path (since Home.js is inside Home folder)

function Home() {
  return (
    <div>
        <Nav />
        <h1>Home</h1>
    </div>
  );
}

export default Home;
