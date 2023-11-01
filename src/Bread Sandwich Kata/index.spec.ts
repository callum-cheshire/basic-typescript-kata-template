import { slices_to_name } from './index';
import { name_to_slices } from './index';

describe('Given a call to slices_to_name', () => {
    describe('When passes a number', () => {

        test('Then returns correct string', () => {
            const result = slices_to_name(0);
            expect(result).toBe(null);
        });

        test('Then returns correct string', () => {
            const result = slices_to_name(1);
            expect(result).toBe(null);
        });

        test('Then returns correct string', () => {
            const result = slices_to_name(2);
            expect(result).toBe('sandwich');
        });

        test('Then returns correct string', () => {
            const result = slices_to_name(3);
            expect(result).toBe('bread sandwich');
        });

        test('Then returns correct string', () => {
            const result = slices_to_name(4);
            expect(result).toBe('sandwich sandwich');
        });

        test('Then returns correct string', () => {
            const result = slices_to_name(5);
            expect(result).toBe('bread sandwich sandwich');
        });
    })
});

describe('Given a call to name_to_slices', () => {
    describe('When passed a string', () => {

        test('Then returns correct number', () => {
            const result = name_to_slices('');
            expect(result).toBe(null);
        });

        test('Then returns correct number', () => {
            const result = name_to_slices('sandwich');
            expect(result).toBe(2);
        });

        test('Then returns correct number', () => {
            const result = name_to_slices('bread sandwich');
            expect(result).toBe(3);
        });

        test('Then returns correct number', () => {
            const result = name_to_slices('sandwich sandwich');
            expect(result).toBe(4);
        });
    })
})