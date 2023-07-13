
const isNumberValue = (string: string): boolean => {
    const parsedValue = parseInt(string, 10);

   return (!isNaN(parsedValue) && typeof parsedValue === "number");

} 

const isConsistPolishCountryCod = (string: string, countryCode: string = '+48'): boolean => {
    const arrayFromString = Array.from(string);
    const firstThreeLetters = arrayFromString.filter((_, index) => index < 3);
    const stringFromArray = firstThreeLetters.reduce((accumulator, current) => `${accumulator}${current}` , '');

    return stringFromArray.includes(countryCode);
}

const isEmail = (string: string): boolean => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(string);
  };

const checkTheContactMethod = (string: string): string | null => {
    const stringWithoutWhitespaces = string.slice().replace(/\s/g, "");
    
    if (
       (isConsistPolishCountryCod(stringWithoutWhitespaces) && stringWithoutWhitespaces.length === 12) 
       || (isNumberValue(stringWithoutWhitespaces) && stringWithoutWhitespaces.length === 9)
    ) {
        return `tel:${string}`;   
    }

    if (isEmail((stringWithoutWhitespaces))) {
        return `mailto:${string}`;
    }

    return null;
} 

export { checkTheContactMethod };
