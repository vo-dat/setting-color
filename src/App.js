import { useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

function App() {
  const [colorfont, setcolorfont] = useState({
    color:'red',
    font:14,
  });

  function onSetColor(color){
    console.log(color);
    const newcolorfont={...colorfont};
    setcolorfont({...newcolorfont,color:color})
  }

  function onSetFontsize(value){
    console.log(value);
    const newcolorfont={...colorfont};
    setcolorfont({...newcolorfont, font: colorfont.font+value>=8 && colorfont.font+value<=36 ? colorfont.font+value: colorfont.font})
  }

  function onResetDefault(){
    setcolorfont({color:'Red',font:14})
  }
  return (
    
    <div className="App">
        
        <div className="container mt50">
          
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               {/* ColorPicker */}
               <ColorPicker thiscolor={colorfont.color} handelReceiveColor={onSetColor}/>
            </div>
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
             {/* Size Setting */}
             <SizeSetting fontsize={colorfont.font} onChangeSize={onSetFontsize}/>
              
              {/* Reset */}
              <Reset  handelResetDefault={onResetDefault}/>
            </div>
            
          </div>
          
          {/* Result */}
          <Result  thiscolor={colorfont.color} thisfontsize={colorfont.font}/>
          
          
        </div>  
    </div>
  );
}

export default App;
