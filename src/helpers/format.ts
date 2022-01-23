export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pl', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  }).format(value);
