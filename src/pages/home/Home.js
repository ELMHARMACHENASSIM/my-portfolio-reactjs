import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Home = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/VsdCAaOI25qJLwu8/scene.splinecode');
  }, []);

  return (
    <section>

    <div className='section-home'>
      <canvas id='canvas3d' width='900' height='700'>    
      </canvas>
    </div>
    <div className="info-div">
        <h1>hello,</h1>
        <h1>May name is <span>Nassim</span></h1>
        <h2>im,</h2>
      </div>
    </section>

  );
};

export default Home;
