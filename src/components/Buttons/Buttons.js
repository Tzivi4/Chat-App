import React from 'react'

export const SendButton = props => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      stroke="#eee"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
    </svg>
  )
}
