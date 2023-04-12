export const yearCalc = (release) => {
  const date = new Date(release);
  return date.getFullYear();
};

export const durationCalc = (duration) => {
  const hours = duration / 60;
  const rHours = Math.floor(hours);
  const minutes = (hours - rHours) * 60;
  const rMinutes = Math.round(minutes);
  return `${rHours}hs ${rMinutes}mins`;
};

export const releaseCalc = (release) => {
  const date = new Date(release);
  const year = date.getFullYear();
  const month = date.toLocaleDateString("en", { month: "short" });
  const day = date.getDate();
  return `${day} ${month} ${year}`;
};
