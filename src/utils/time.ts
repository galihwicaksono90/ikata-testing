  export const getCurrentDate = () => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const now = new Date();
    const date = now.getDay();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    return `${date} ${month} ${year}`;
  };
