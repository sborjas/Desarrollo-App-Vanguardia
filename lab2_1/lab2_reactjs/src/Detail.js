import React from 'react';
import PropTypes from 'prop-types';

class Detail extends React.Component{
    render(){
        return <div>
            <h2>{this.props.detailTitle}</h2>
            <h2>{this.props.detailValue}</h2>
        </div>       
    }
}

Detail.defaultProps={
    detailTitle: "San Pedro Sula",
    detailValue: 0
};

Detail.propTypes = {
    detailTitle: PropTypes.string,
    detailValue: PropTypes.number
}

export default Detail;