import React from "react";
import './index.scss';
import { ReactComponent as Logo } from "../../static/logoWithText.svg";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Chart } from "../../components/app-intro/chart";

function App () {
  return (
    <div className="app">
      <div className="homegrid">
        <div id="primary" className="logo">
          <Logo />
        </div>

        <div className="app-intro">
          <div>
            <span className="bold">Step 1: </span>Post your data
            <div>
              <SyntaxHighlighter language="javascript" style={docco}>
                {`
await fetch('https://send.cryostat.app/data', {
  method: 'POST'
  headers: {
    Authentication: 'Bearer ...',
    Content-Type: 'application/json'
  }
  body: {
    timestamp: Date.now(), // Default
    data: { ... }
  }
}) // Returns { status: 200, body: { message: 'Ok' } }
                  `}
              </SyntaxHighlighter>
            </div>
          </div>
          <div><span className="bold">Step 3: </span>Visualise your data</div>
          <div>
            <Chart />
          </div>
        </div>

        <div id="primary" className="subtext">
          API / Websocket driven data input that gives developers<br/>access to metrics and status pages. All in one.
          <div>
            <a href='/'>Coming Soon</a> <a href='/'>Coming Soon</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
