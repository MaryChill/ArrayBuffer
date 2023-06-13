import ArrayBufferConverter from '../index';

test('check load', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = ArrayBufferConverter.load(data);
  expect(result.byteLength).toEqual(106);
});

test('check toString', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const result = ArrayBufferConverter.load(data);
  expect(ArrayBufferConverter.toString(result)).toEqual(data);
});
