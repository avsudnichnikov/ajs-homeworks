import Validator from '../Validator';

test('simple', () => {
  const username = 'admin';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('middle capital letter', () => {
  const username = 'sKYWALKEr';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('first letter capital', () => {
  const username = 'HanSolo';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('last letter capital', () => {
  const username = 'bazzZ';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('only capital letter', () => {
  const username = 'YODA';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('one digit', () => {
  const username = 'C3PO';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('three digit in row', () => {
  const username = 'starki111er';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('two by two digit', () => {
  const username = 'he11oT43re';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('all digits allowed', () => {
  const username = 'a1a2a3a4a5a6a7a8a9a0a';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('dash allowed', () => {
  const username = 'a-a';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('low dash allowed', () => {
  const username = 'a_a';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('only dash', () => {
  const username = 'O____O';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('difficult', () => {
  const username = 'a_-123______---qWWWWWWWW-_-_-_123ww987a';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('short username', () => {
  const username = 'a';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('ky1000ren - four digit in row', () => {
  const username = 'ky1000ren';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('first digit', () => {
  const username = '1player';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('last digit', () => {
  const username = 'r2d2';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('only digit', () => {
  const username = '123';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('first dash', () => {
  const username = '-prop';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('last dash', () => {
  const username = 'prop-';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('first low dash', () => {
  const username = '_prop';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('last low dash', () => {
  const username = 'prop_';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('first wrong symbol', () => {
  const username = '#prop';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('last wrong symbol', () => {
  const username = 'prop#';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('middle wrong symbol', () => {
  const username = 'prince$sleya';
  expect(Validator.validateUsername(username)).toBeFalsy();
});
