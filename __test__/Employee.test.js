
const Employee = require('../lib/Employee');
const employee = new Employee('jay','1234', 'jay@gmail.com');

test('create employee object', () => {
    expect(employee.name).toBe('jay');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('jay@gmail.com');
});

test('get the get name method', () => {
    expect(employee.getName()).toBe('jay');
});

test('get the get id method', () => {
    expect(employee.getId()).toBe('1234');
});

test('get the get email method', () => {
    expect(employee.getEmail()).toBe('jay@gmail.com');
});

test('get the role from the get role method', () => {
    expect(employee.getRole()).toBe('Employee')
})


