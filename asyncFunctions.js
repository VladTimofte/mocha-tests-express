
// asyncFunctions.js
import Calculator from './calculator.js';

const calculator = new Calculator();

export function fetchData(success = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve('Data fetched successfully');
        } else {
          reject(new Error('Failed to fetch data'));
        }
      }, 1000); // Simulate a delay
    });
  }
  
  export function multiplyAsync(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(calculator.multiply(a, b));
      }, 500); // Simulate a delay
    });
  }
  