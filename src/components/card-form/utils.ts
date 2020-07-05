const SEPARATOR = '  ';

export const getCleanCardNumber = (data: string) => {
  if (data.length < 4) {
    return data;
  }

  return data.split(SEPARATOR).join('');
};

export const getSeparatedCardNumber = (data: string) => {
  return data
    .split('')
    .map((letter, i, arr) =>
      (i + 1) % 4 === 0 && i + 1 !== arr.length
        ? `${letter}${SEPARATOR}`
        : letter
    )
    .join('');
};
