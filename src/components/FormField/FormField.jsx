import React from 'react'
import PropTypes, { string } from 'prop-types'
import formField from './FormField.module.css'

const FormField = ({
  fieldType,
  required,
  onChange,
  onClick,
  label,
  errorMessage,
  placeholder,
  text,
  isChecked,
  id,
  name,
  hidden,
  alone,
  options,
}) => {
  const getComponent = () => {
    switch (fieldType) {
      case 'text':
        return (
          <input
            id={id}
            name={name}
            placeholder={placeholder}
            type="text"
            required={required}
            onChange={onChange}
            style={{ display: `${hidden ? 'none' : 'inherit'}` }}
          />
        )
      case 'button':
        return (
          <button
            id={id}
            name={name}
            type="button"
            onClick={onClick}
            style={{ display: `${hidden ? 'none' : 'inherit'}` }}
          >
            {text}
          </button>
        )
      case 'submit':
        return (
          <button
            id={id}
            name={name}
            type="submit"
            onClick={onClick}
            style={{ display: `${hidden ? 'none' : 'inherit'}` }}
          >
            {text}
          </button>
        )
      case 'checkbox':
        return (
          <>
            <input
              id={id}
              name={name}
              type="checkbox"
              defaultChecked={isChecked}
              required={required}
              onClick={onClick}
              style={{ display: `${hidden ? 'none' : 'inherit'}` }}
              tabIndex={-1}
            />
            <label>{label}</label>
          </>
        )
      case 'number':
        return (
          <input
            id={id}
            name={name}
            type="number"
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            style={{
              maxWidth: '3em', textAlign: 'center', display: `${hidden ? 'none' : 'inherit'}`,
            }}
          />
        )
      case 'password':
        return (
          <input
            type="password"
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            style={{ display: `${hidden ? 'none' : 'inherit'}` }}
          />
        )
      case 'hidden':
        return (
          <>
            <label hidden>{label}</label>
            <input
              id={id}
              name={name}
              type="hidden"
              placeholder={placeholder}
              required={required}
              onChange={onChange}
              style={{ maxWidth: '50px', textAlign: 'center' }}
            />
          </>
        )
      case 'dropdown':
        return (
          <select defaultValue="" onChange={onChange} required={required}>
            <option value="" disabled hidden>{placeholder}</option>
            {
              // eslint-disable-next-line react/no-array-index-key
              options.map((option, index) => <option key={`${option}_${index}`} value={index}>{option}</option>)
            }
          </select>
        )
      default:
        return null
    }
  }

  return (
    <div className={formField.styles} style={{ gridColumn: `${alone ? 'span 2' : 'span 1'}` }}>
      {label !== '' && fieldType !== 'checkbox' && fieldType !== 'hidden' && fieldType !== 'pills' && (
        <label hidden={hidden}>{label}</label>
      )}
      {getComponent()}
      {errorMessage !== '' && (
        <span>{errorMessage}</span>
      )}
    </div>
  )
}

FormField.defaultProps = {
  required: false,
  onChange: undefined,
  onClick: undefined,
  label: '',
  errorMessage: '',
  placeholder: '',
  text: '',
  isChecked: false,
  id: undefined,
  name: undefined,
  hidden: false,
  alone: false,
  options: [],
}

FormField.propTypes = {
  fieldType: PropTypes.string.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  hidden: PropTypes.bool,
  alone: PropTypes.bool,
  options: PropTypes.arrayOf(string),
}

export default FormField
