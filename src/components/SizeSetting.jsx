import React from 'react';
import PropTypes from 'prop-types';

SizeSetting.propTypes = {
    fontsize:PropTypes.number,
    onChangeSize: PropTypes.func,
};

function SizeSetting(props) {
    const {fontsize,onChangeSize} = props;
    function handelOnChangeSise(value){
        if (!onChangeSize){return ;}
        onChangeSize(value); 
    }
    return (
        <div>
             <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">Size: {fontsize}</h3>
                  </div>
                  <div className="panel-body">
                     
                    <button type="button" className="btn btn-success" onClick={()=>handelOnChangeSise(-2)} >Giảm</button>
                    <span> </span>
                    <button type="button" className="btn btn-success" onClick={()=>handelOnChangeSise(2)}>Tăng</button>
                     
                  </div>  
              </div>
        </div>
    );
}

export default SizeSetting;