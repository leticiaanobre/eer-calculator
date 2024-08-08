# Daily Caloric Expenditure Calculator

This is a responsive web application built with Next.js, TypeScript, and Tailwind CSS that calculates the daily caloric expenditure (EER) based on user input variables such as age, weight, height, sex, and physical activity level.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Calculations](#calculations)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive design for both desktop and mobile screens
- User-friendly form for inputting personal data
- Real-time calculation of daily caloric expenditure (EER)
- Clean and modern UI using Tailwind CSS
- Integration with `lucide-react` for icons

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/)

## Installation

Follow these steps to install and run the application locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/daily-caloric-expenditure-calculator.git
   cd daily-caloric-expenditure-calculator

2. Install the dependencies:

   ```bash
   npm install

3. Run the development server:
   ```bash
   npm run dev

## Usage

1. Open the application in your browser.
2. Fill in your personal information in the form:
- Age
- Weight (kg)
- Height (m)
- Sex (Male or Female)
- Physical Activity Level (Sedentary, Lightly Active, Active, Very Active)
3. Click the "Calculate" button.
4. Your daily caloric expenditure (EER) will be displayed on the screen.

## Calculations

The application calculates the daily caloric expenditure (EER) based on the Mifflin-St Jeor Equation, which is different for males and females. The Physical Activity Level (PAL) is also taken into account. Below are the detailed formulas used for the calculations:

- **For Males:**
  \[
  \text{EER} = 662 - (9.53 \times \text{age}) + \text{PA} \times (15.91 \times \text{weight} + 539.6 \times \text{height})
  \]

- **For Females:**
  \[
  \text{EER} = 354 - (6.91 \times \text{age}) + \text{PA} \times (9.36 \times \text{weight} + 726 \times \text{height})
  \]

- **Physical Activity Level (PA):**
  - Sedentary: 1.0
  - Lightly Active: 1.11 (Male), 1.12 (Female)
  - Active: 1.25 (Male), 1.27 (Female)
  - Very Active: 1.48 (Male), 1.45 (Female)

### Explanation of Variables:
- **Age**: The age of the individual in years.
- **Weight**: The weight of the individual in kilograms.
- **Height**: The height of the individual in meters.
- **PA (Physical Activity Level)**: A multiplier that accounts for the individual's level of physical activity. It varies based on gender and activity level.

### Example Calculation:
For a 25-year-old male who weighs 70 kg, is 1.75 meters tall, and is moderately active (PA = 1.25):

\[
\text{EER} = 662 - (9.53 \times 25) + 1.25 \times (15.91 \times 70 + 539.6 \times 1.75)
\]

Breaking it down:
1. Calculate the age-related reduction:
   \[
   9.53 \times 25 = 238.25
   \]
2. Calculate the weight and height components:
   \[
   15.91 \times 70 = 1113.7
   \]
   \[
   539.6 \times 1.75 = 944.3
   \]
3. Sum these components and multiply by the PA factor:
   \[
   1113.7 + 944.3 = 2058
   \]
   \[
   1.25 \times 2058 = 2572.5
   \]
4. Combine all parts of the equation:
   \[
   662 - 238.25 + 2572.5 = 2996.25
   \]

So, the estimated daily caloric expenditure for this individual is approximately 2996 kcal.

This calculation helps determine the number of calories a person needs to maintain their current weight based on their age, weight, height, sex, and physical activity level.
