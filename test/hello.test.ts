import { describe, it, expect} from 'bun:test';
import { sayHello } from '../src/hello';    

describe('Bun Test Runner', () => { 
    it('should support unit test', async () => {
        const response = sayHello('Kouseki');
        expect(response).toBe('Hello, Kouseki!');
    })

    it('should support unit test with kuuhaku', async () => {
        const response = sayHello('Kuuhaku');
        expect(response).toBe('Hello, Kuuhaku!');
    })
})