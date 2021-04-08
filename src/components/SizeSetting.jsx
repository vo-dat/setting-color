import React from 'react';
import PropTypes from 'prop-types';

SizeSetting.propTypes = {
    fontsize:PropTypes.number,
    receiFontsize: PropTypes.func,
};

function SizeSetting(props) {
    const {fontsize,receiFontsize} = props;
    function handelNextSize(fontsize){
        fontsize =fontsize+1;
        receiFontsize(fontsize);    
    }
    function handelPreSize(fontsize){
        fontsize =fontsize-1;
        receiFontsize(fontsize);    
    }
    return (
        <div>
             <div className="panel panel-warning">
                  <div className="panel-heading">
                    <h3 className="panel-title">Size: {fontsize}</h3>
                  </div>
                  <div className="panel-body">
                     
                    <button type="button" className="btn btn-success" onClick={()=>handelPreSize(fontsize)} >Giảm</button>
                    <span> </span>
                    <button type="button" className="btn btn-success" onClick={()=>handelNextSize(fontsize)}>Tăng</button>
                     
                  </div>  
              </div>
        </div>
    );
}

export default SizeSetting;