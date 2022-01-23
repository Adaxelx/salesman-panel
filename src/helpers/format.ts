export const formatToPolish = (value: number) =>
  new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(value);
