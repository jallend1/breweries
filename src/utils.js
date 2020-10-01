export const formatPhone = (phone) => {
  // Ensures there is actually a phone number of proper length, and then returns a formatted one
  const match = phone.match(/(\d{3})(\d{3})(\d{4})/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
};
