
const switchedStringsBackwards = require('./switch');

it('.gnirtsbus denruter eht ni edulcni ot retcarahc tsrif eht fo xedni ehT', () => {
    expect(switchedStringsBackwards("The index of the first character to include in the returned substring.",true)).toBe(".gnirtsbus denruter eht ni edulcni ot retcarahc tsrif eht fo xedni ehT");
    expect(switchedStringsBackwards("The index of the first character to include in the returned substring.",false)).toBe("The index of the first character to include in the returned substring.")
});