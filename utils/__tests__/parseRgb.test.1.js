const parseRgb = require('../parseRgb');

describe('Parse RGB and RGBA colors:', () => {
    let r1 = 10;
    let g1 = 20;
    let b1 = 30;

    let r2 = 40;
    let g2 = 50;
    let b2 = 60;
    let a2 = 0.5;

    let color1 = `rgb(${r1}, ${g1}, ${b1})`;
    let color2 = `rgba(${r2}, ${g2}, ${b2}, ${a2})`;
    
    (() => {
        let parsed = parseRgb(`color: ${color1}`);

        test(`Expect to have 1 color.`, () => {
            expect(parsed.length).toBe(1);
        });
    
        test(`Expect type to be "rgba".`, () => {
            expect(parsed[0].type).toBe('rgba');
        });
    
        test(`Expect value to be "${color1}".`, () => {
            expect(parsed[0].value).toBe(color1);
        });

        test(`Expect red value to be "${r1}".`, () => {
            expect(parsed[0].rgba.r).toBe(r1);
        });

        test(`Expect green value to be "${g1}".`, () => {
            expect(parsed[0].rgba.g).toBe(g1);
        });

        test(`Expect blue value to be "${b1}".`, () => {
            expect(parsed[0].rgba.b).toBe(b1);
        });

        test(`Expect opacity value to be "1".`, () => {
            expect(parsed[0].rgba.a).toBe(1);
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
            expect(parsed[1].rgba.a).toBe(a2);
        });
    })();
});