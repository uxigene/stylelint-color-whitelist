module.exports = input => {
    const colors = input.match(/#([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{3})/gi);

    if(colors) {
        return colors.map(color => {
            return {
                type  : 'hex',
                value : color
            }
        });
    }

    return [];
};