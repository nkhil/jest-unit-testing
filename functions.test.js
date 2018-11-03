const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);    
});

test('Adds 2 + 2 to NOT equal 4', () => {
    expect(functions.add(2, 2)).not.toBe(5);    
});

test('Adds 22 + 2 to equal 24', () => {
    expect(functions.add(22, 2)).toBe(24);    
});

test('Adds -23 + 23 to NOT equal 1', () => {
    expect(functions.add(-23, 23)).not.toBe(1);    
});

test('should be null', () => {
    expect(functions.isNull()).toBeNull();    
});

