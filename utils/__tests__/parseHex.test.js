const parseHex = require('../parseHex');

describe('Parse HEX colors:', () => {
    let color1 = '#fff';
    let color2 = '#1e5799';
    let color3 = '#ffaaeef8';
    
    (() => {
        let parsed = parseHex(`color: ${color1}`);

        test(`Expect to have 1 color.`, () => {
            expect(parsed.length).toBe(1);
        });
    
        test(`Expect type to be "hex".`, () => {
            expect(parsed[0].type).toBe('hex');
        });
    
        test(`Expect value to be "${color1}".`, () => {
            expect(parsed[0].value).toBe(color1);
        });
    })();

    (() => {
        let parsed = parseHex(`background: linear-gradient(to bottom, ${color2} 0%, ${color3} 100%);`);

        test(`Expect to have 2 colors.`, () => {
            expect(parsed.length).toBe(2);
        });

        test(`Expect first color value to be "${color2}".`, () => {
            expect(parsed[0].value).toBe(color2);
        });

        test(`Expect second color value to be "${color3}".`, () => {
            expect(parsed[1].value).toBe(color3);
        });
    })();
});