import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({label, onClick, type}) => {
  return (
    <Button
    type={type} 
    onClick={onClick}
    >{label}</Button>
  )
}

export default CustomButton
