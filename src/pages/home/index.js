import React, { useState } from "react";
import './index.scss';
import { ReactComponent as Logo } from "../../static/logoWithText.svg";
import { Chart } from "../../components/app-intro/chart";
import InputTypeToggle from "../../components/input-type";

function App () {
  const [inputType, setInputType] = useState('api');

  return (
    <div className="app">
      <div className="homegrid">
        <div id="primary" className="logo">
          <Logo />
        </div>

        <div className="app-intro">
          <div>
            <div className="step-text">
              <span className="bold">Step 1:&nbsp;</span>Post your data
              <span className="input-type-toggle">
                <span aria-selected={inputType === 'api'} onClick={() => { setInputType('api'); }}>API</span>
                <span aria-selected={inputType === 'websocket'} onClick={() => { setInputType('websocket'); }}>Websocket</span>
              </span>
            </div>
            <InputTypeToggle type={inputType} />
          </div>
          <div><span className="bold">Step 3: </span>Visualise your data</div>
          <div>
            <Chart />
          </div>
        </div>

        <div id="primary" className="subtext">
          API / Websocket driven data input that gives developers<br />access to metrics and status pages. All in one.
          <div>
            <a href='/'>Get Started</a> <a href='https://github.com/cryostat-app'>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
