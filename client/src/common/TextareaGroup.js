import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames'

const TextareaGroup = ({
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
            <textarea cols="30" rows="10"
                style={{ position: "absolute", left: "0px" }}
                className="form-control"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            ></textarea>
            {info && <small style={{ float: "left" }} className="form-text text-mued">{info}</small>}
            {error && (<label style={{ fontSize: "12px", float: "left", position: "absolute", left: "15px", bottom: "-18px" }} className="control-label">{error}</label>)}
        </div>
    );

}

TextareaGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
}


export default TextareaGroup;
