export default function isValidString(value: any): value is string {
  return typeof value === 'string' && !!value.length;
}
