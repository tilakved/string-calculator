export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let numbersToProcess = numbers;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEnd = numbers.indexOf("\n");
    numbersToProcess = numbers.substring(delimiterEnd + 1);
  }

  // Extract numbers using regex
  const regExp = new RegExp(/-?(\d)+/, 'g');
  const numberArray = numbersToProcess.match(regExp)?.map(Number) || [];

  // Check for negative numbers
  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `Negative numbers not allowed: ${negativeNumbers.join(', ')}`
    );
  }

  // Replace numbers greater than 1000 with 0
  const validNumbers = numberArray.map(num => num > 1000 ? 0 : num);

  return validNumbers.reduce((sum, num) => sum + num, 0);
}
