import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(item => (
    <li key={item.id} className={css.statsItem}>
      <span>{item.label}</span> {item.percentage}
    </li>
  ));
  return (
    <>
      {title && <h2 className={css.statsTitle}>{title}</h2>}
      <ul className={css.statsList}>{elements}</ul>
    </>
  );
};

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
