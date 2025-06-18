# Market Inventory System

This project is a JavaScript-based inventory management system for a market.  
Features include:
- Searching inventory by name or barcode
- Adding, updating, removing items
- Filtering and sorting items by category, price, quantity, and more
- Selling and restocking items

## Usage

- Run the JavaScript file to use the inventory functions.
- Customize functions as needed.

## To Do

- Add advanced filtering options
- Integrate with barcode scanners
- Improve UI with HTML/CSS frontend

---

*Last updated: 2025-06-13*

## Progress Updates

### 2025-06-18

- Implemented thorough input validation for the `addInventory` function:
  - Checked for empty or invalid strings on `name`, `category`, and `barcode`.
  - Validated `price` as a non-negative number, using `parseFloat` and `isNaN`.
  - Validated `quantity` as a non-negative integer using `Number.isInteger`.
  - Added duplicate prevention for `name` (case-insensitive) and `barcode`.

- Built an advanced multiple-conditions filter function:
  - Supports filtering by `name`, `category`, `barcode` (using `.startsWith()`), `price`, and `quantity`.
  - Used regex with `.match()` to parse conditional operators (`<=`, `>=`, `==`, etc.) for price and quantity.
  - Practiced and reinforced knowledge of `.includes()`, `.toLowerCase()`, `.startsWith()`, and `typeof`.

- Polished error handling:
  - Consistent console error messages for invalid inputs.
  - Proper use of `return` to exit functions on invalid data.

- Learned important JavaScript fundamentals:
  - `typeof` operator usage for type checking.
  - String trimming to handle user input whitespace.
  - Boolean logic with `&&`, `||`, and `!`.

- Prepared codebase for next phase: integrating DOM/UI and further testing.

---






## About Me

I am a self-taught developer on a journey to become a professional software engineer.  
This project is part of my hands-on learning process to strengthen my JavaScript and programming skills.

My projects focus on applying coding to improve and modernize my parents' traditional business, which was handed down to me.  
By building practical tools tailored to real needs, I aim to create solutions that make day-to-day operations more efficient.

I use ChatGPT as a mentor and coding guide to help me understand concepts, improve my code, and build real-world applications.  
My goal is to keep learning, building projects, and growing as a developer every day.