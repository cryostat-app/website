import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function WebsocketInput () {
  return (<div>
    <SyntaxHighlighter language="javascript" style={docco}>
      {`
// Node v18.16.0 (LTS)
const CryoStatClient = require('cryostat-ws');

const cryoClient = new CryoStatClient('YOUR_TOKEN');

cryoClient.on('ready', function (cryostat) {
  console.log('CryoStat Connected');

  const data = {
    timestamp: Date.now(), // Default
    data: { ... }
  }

  cryoClient.send(data)
});
      `}
    </SyntaxHighlighter>
  </div>
  );
}

export default WebsocketInput;
