import SelectHiddenExpense from '../../selectors/expenses-hidden';
import expenses from '../fixtures/expenses';

test('should filter out visible expenses', () => {
    const visibleExpenses = [expenses[1]];
    const hiddenExpenses = SelectHiddenExpense(expenses, visibleExpenses);
    expect(hiddenExpenses).toEqual([
        expenses[0],
        expenses[2]
    ]);
});