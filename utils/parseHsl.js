module.exports = input => {
    const regex = /hsla?\((\d+),\s*(\d+%),\s*(\d+%)(?:,\s*(\d+(?:\.\d+)?))?\)/gi;
    const colors = input.match(regex);

    if(colors) {
        return colors.map(color => {
            const groups = regex.exec(input);

            return {
                type  : 'hsla',
                value : color,
                hsla  : {
                    h : groups[1],
                    s : groups[2],
                    l : groups[3],
                    a : groups[4] || 1
                }
            }
        });
    }

    return [];
};