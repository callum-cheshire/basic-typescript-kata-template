import { likes } from "./index"

describe('Given a call to likes', () => {

    describe('When passed an empty array', () => {

        test('Then returns no one likes this', () => {
            expect(likes([])).toBe('no one likes this')
        })
    })

    describe('When passed an array with a single name', () => {

        test('Then returns {name} likes this', () => {
            const result = likes(['Peter']);
            expect(result).toBe('Peter likes this');
        });

        test('Then returns {name} likes this', () => {
            const result = likes(['Gerald']);
            expect(result).toBe('Gerald likes this');
        });
    });

    describe('When passed an array with two names', () => {

        test('Then returns {name} and {name} like this', () => {
            const result = likes(['Peter', 'Paul']);
            expect(result).toBe('Peter and Paul like this');
        });

        test('Then returns {name} and {name} like this', () => {
            const result = likes(['John', 'James']);
            expect(result).toBe('John and James like this');
        });
    });

    describe('When passed an array with three names', () => {

        test('Then returns {name}, {name} and {name} like this', () => {
            const result = likes(['Alfred', 'Archibold', 'Edward']);
            expect(result).toBe('Alfred, Archibold and Edward like this');
        });

        test('Then returns {name}, {name} and {name} like this', () => {
            const result = likes(['Harry', 'William', 'Steven']);
            expect(result).toBe('Harry, William and Steven like this');
        });
    });

    describe('When passed an array with four names or more', () => {

        test('Then returns {firstName}, {secondName} and x others like this, with x being the remaining amount of likes', () => {
            const result = likes(['Alfred', 'Archibold', 'Edward', 'Phillip']);
            expect(result).toBe('Alfred, Archibold and 2 others like this');
        });

        test('Then returns {name}, {name} and {name} like this', () => {
            const result = likes(['Harry', 'William', 'Steven', 'George']);
            expect(result).toBe('Harry, William and 2 others like this');
        });
    });
})