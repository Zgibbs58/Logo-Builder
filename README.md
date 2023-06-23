# Logo Generator

[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Logo Generator is a command-line application that allows users to create custom SVG logos based on their input. The application prompts the user to enter text, text color, shape, and shape color. Then it generates an SVG file named logo.svg based on the provided criteria.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Testing](#testing)
- [License](#license)
  

## Features
- Accepts up to three characters for the logo text.
- Supports color keywords and hexadecimal numbers for text and shape colors.
- Provides a choice of shapes: circle, triangle, and square.
- Generates an SVG file named logo.svg based on user input.
- Displays the message "Generated logo.svg" in the command line upon successful generation.
- Renders a 300x200 pixel image when logo.svg is opened in a browser.
## Installation
Clone the repository: git clone https://github.com/Zgibbs58/Logo-Builder

Navigate to the project directory: cd Logo-Builder

Install the dependencies: npm install
## Usage
Run the application using the following command: node index.js

The application will prompt you for the following information:

1. Text: Enter up to 3 characters for your logo text.
2. Color Options: Would you rather choose color by name or hex code?
3. Text Color: Enter the name of the text color or 6 digit hex code. Depending on your choice in the previous question.
4. Shape: Choose the shape you want for your logo: circle, triangle, square.
5. Shape Color: Enter the name of the text color or 6 digit hex code. Depending on your choice in the second question.

After providing the required input, the application will generate an SVG file named logo.svg in the examples folder. The message "Generated logo.svg" will be displayed in the command line.

To view the generated logo, open the logo.svg file in a web browser. The logo will be rendered as a 300x200 pixel image.

## Technologies
The application is built using the following technologies:

- JavaScript
- Node.js
- Inquirer (for user input)
- Jest (for unit testing)

## Testing
Logo Generator uses Jest for unit testing. To run the tests, use the following command: npm run test

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
