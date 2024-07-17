import './App.css';
import QRReader from 'react-qr-scanner';
import { useState } from 'react';

function App() {

  const [switchCamera, setSwitchCamera] = useState(false);
  const [dataWeb, setDataWeb] = useState("");
  const style = {
    objectFit: 'fill',
    // height: 300,
    width: '-webkit-fill-available'
  }

  return (
    <div className="App">
      <div>camera</div>
      <QRReader
        style={style}
        delay={300}
        // switchCamera ? 'user' : 'environment'
        // facingMode={switchCamera ? 'rear' : 'front'}
        constraints={{
          audio: false,
          video: { facingMode: switchCamera ? "user" : "environment" }
        }}
        onError={(err) => console.log(err)}
        onScan={(data) => {
          if (data) {
            setDataWeb(data);
            alert(data);
          }
        }}
      />
      <div>{dataWeb}</div>
      <button onClick={() => {
        setSwitchCamera(!switchCamera)
      }}>switch camera</button>
    </div>
  );
}

export default App;
