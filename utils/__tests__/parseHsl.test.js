const parseRgb = require('../parseHsl');

describe('Parse HSL and HSLA colors:', () => {
    let h1 = '0';
    let s1 = '0%';
    let l1 = '100%';

    let h2 = '100';
    let s2 = '50%';
    let l2 = '40%';
    let a2 = '0.5';

    let color1 = `hsl(${h1}, ${s1}, ${l1})`;
    let color2 = `hsla(${h2}, ${s2}, ${l2}, ${a2})`;
    
    (() => {
        let parsed = parseRgb(`color: ${color1}`);

        test(`Expect to have 1 color.`, () => {
            expect(parsed.length).toBe(1);
        });
    
        test(`Expect type to be "hsla".`, () => {
            expect(parsed[0].type).toBe('hsla');
        });
    
        test(`Expect value to be "${color1}".`, () => {
            expect(parsed[0].value).toBe(color1);
        });

        test(`Expect hue value to be "${h1}".`, () => {
            expect(parsed[0].hsla.h).toBe(h1);
        });

        test(`Expect saturation value to be "${s1}".`, () => {
            expect(parsed[0].hsla.s).toBe(s1);
        });

        test(`Expect lightness value to be "${l1}".`, () => {
            expect(parsed[0].hsla.l).toBe(l1);
        });

        test(`Expect opacity value to be "1".`, () => {
            expect(parsed[0].hsla.a).toBe(1);
        });
    })();

    (() => {
        let parsed = parseRgb(`background: linear-gradient(to bottom, ${color1} 0%, ${color2} 100%);`);

        test(`Expect to have 2 colors.`, () => {
            expect(parsed.length).toBe(2);
        });

        test(`Expect first color value to be "${color1}".`, () => {
            expect(parsed[0].value).toBe(color1);
        });

        test(`Expect second color value to be "${color2}".`, () => {
            expect(parsed[1].value).toBe(color2);
        });

        test(`Expect second color alpha value to be "${a2}".`, () => {
            expect(parsed[1].hsla.a).toBe(a2);
        });
    })();
});