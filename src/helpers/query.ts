type QueryValue = string | boolean | string[] | number;

export interface QueryObject {
  [key: string]: QueryValue;
}

const parseValue = (value: QueryValue) => {
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return `${value}`;
};

export const createQueryString = (query: QueryObject) =>
  Object.keys(query).reduce((previousValue, currentValue) => {
    const symbol = previousValue === '' ? '?' : '&';
    const value = parseValue(query[currentValue]);
    if (!value) {
      return previousValue;
    }
    return `${previousValue}${symbol}${currentValue}=${value}`;
  }, '');
