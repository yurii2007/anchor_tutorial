import PropTypes from 'prop-types';
import { Section, UlElem, LiElem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2>{title}</h2>}

      <UlElem>
        {stats.map(({ label, percentage, id }) => (
          <LiElem key={id}>
            <span>{label}</span>
            <span>{percentage}</span>
          </LiElem>
        ))}
      </UlElem>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};
