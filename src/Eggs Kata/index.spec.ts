import { cookingTime } from './index';

describe('Given a call to cookingTime', () => {
    describe('When passed a positive number', () => {

    test.each`
    eggs | expected
    ${0} | ${0}
    ${1} | ${5}
    ${4} | ${5}
    ${8} | ${5}
    ${9} | ${10}
    ${16} | ${10}
    ${17} | ${15}
    ${18} | ${15}
    ${80} | ${50}
  `('Then returns the correct cooking time of $expected', ({ eggs, expected }) => {
        const result = cookingTime(eggs);
        expect(result).toBe(expected);
    });
    })
});