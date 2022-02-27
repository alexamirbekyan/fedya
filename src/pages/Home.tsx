import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Fedya</h1>

      <div>
        <Link to={'/privacy'}>Privacy</Link>
        <Link to={'/ddi'}>DDI</Link>
      </div>
    </div>
  );
}

export default Home;
