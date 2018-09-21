// Get hidden expenses

export default (allExpenses, visibleExpenses) => {
    return allExpenses.filter((expense) => {
        return visibleExpenses.indexOf(expense) < 0;
    });
}