import React from "react";
import { WebView } from "react-native-webview";

const CustomWebView = ({ url, ...props }) => {
  return <WebView source={{ uri: url }} {...props} />;
};

export default CustomWebView;
