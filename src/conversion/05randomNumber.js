/**
 * @returns {number} a random number between 1 and 10 (inclusive)
 */
const randomNumber = () => {
    const fraction = Math.random(); //a number between 0 and 1 (exclusive)
    return 1 + Math.floor(fraction * 10);
}

export { randomNumber };
