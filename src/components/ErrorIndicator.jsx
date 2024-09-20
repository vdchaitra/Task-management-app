import React from 'react'
import {Alert,
AlertIcon,
AlertTitle,
AlertDescription} from '@chakra-ui/react'

function ErrorIndicator() {
  return (
    <div>
       <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Error!</AlertTitle>
  <AlertDescription>SomeThing Went Wrong...</AlertDescription>
</Alert>
    </div>
  )
}

export default ErrorIndicator
