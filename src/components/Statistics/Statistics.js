import PropTypes from 'prop-types'
import s from './Statistics.module.css'
export function Statistics({ title, stats }) {
  const rnd = (min, max) => Math.ceil(Math.random() * (max - min) + min)

  const StatsList = ({ stats }) => (
    <ul className={s.stat_list}>
      {stats.map((item) => {
        const rndColor = `rgb(${rnd(50, 255)},${rnd(50, 255)},${rnd(50, 255)})`
        const styleLi = { backgroundColor: rndColor }
        return (
          <li key={item.id} className={s.item} style={styleLi}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        )
      })}
    </ul>
  )

  return (
    <section className={s.statistics}>
      {title !== undefined && <h2 className={s.title}>2. Upload stats</h2>}
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
