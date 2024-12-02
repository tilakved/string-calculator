# String Calculator

A modern, responsive string calculator built with React, TypeScript, and Tailwind CSS. This application allows users to perform calculations on strings of numbers with various delimiters.

## 🚀 Features

- Add numbers from string input
- Support for multiple delimiters (comma, newline)
- Custom delimiter support
- Negative number validation
- Real-time calculation
- Modern, responsive UI
- Interactive example inputs

## 🛠️ Technology Stack

- **Framework:** Vite + React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Vitest

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tilakved/string-calculator.git
   cd string-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 🎯 Usage

The calculator accepts string inputs in the following formats:

1. Basic comma-separated numbers:
   ```
   "1,2,3" => 6
   ```

2. Numbers with newline delimiter:
   ```
   "1\n2,3" => 6
   ```

3. Custom delimiter:
   ```
   "//;\n1;2" => 3
   ```

## 🧪 Running Tests

Run the test suite with:
```bash
npm test
# or
yarn test
```

## 🎨 UI Features

- Fullscreen, responsive layout
- Modern glassmorphism design
- Gradient accents and backgrounds
- Interactive hover states
- Mobile-first approach
- Adaptive typography

## 🔍 Input Validation

- Handles empty strings
- Validates negative numbers
- Supports multiple delimiter types
- Provides clear error messages

## 🛡️ Error Handling

The calculator provides clear feedback for various error cases:
- Negative numbers
- Invalid input format
- Invalid delimiters
- Empty input

## 📱 Responsive Design

- Desktop optimization
- Tablet-friendly layout
- Mobile responsiveness
- Adaptive spacing and typography

## 🔄 Development Workflow

1. Make changes to the code
2. Run tests to ensure functionality
3. Check responsive design
4. Build for production

## 📦 Building for Production

Build the application with:
```bash
npm run build
# or
yarn build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing fast build tool
- Vitest for the testing framework
