import { useState } from 'react';
import { add } from '../utils/stringCalculator';

export const StringCalculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">String Calculator</h1>
      
      <div className="mb-4">
        <label htmlFor="numbers" className="block text-sm font-medium text-gray-700 mb-2">
          Enter numbers (comma or newline separated)
        </label>
        <input
          id="numbers"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g., 1,2,3 or 1\n2\n3 or //;\n1;2;3"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        Calculate Sum
      </button>

      {result !== null && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          Result: {result}
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          Error: {error}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600 text-left ">
        <h2 className="font-semibold mb-2">Instructions:</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Enter numbers separated by commas (e.g., "1,2,3")</li>
          <li>You can use new lines instead of commas (e.g., "1\n2\n3")</li>
          <li>For custom delimiter, start with // (e.g., "//;\n1;2;3")</li>
          <li>Negative numbers are not allowed</li>
        </ul>
      </div>
    </div>
  );
};
