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

export const getTimeFormatted = (endTime: Date): string => {
  const now = Date.now();
  const timeLeft = new Date(endTime).getTime() - now;

  if (timeLeft <= 0) return "Finalizado";

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export function formatearFechaHora(fechaHoraISO: string): string {
  const fecha = new Date(fechaHoraISO);

  const anio = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // +1 porque los meses son 0-indexados
  const dia = String(fecha.getDate()).padStart(2, '0');
  const horas = String(fecha.getHours()).padStart(2, '0');
  const minutos = String(fecha.getMinutes()).padStart(2, '0');
  const segundos = String(fecha.getSeconds()).padStart(2, '0');

  return `${anio}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;
}
