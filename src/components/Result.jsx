import React from 'react';
import PropTypes from 'prop-types';

Result.propTypes = {
    thiscolor: PropTypes.string,
    thisfontsize: PropTypes.number,
};

function Result(props) {
    const {thiscolor,thisfontsize} =props;
    return (
        <div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>Color : red - Fontsize : 12px</p>
                <div className="content" style={{borderColor:thiscolor,fontSize:thisfontsize }}>
                Nội dung Setting
                </div>
            </div>
        </div>
    );
}

export default Result;