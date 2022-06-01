export const createClassYears = () => {
  const fromYear = 1960;
  const untilYear = new Date().getFullYear() - 4;
  const years = [];
  for (let i = fromYear; i <= untilYear; i++) {
    years.push(i.toString());
  }
  return years;
};
