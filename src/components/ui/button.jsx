import * as React from 'react'

function Button({ className = '', variant = 'default', ...props }) {
  return (
    <button
      className={`ui-button ui-button-${variant} ${className}`.trim()}
      {...props}
    />
  )
}

export { Button }
