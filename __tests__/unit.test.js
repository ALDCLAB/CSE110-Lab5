// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Phone number tests
// True
test('valid with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

// True
test('valid without parentheses', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

// False
test('missing hyphens', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

// False
test('invalid parentheses', () => {
  expect(isPhoneNumber('(123-4)56-7890')).toBe(false);
});


// Email Tests
// True
test('valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

// True
test('valid 2-letter dot.name', () => {
  expect(isEmail('name@domain.co')).toBe(true);
});

// False
test('missing domain', () => {
  expect(isEmail('user@com')).toBe(false); 
});

// False
test('special characters', () => {
  expect(isEmail('user@domain.c!om')).toBe(false); 
});

// Password Test
// True
test('valid password', () => {
  expect(isStrongPassword('Pass123_')).toBe(true);
});

// True
test('valid longer password', () => {
  expect(isStrongPassword('A_bc123456789')).toBe(true);
});

// False
test('invalid starts with number', () => {
  expect(isStrongPassword('1password')).toBe(false); 
});

// False
test('invalid special symbol', () => {
  expect(isStrongPassword('P@ssword')).toBe(false); 
});

// Date Test
// True
test('valid date', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

// True
test('valid single-digit date', () => {
  expect(isDate('1/1/2021')).toBe(true);
});

// False
test('invalid separator', () => {
  expect(isDate('12-31-2020')).toBe(false);
});

// False
test('invalid format', () => {
  expect(isDate('12/31/20')).toBe(false);
});

// HEX test
// True
test('valid 3-digit', () => {
  expect(isHexColor('#abc')).toBe(true);
});

// True
test('valid 6-digit', () => {
  expect(isHexColor('a1b2c3')).toBe(true);
});

// False
test('invalid characters', () => {
  expect(isHexColor('#ghijkl')).toBe(false); 
});

// False
test('invalid length', () => {
  expect(isHexColor('#abcd')).toBe(false);
});