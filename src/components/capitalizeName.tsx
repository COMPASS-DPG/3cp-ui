export const capitalizeName = (inputString: string) => {
  // Replace numbers with empty strings
  const stringWithoutNumbers = inputString.replace(/\d/g, '');

  // Split the modified string into words using space as a separator
  const words = stringWithoutNumbers.split(' ');

  // Capitalize the first letter of each word
  const transformedWords = words.map((word) => {
    if (word.match(/[a-zA-Z]/)) {
      // If the word contains alphabetic characters, capitalize the first letter
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word; // Keep the word as is if it contains non-alphabetic characters
  });

  // Join the transformed words with spaces to form the final string
  const result = transformedWords.join(' ');
  // Trim spaces from the left and right
  return result.trimStart();
};
