const Manager = require('../lib/Manager');

test('create an Manager object', () => {
    const manager = new Manager('Ben', 12, 'BSchoenbachler@gmail.com', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})