export const Capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export const PokedexNumber = (number) => {
    return number.toString().padStart(3, '0');
}