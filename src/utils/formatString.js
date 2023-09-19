export default function formatString(inputString) {
  const words = inputString.split(' ');
  const formattedWords = words.map((word) => {
    if (word.length > 0) {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      return firstLetter + restOfWord;
    }
    return '';
  });
  return formattedWords.join(' ');
}
