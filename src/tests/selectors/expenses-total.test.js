import SelectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const total = SelectExpensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
    const total = SelectExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should coirrectly add up multiple expenses', () => {
    const total = SelectExpensesTotal(expenses);
    expect(total).toBe(114195);
});