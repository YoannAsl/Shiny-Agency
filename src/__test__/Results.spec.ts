import { formatJobTitle, formatQueryParams } from '../pages/Results';

describe('The formatJobTitle function', () => {
    it('should add a comma to a word if it is not the last element of the list', () => {
        const expectedResult = 'item1, ';
        expect(formatJobTitle('item1', 3, 0)).toBe(expectedResult);
    });

    it('should not add a comma to a word if it is the last element of the list', () => {
        const expectedResult = 'item3';
        expect(formatJobTitle('item3', 3, 2)).toBe(expectedResult);
    });
});

describe('The formatQueryParams function', () => {
    it('should return the right format for the params', () => {
        const expectedResult = 'a1=true';
        expect(formatQueryParams({ 1: true })).toBe(expectedResult);
    });
    it('should concatenate params with an &', () => {
        const expectedResult = 'a1=true&a2=true';
        expect(formatQueryParams({ 1: true, 2: true })).toBe(expectedResult);
    });
});
