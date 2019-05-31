module.exports = input => {
    const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/gi;
    const colors = input.match(regex);

    if(colors) {
        return colors.map(color => {
            const grougs = regex.exec(input);

            return {
                type  : 'rgba',
                value : color,
                rgba  : {
                    r : parseInt(grougs[1], 10),
                    g : parseInt(grougs[2], 10),
                    b : parseInt(grougs[3], 10),
                    a : parseFloat(grougs[4] || 0)
                }
            }
        });
    }

    return [];
};