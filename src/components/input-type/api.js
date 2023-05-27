import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function ApiInput () {
  return (<div className='example-code'>
    <SyntaxHighlighter language="javascript" style={atelierSulphurpoolLight}>
      {`
// Node v18.16.0 (LTS)
const CryoStatClient = require('cryostat-api');

const cryoClient = new CryoStatClient('YOUR_TOKEN');

const data = {
  timestamp: Date.now(), // Default
  data: { ... }
}

cryoClient.send(data)
        `}
    </SyntaxHighlighter>
  </div>
  );
}

export default ApiInput;
