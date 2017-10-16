import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => (
    <div>
        {
        <p>
            Viewing&nbsp;
            {props.numberOfExpenses} expense
            {props.numberOfExpenses > 1 ? 's' : ''} totalling&nbsp;
            {numeral(props.totalAmount / 100).format('$0,0.00')}
        </p>
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        numberOfExpenses: selectExpenses(state.expenses, state.filters).length,
        totalAmount: expensesTotal(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpenseSummary);