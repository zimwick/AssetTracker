export default function ValidateDollarAmount(value) {
  // Regular expression to match a dollar amount with two decimal places
  const regex = /^\d+(\.\d{2})?$/;
  // Check if the value matches the pattern and is a finite number
  return regex.test(value) && isFinite(parseFloat(value));
}
