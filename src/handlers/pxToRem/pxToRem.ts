const pxToRem = (px: number | string): string => {
    const baseFontSize = 16;

    if (typeof px === 'number') {
        const resultInRem = px / baseFontSize;

        return `${resultInRem}rem`;
    } else {
        const arrayWithValues = (px as string).split(' ');
        const result = arrayWithValues.reduce((accumulator, current) => {
            if (current.includes('rem') || current.includes('em') || current.includes('%') || current.includes('auto')) {
                return `${accumulator} ${current}`;
            }

            if (current.includes('px')) {
                const numberFromString = parseFloat(current.replace('px', ''));
                const result = numberFromString / baseFontSize;

                return `${accumulator} ${result}rem`;
            } else {
                const numberFromString = parseFloat(current);
                const result = numberFromString / baseFontSize;

                return `${accumulator} ${result}rem`;
            }
        }, '');

        return result;
    }
}

export { pxToRem };





