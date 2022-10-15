const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern('Ben', 12, 'BSchoenbachler@gmail.com', 'UNA');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})