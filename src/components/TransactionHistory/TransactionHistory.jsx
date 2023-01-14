import PropTypes, { checkPropTypes } from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from './Transaction/Transaction';

export const TransactionHistory = ({ items }) => {
  const elements = items.map(({ id, ...props }) => (
    <Transaction key={id} {...props} />
  ));
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{elements}</tbody>
      </table>
    </>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
