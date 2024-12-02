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
  const regExp = new RegExp(/(-?\d)+/, 'g');
  const numberArray = numbersToProcess.match(regExp)?.map(Number) || [];

  // Check for negative numbers
  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(",")}`
    );
  }

  console.log(numberArray);
  return numberArray.reduce((sum, num) => sum + num, 0);
}
