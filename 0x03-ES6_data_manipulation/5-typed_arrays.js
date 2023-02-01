export default function (length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
