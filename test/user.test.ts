import { describe, it, expect} from 'bun:test';
import { User } from "user/user.ts";  

describe('User Package', () => { 
    it('should access from main package ', async () => {
        const user = new User('Kouseki');
        expect(user.name).toBe('Kouseki');
    })
})