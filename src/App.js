import React, { useState } from "react";
import "./App.css";
import QrReader from "react-qr-reader";

function App() {
  const QRCodeDelay = 0;
  const [message, setMessage] = useState("oioi");

  function handleScan(QRCodeScannedMessage) {
    if (QRCodeScannedMessage) {
      setMessage(QRCodeScannedMessage);
      console.log(QRCodeScannedMessage);
    }
  }

  function handleQRCodeScanError() {
    // toast.error(
    //   "Houve um problema na leitura do código QR, poderia tentar novamente?"
    // );
    console.log("oi");
  }

  const previewStyle = {
    height: 100,
    width: "100%",
    margin: 15,
  };
  return (
    <div className="App">
      <div>
        <QrReader
          resolution={1920}
          facingMode="environment"
          delay={QRCodeDelay}
          style={previewStyle}
          onError={handleQRCodeScanError}
          onScan={handleScan}
          className="QRcodeScaner"
        />
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default App;
