
const Manager = require('../lib/Manager');
const manager = new Manager('jay', '1234', 'jay@gmail.com', '510');

test('get value from constructor', () => {
    expect(manager.name).toBe('jay');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('jay@gmail.com');
    expect(manager.officeNumber).toBe('510');
});

test('get the get name method', () => {
    expect(manager.getName()).toBe('jay');
});

test('get the get id method', () => {
    expect(manager.getId()).toBe('1234');
});

test('get the get email method', () => {
    expect(manager.getEmail()).toBe('jay@gmail.com');
});

test('get the office number method', () => {
    expect(manager.getOfficeNumber()).toBe('510');
})

test('get the role from the get role method', () => {
    expect(manager.getRole()).toBe('Manager')
})