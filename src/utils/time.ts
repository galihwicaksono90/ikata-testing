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

export const getCurrentDate = () => {
  const now = new Date();
  const date = now.getDay();
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  return `${date} ${month} ${year}`;
};

export const formatTime = (timeString: string) => {
  const time = new Date(timeString);

  const date = time.getDay();
  const month = monthNames[time.getMonth()];
  const year = time.getFullYear();
  return `${date} ${month} ${year}`;
};

export class Time {
  public static monthNames = [
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

  private static formatTimeToString(time: Date) {
    const date = time.getDate();
    const month = this.monthNames[time.getMonth()];
    const year = time.getFullYear();
    return `${date} ${month} ${year}`;
  }

  public static formatTime(time: string) {
    return this.formatTimeToString(new Date(time));
  }
}
