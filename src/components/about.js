import React from 'react'
import {useLocation} from 'react-router-dom';
function About() {
  const location=useLocation();
  console.log(location.state);
  return (
    <div>
      <h1>Welcome to About Page! My id is {location.state.ID}</h1>

    </div>
  )
}

export default About
