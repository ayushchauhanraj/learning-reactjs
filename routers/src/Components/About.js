import React from "react";
import Rainbow from "../Components/hoc/Rainbow";

const About = (props) => {
  // setTimeout(() => {
  //   props.history.push("/contact");
  // }, 3000);

  return (
    <div className="container">
      <h4>About</h4>
      <p>
        Hello ,this is ayush chauhan and i am inside the About tag which is
        using the router property in reactjs. i am learning this course form
        some days which i might be able to understand the latest things in which
        i could not be allowed for more information
      </p>
    </div>
  );
};

export default Rainbow(About);
