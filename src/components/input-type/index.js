import React from "react";
import WebsocketInput from "./websocket";
import ApiInput from "./api";

/**
 * @param {Object} props
 * @param {'api' | 'websocket'} props.type
 * @returns {React.ReactElement}
 */
function InputTypeToggle (props) {
  switch (props.type) {
    case 'api': 
      return <ApiInput />;
    case 'websocket': 
      return <WebsocketInput />;
    default: 
      return null;
  }
}

export default InputTypeToggle;
