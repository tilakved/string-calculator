export function add(numbers: string): number {
  if (numbers === '') {
    return 0;
  }

  let delimiter = ',';
  let numbersToProcess = numbers;

  // Check for custom delimiter
  if (numbers.startsWith('//')) {
    const delimiterEnd = numbers.indexOf('\n');
    delimiter = numbers.substring(2, delimiterEnd);
    numbersToProcess = numbers.substring(delimiterEnd + 1);
  }

  // Replace new lines with the delimiter and split
  const numberArray = numbersToProcess
    .replace(/\n/g, delimiter)
    .split(delimiter)
    .map(Number);

  // Check for negative numbers
  const negativeNumbers = numberArray.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}
