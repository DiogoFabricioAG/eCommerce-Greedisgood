export const getJoinAtMonth = (date: Date): number => {
    const milliseconds = Date.now() - date.getTime();
    return Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 30);
  };
  
  export const transformDate = (date: Date): string => {
    const months = getJoinAtMonth(date);
    if (months < 1) {
      return 'Hace menos de un mes';
    } else if (months === 1) {
      return 'Hace un mes';
    } else if (months > 1 && months < 12) {
      return `Hace ${months} meses`;
    } else {
      const years = Math.floor(months / 12);
      return `Hace ${years} años y ${months % 12} meses`;
    }
  };
  
  export const fullName = (firstname: string, lastname: string): string => {
    return `${firstname} ${lastname}`;
  };
  