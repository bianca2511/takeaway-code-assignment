import { describe, it, expect } from 'vitest';
import { transformRestaurantData } from './restaurantDataTransform';

describe('transformRestaurantData', () => {
    it('should transform restaurant data correctly', () => {
        const input = [{
            name: 'Curry Queen',
            uniqueName: 'curry-queen-islington',
            address: { firstLine: '1 Shenfield Street' },
            rating: { starRating: 5 },
            cuisines: [{ name: 'Indian' }, { name: 'Vegetarian' }]
        }];

        const result = transformRestaurantData(input);

        expect(result[0].name).toBe('Curry Queen');
        expect(result[0].rating).toBe(5);
        expect(result[0].address).toBe('1 Shenfield Street');
        expect(result[0].cuisines).toEqual(['Indian', 'Vegetarian']);
    });

    it('should return only first 10 restaurants', () => {
        const input = [];
        for (let i = 0; i < 25; i++) {
            input.push({
                name: `Restaurant ${i}`,
                uniqueName: `rest-${i}`,
                address: { firstLine: `Street ${i}` },
                rating: { starRating: 4 },
                cuisines: []
            });
        }

        const result = transformRestaurantData(input);
        expect(result.length).toBe(10);
    });

    it('should handle null rating', () => {
        const input = [{
            name: 'Test Restaurant',
            uniqueName: 'test',
            address: { firstLine: 'Street' },
            rating: null,
            cuisines: []
        }];

        const result = transformRestaurantData(input);
        expect(result[0].rating).toBe(0);
    });

    it('should handle null address', () => {
        const input = [{
            name: 'Test',
            uniqueName: 'test',
            address: null,
            rating: { starRating: 4 },
            cuisines: []
        }];

        const result = transformRestaurantData(input);
        expect(result[0].address).toBe('Address not available');
    });

    it('should handle empty cuisines', () => {
        const input = [{
            name: 'Test',
            uniqueName: 'test',
            address: { firstLine: 'Street' },
            rating: { starRating: 4 },
            cuisines: []
        }];

        const result = transformRestaurantData(input);
        expect(result[0].cuisines).toEqual([]);
    });

    it('should handle null input', () => {
        const result = transformRestaurantData(null);
        expect(result).toEqual([]);
    });

    it('should handle empty array', () => {
        const result = transformRestaurantData([]);
        expect(result).toEqual([]);
    });
    it('should handle missing uniqueName', () => {
        const input = [{
            name: 'Test',
            uniqueName: null,
            address: { firstLine: 'Street' },
            rating: { starRating: 4 },
            cuisines: []
        }];

        const result = transformRestaurantData(input);
        expect(result[0].uniqueName).toBe('unknown');
    });

    it('should handle missing restaurant name', () => {
        const input = [{
            name: null,
            uniqueName: 'test',
            address: { firstLine: 'Street' },
            rating: { starRating: 4 },
            cuisines: []
        }];

        const result = transformRestaurantData(input);
        expect(result[0].name).toBe('Unnamed Restaurant');
    });

    it('should handle mixed valid and invalid data', () => {
        const input = [
            {
                name: 'Good Restaurant',
                uniqueName: 'good',
                address: { firstLine: 'Good Street' },
                rating: { starRating: 5 },
                cuisines: [{ name: 'Italian' }]
            },
            {
                name: null,
                uniqueName: null,
                address: null,
                rating: null,
                cuisines: null
            }
        ];

        const result = transformRestaurantData(input);
        expect(result[1].name).toBe('Unnamed Restaurant');
        expect(result[1].uniqueName).toBe('unknown');
        expect(result[1].address).toBe('Address not available');
        expect(result[1].rating).toBe(0);
        expect(result[1].cuisines).toEqual([]);
    });

});

