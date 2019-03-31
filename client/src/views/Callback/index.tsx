import React from 'react'

interface CallbackProps {
  code: string
}

export function Callback({ code }: CallbackProps) {
  console.log('CODE: ', code)
  return <h3>Callback</h3>
}
