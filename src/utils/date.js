/**
 *
 * @param {String} date Format date "MM/DD/YYYY"
 */
export const calculateYearsToToday = (date) => {
    const dateDifMs = Date.now() - new Date(date).getTime();
    const yearsDate = new Date(dateDifMs);
    return Math.abs(yearsDate.getUTCFullYear() - 1970);
};
