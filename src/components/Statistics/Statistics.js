import PropTypes from 'prop-types'

export function Statistics({ title, stats }) {
  const StatsList = ({ stats }) => (
    <ul className="stat-list">
      {stats.map((item) => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
  )

  return (
    <section className="statistics">
      {title !== undefined && <h2 className="title">2. Upload stats</h2>}
      <StatsList stats={stats} />
    </section>
  )
}

Statistics.defaultProps = {
  stats: [
    { id: 'id-1', label: '.docx', percentage: 22 },
    { id: 'id-2', label: '.pdf', percentage: 4 },
    { id: 'id-3', label: '.mp3', percentage: 17 },
    { id: 'id-4', label: '.psd', percentage: 47 },
    { id: 'id-5', label: '.pdf', percentage: 10 },
  ],
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
}
