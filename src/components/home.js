import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
function Home() {
  const navigate=useNavigate();
  const OBJ={
    id:5
  }
  function gotoAbout()
  {
    navigate("about",{state : {ID:OBJ.id}});
  }
  return (
    <div>
      <h1>Welcome To Home Page</h1>
      <nav>
        <Link to="/">Home</Link>
        <button onClick={gotoAbout}>About</button>
        <Link to="/contact">Contact</Link>

      </nav>
    </div>
  )
}

export default Home
