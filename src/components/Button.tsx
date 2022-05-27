import pt from 'prop-types'

function Button({
  args,
  children,
  backgroundColor = 'red',
  size = 'md',
  handleClick,
}) {
  let scale = 1
  if (size === 'sm') scale = 0.75
  if (size === 'lg') scale = 1.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
  }
  return (
    <button onClick={handleClick} style={style}>
      {children}
    </button>
  )
}

Button.pt = {
  args: pt.shape({}),
  children: pt.string,
  backgroundColor: pt.string,
  size: pt.oneOf(['sm', 'md', 'lg']),
  handleClick: pt.func,
}

export default Button
