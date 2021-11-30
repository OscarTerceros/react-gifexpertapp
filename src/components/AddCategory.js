import React, { useState } from 'react'

export const AddCategory = () => {
  
  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  const handleSubmit = ( e ) => {
    e.preventDefault(); //para que no realice el evento por defecto del formulario
    console.log('submit echo')
  }

  const [inputValue, setInputValue] = useState('Hola Mundo')

  return (
    <form onSubmit = { handleSubmit } >
      <input 
        type = "text"
        value = { inputValue}
        onChange = { handleInputChange }
      />
    </form>
  )
}
