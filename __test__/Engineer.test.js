
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('jay', '1234', 'jay@gmail.com', 'github');

test('get value from constructor', () => {
    expect(engineer.name).toBe('jay');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('jay@gmail.com');
    
});

test('get the get name method', () => {
    expect(engineer.getName()).toBe('jay');
});

test('get the get id method', () => {
    expect(engineer.getId()).toBe('1234');
});

test('get the get email method', () => {
    expect(engineer.getEmail()).toBe('jay@gmail.com');
});

test('get the role from the get role method', () => {
    expect(engineer.getRole()).toBe('Engineer');
})

test('get github method', () => {
    expect(engineer.getGithub()).toBe('github');
})