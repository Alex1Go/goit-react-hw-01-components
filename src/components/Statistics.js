import propTypes from 'prop-types';
 
// function randomColor() {
// 	let color = '#' + Math.random().toString(16).slice(3, 9);
// }
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const Statistics = ({ title, stats }) => {
    return (
        <section >
            <h2 >{title}</h2>

            <ul >
                {stats.map(stat => (
                    <li key={stat.id}>
                        <span >{stat.label}</span>
                        <span >{stat.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
  label: propTypes.string.isRequired,
  percentage: propTypes.number.isRequired,
};

randomColor();