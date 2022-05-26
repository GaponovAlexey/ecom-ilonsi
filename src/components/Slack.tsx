import PropTypes from 'prop-types'

const Stack = ({
  children,
  spacing = 2,
  direction = 'row',
  wrap = false,
}: any) => {
  const style = {
    display: 'flex',
    gap: `${spacing * 0.25}rem`,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    flexDirection: direction,
  } as any
  return <div style={style}>{children}</div>
}

Stack.propTypes = {
  spacing: PropTypes.number,
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(['row', 'column']),
}

export default Stack
