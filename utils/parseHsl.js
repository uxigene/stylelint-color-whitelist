module.exports = input => {
    const regex = /hsla?\((\d+),\s*(\d+%),\s*(\d+%)(?:,\s*(\d+(?:\.\d+)?))?\)/gi;
    const colors = input.match(regex);

    if(colors) {
        return colors.map(color => {
            const grougs = regex.exec(input);

            return {
                type  : 'hsla',
                value : color,
                hsla  : {
                    h : grougs[1],
                    s : grougs[2],
                    l : grougs[3],
                    a : grougs[4] || 1
                }
            }
        });
    }

    return [];
};