import * as React from 'react'

const Select = React.forwardRef(function Select({ className = '', ...props }, ref) {
  return <select ref={ref} className={`ui-select ${className}`.trim()} {...props} />
})

export { Select }
