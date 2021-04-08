import React, { useState } from 'react';
import PropTypes from 'prop-types';

ColorPicker.propTypes = {
    thiscolor: PropTypes.string,
    handelReceiveColor: PropTypes.func,
};

function ColorPicker(props) {
    const {thiscolor,handelReceiveColor}= props;
    const [colors, setcolor] = useState(['red','green','blue','yellow']);
    function setActiveColor(color){
        if(!handelReceiveColor)return;
        handelReceiveColor(color);
    }
    var eleColor = colors.map((color,index)=>{
        return <span key={index} 
                     style={{background:color}}
                     className={thiscolor===color ?'isActive' :''}
                     onClick={()=>setActiveColor(color)}
                     > </span>
    })
    return (
        <div>
             <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        {eleColor}
                    </div>
                </div>
        </div>
    );
}

export default ColorPicker;