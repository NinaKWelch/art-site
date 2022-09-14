import React, { useState } from 'react';

export const useField = (type: string) => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const input = { type, value, onChange }

  const reset = () => setValue('')

  return {
    input,
    reset,
  }
}
