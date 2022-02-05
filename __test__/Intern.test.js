const Intern = require('../lib/Intern');
const intern = new Intern('jay', '1234', 'jay@gmail.com', 'Rice');


test('get value from constructor', () => {
    expect(intern.name).toBe('jay');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('jay@gmail.com');
    
});

test('get the get name method', () => {
    expect(intern.getName()).toBe('jay');
});

test('get the get id method', () => {
    expect(intern.getId()).toBe('1234');
});

test('get the get email method', () => {
    expect(intern.getEmail()).toBe('jay@gmail.com');
});

test('get the role from the get role method', () => {
    expect(intern.getRole()).toBe('Intern')
})