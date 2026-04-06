import './Panel.css'

function Panel({ children, className = '' }) {
  const classes = className ? `panel ${className}` : 'panel'

  return <section className={classes}>{children}</section>
}

export default Panel