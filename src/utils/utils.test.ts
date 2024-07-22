import { calculateTriangleArea } from './calculateTriangleArea';
import { generateNumbers } from './generateNumbers';

test('calculates triangle area correctly', () => {
    const height = 10;
    const width = 20;
    const expectedArea = 0.5 * height * width;

    expect(calculateTriangleArea(height, width)).toBe(expectedArea);
});

test('generates numbers correctly', () => {
    const result = generateNumbers(5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
