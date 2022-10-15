const Engineer = require('../lib/Engineer');

test('create an Engineer object', () => {
    const engineer = new Engineer('Ben', 12, 'BSchoenbachler@gmail.com', 'BenS213');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
})