import React from 'react';
import PropTypes from 'prop-types';

Reset.propTypes = {
    handelResetDefault: PropTypes.func,
};


function Reset(props) {
    const {handelResetDefault}= props;
    function onResetDefault(){
        if(!handelResetDefault){return ;}
        handelResetDefault();
    }
    
    return (
        <div>
              <button type="button" className="btn btn-primary" onClick={()=>onResetDefault()}>Reset</button>  
        </div>
    );
}

export default Reset;