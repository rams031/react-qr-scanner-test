import logo from './logo.svg';
import './App.css';
import QRReader from 'react-qr-scanner';
import { useState } from 'react';

function App() {

  const [switchCamera, setSwitchCamera] = useState(false);

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
        facingMode={switchCamera ? 'rear' : 'front'}
        onError={(err) => console.log(err)}
        onScan={(data) => {
          if (data) {
            alert(data);
          }
        }}
      />
      <button onClick={() => {
        setSwitchCamera(!switchCamera)
      }}>switch camera</button>
    </div>
  );
}

export default App;
