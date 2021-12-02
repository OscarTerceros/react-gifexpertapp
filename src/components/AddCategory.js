import React, { useState } from 'react'

import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
  
  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  const handleSubmit = ( e ) => {
    e.preventDefault(); //para que no realice el evento por defecto del formulario
    
    if ( inputValue.trim().length > 2  ) {
      setCategories( categories => [ inputValue, ...categories ] );
      setInputValue( '' );
    }
  }

  const [inputValue, setInputValue] = useState('')

  return (
    <form onSubmit = { handleSubmit } >
      <input 
        type = "text"
        placeholder = "Introduzca una nueva categoría"
        value = { inputValue}
        onChange = { handleInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

