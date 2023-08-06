import PropTypes from 'prop-types';
import { Card, List, Item,ListItem } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <Card >
            <List>
                <tr>
                    <ListItem>Type</ListItem>
                    <ListItem>Amount</ListItem>
                    <ListItem>Currency</ListItem>
                </tr>
            </List>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <Item>{item.type}</Item>
                        <Item>{item.amount}</Item>
                        <Item>{item.currency}</Item>
                    </tr>
                ))}
            </tbody>
        </Card>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      })).isRequired,
}