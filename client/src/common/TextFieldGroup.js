import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames'

const TextFieldGroup = ({
    name,
    placeholder,
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
    return (
        <div
            className={classnames('col-sm-6 col-sm-offset-3', { 'has-error': error })} >
            <br />
            <input
                className="form-control"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange} />
            {info && <small style={{ float: "left" }} className="form-text text-mued">{info}</small>}
            {error && (<label style={{ fontSize: "12px", float: "left", position: "absolute", left: "15px", bottom: "-18px" }} className="control-label">{error}</label>)}
        </div>
    );

}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
    type: "text"
}

export default TextFieldGroup;
