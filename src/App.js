import React, { useState } from "react";
import "./App.css";
import QrReader from "react-qr-reader";

function App() {
  const QRCodeDelay = 100;
  const [message, setMessage] = useState("Escaneia ai");

  function handleScan(QRCodeScannedMessage) {
    if (QRCodeScannedMessage) {
      setMessage(QRCodeScannedMessage);
      console.log(QRCodeScannedMessage);
    }
  }

  function handleQRCodeScanError() {
    console.log("oi");
  }

  const previewStyle = {
    height: "375px",
    width: "95%",
    margin: 15,
  };

  const h1Style = {
    position: "relative",
    marginTop: "55%",
    bottom: 0,
  };

  const flex = { display: "flex", flexDirection: "column", height: "100%" };

  return (
    <div className="App">
      <div style={flex}>
        <QrReader
          resolution={1920}
          facingMode="environment"
          delay={QRCodeDelay}
          style={previewStyle}
          onError={handleQRCodeScanError}
          onScan={handleScan}
          className="QRcodeScaner"
        />
        <h1 style={h1Style}>{message}</h1>
      </div>
    </div>
  );
}

export default App;
