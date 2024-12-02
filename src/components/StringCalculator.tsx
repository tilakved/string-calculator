import { useState } from "react";
import { add } from "../utils/stringCalculator";

export default function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCalculate();
    }
  };

  const examples = ["1,2,3", "1 \\n2,3", "//;\\n1;2;3", "1,\\n2,3"];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full h-full grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Left Column - Calculator */}
        <div className="h-full flex flex-col">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl flex-grow">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text mb-2 sm:mb-3">
                String Calculator
              </h1>
              <p className="text-gray-500 text-sm sm:text-base">
                Enter your numbers below and let the magic happen
              </p>
            </div>

            {/* Input Group */}
            <div className="space-y-4 sm:space-y-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-indigo-400 group-hover:text-indigo-500 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter numbers (e.g., 1,2,3)"
                  className="w-full pl-12 pr-4 py-4 sm:py-5 bg-white/50 border-2 border-indigo-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 sm:py-5 px-6 rounded-2xl hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 text-sm sm:text-base"
              >
                Calculate
              </button>

              {/* Result/Error Display */}
              {(result !== null || error) && (
                <div
                  className={`mt-4 sm:mt-6 p-4 sm:p-6 rounded-2xl backdrop-blur-xl ${
                    error
                      ? "bg-red-50/80 border border-red-100"
                      : "bg-emerald-50/80 border border-emerald-100"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {error ? (
                      <span className="text-red-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span className="text-emerald-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    )}
                    <div>
                      <h3
                        className={`font-semibold ${
                          error ? "text-red-800" : "text-emerald-800"
                        } text-sm sm:text-base`}
                      >
                        {error ? "Error" : "Result"}
                      </h3>
                      <p
                        className={`${
                          error ? "text-red-600" : "text-emerald-600"
                        }   font-bold`}
                      >
                        {error || result}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Examples & Instructions */}
        <div className="h-full flex flex-col">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 bg-white/80 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl flex-grow">
            {/* Examples Section */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                Quick Examples
              </h2>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(example)}
                    className="group w-full text-left px-4 sm:px-6 py-3 sm:py-4 bg-white/50 rounded-xl hover:bg-indigo-50 transition-all duration-200 border-2 border-transparent hover:border-indigo-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 group-hover:text-indigo-600 font-medium text-sm sm:text-base">
                        {example}
                      </span>
                      <span className="text-gray-400 group-hover:text-indigo-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Instructions Section */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
                How It Works
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-4 p-3 sm:p-4 bg-white/50 rounded-xl border-2 border-transparent hover:border-indigo-100 transition-all duration-200">
                  <span className="text-indigo-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      Basic Input
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Use commas to separate numbers
                    </p>
                    <code className="mt-1 text-xs sm:text-sm bg-white/80 px-2 py-1 rounded text-indigo-600">
                      1,2,3
                    </code>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 sm:p-4 bg-white/50 rounded-xl border-2 border-transparent hover:border-indigo-100 transition-all duration-200">
                  <span className="text-indigo-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      New Lines
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Use \n for line breaks
                    </p>
                    <code className="mt-1 text-xs sm:text-sm bg-white/80 px-2 py-1 rounded text-indigo-600">
                      1\n2,3
                    </code>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-3 sm:p-4 bg-white/50 rounded-xl border-2 border-transparent hover:border-indigo-100 transition-all duration-200">
                  <span className="text-indigo-500 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                      Custom Delimiter
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      Start with // followed by delimiter
                    </p>
                    <code className="mt-1 text-xs sm:text-sm bg-white/80 px-2 py-1 rounded text-indigo-600">
                      //;\n1;2
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
