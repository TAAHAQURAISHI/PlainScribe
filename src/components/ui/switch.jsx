import * as React from 'react'

const Switch = React.forwardRef(function Switch(
  { checked = false, onCheckedChange, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      className={`ui-switch ${checked ? 'is-checked' : ''}`.trim()}
      onClick={() => onCheckedChange?.(!checked)}
      {...props}
    >
      <span className="ui-switch-thumb" />
    </button>
  )
})

export { Switch }
