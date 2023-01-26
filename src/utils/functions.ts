export const formatDate = (
  date: Date,
  options = {
    fullyear: false,
  },
) => {
  const year = date.getFullYear();
  const month = options.fullyear
    ? new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)
    : (date.getMonth() + 1).toString().padStart(2, '0');
  const day = (date.getDate() - 1).toString().padStart(2, '0');

  return {
    year,
    month,
    day,
  };
};
