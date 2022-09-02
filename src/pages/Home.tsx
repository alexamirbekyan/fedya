import React from 'react';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Fedya</h1>


      <iframe
        src="https://memopin-io-development.web.app/maps/embed?list=TNJLwVLbTkeNpyI6md1gIKjhrow1|FbEEBCrrmznASMkPtJMF"
        width="100%"
        height="600"
        style="border:0; border-radius: 8px; margin: 4px;"
        allowFullScreen=""
        scrolling="no"
        loading="lazy"></iframe>


      <div>
        <Link to={'/privacy'}>Privacy</Link>
        <Link to={'/ddi'}>DDI</Link>
      </div>
    </div>
  );
}

export default Home;
