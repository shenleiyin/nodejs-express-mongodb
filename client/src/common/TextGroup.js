import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames'

const TextGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    disabled
}) => {
    return (
        < div
            className={classnames('form-group col-md-8', { 'has-error': error })}
            // className="form-group col-md-8"
            style={{ marginTop: "-15px" }}>
            <label className="control-label" htmlFor="inputSuccess1">{name}</label>
            <input
                type={type} className="form-control"
                id="inputSuccess1" aria-describedby="helpBlock2"
                placeholder={placeholder}
            />
            {error && <span id="helpBlock2" style={{ whiteSpace: "nowrap", fontSize: "12px" }} className="help-block">{error}</span>}
            {info && <span id="helpBlock2" className="help-block">{info}</span>}
        </div >
    )
}

TextGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.string,
}

// TextFieldGroup.defaultProps = {
//     type: "text"
// }

export default TextGroup;
