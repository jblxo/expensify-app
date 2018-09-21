import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectHiddenExpenses from '../selectors/expenses-hidden';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({expensesTotal, expenseCount, hiddenExpenseCount}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const hiddenExpenseWord = hiddenExpenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount} {expenseWord}</span> totalling <span>{formattedExpensesTotal}</span>
                </h1>
                    { hiddenExpenseCount > 0 ?
                        <h2 className="page-header__title">Not showing <span>{hiddenExpenseCount} {hiddenExpenseWord}</span> because of filters</h2>
                        :
                        <h2 className="page-header__title">Showing all expenses</h2>
                    }
                <div className="page-header__actions">
                    <Link className="button button--blue" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const hiddenExpenses = selectHiddenExpenses(state.expenses, visibleExpenses);

    return {
        expensesTotal: selectExpensesTotal(visibleExpenses),
        expenseCount: visibleExpenses.length,
        hiddenExpenseCount: hiddenExpenses.length
    };
};

export default connect(mapStateToProps)(ExpensesSummary);