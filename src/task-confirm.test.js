// your logic function returning the actual package.json dependencies
import { serializePackageJson } from './App';
import json from './complex-package';
import resp from '../public/fixtures/result-package';

// Converts a Map to a plain object
const mapToObject = (map) => {
    return Array.from(map).reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
};

describe('Test Correct function result', () => {
    it('should render the dependencies correctly', () => {
        const dependencies = serializePackageJson(json);
        // if dependencies is a Map you can use this function to convert to object
        const result = mapToObject(dependencies);
        expect(result).toEqual(resp);
    });
});
