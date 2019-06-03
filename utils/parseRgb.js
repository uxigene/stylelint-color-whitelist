module.exports = input => {
    const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)/gi;
    const colors = input.match(regex);

    if(colors) {
        return colors.map(color => {
            const groups = regex.exec(input);

            return {
                type  : 'rgba',
                value : color,
                rgba  : {
                    r : parseInt(groups[1], 10),
                    g : parseInt(groups[2], 10),
                    b : parseInt(groups[3], 10),
                    a : parseFloat(groups[4] || 1)
                }
            }
        });
    }

    return [];
};