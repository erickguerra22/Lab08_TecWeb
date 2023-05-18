import React from 'react'
import PropTypes from 'prop-types'

import form from './Form.module.css'

const Form = ({ handleSubmit, fields }) => (
  <form onSubmit={handleSubmit} className={form.styles}>
    {fields.map((field, index) => {
      const key = `${field.fieldType} / ${index}`
      return (
        <React.Fragment key={key}>
          {field}
        </React.Fragment>
      )
    })}
  </form>
)

Form.defaultProps = {
  handleSubmit: undefined,
}

Form.propTypes = {
  handleSubmit: PropTypes.func,
  fields: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Form
