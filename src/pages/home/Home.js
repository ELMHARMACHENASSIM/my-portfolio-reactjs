import React from "react";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="section-one">
     
      <div className="info-div">
      <h1>&#123;</h1>
        <h1>"HELLO",</h1>
        <h1>
          "My name is" : <span>"NASSIM"</span>,
        </h1>
        <h2>"i'm a" : "<Typewriter
            options={{
              strings: ["UI UX designer", "Frontend developer","Graphic Designer","Motion Designer"],
              autoStart: true,
              loop: true,
              wrapperClassName : "typewriter",
              delay : 60,
            }}
          />",
        </h2>
        <h2>&nbsp;WelcomeToMyWebSite();</h2>
        <h1>&#125;;</h1>
      </div>
    </section>
  );
};

export default Home;
