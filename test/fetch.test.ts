import { describe, it, expect} from 'bun:test';

describe('Web API', () => { 
    it('should be support fetch', async () => { 
        const res = await fetch('https://example.com')
        expect(res.status).toBe(200);
        expect(res.headers.get('Content-Type')).toContain('text/html');
        expect(await res.text()).toContain('Example Domain');
    })
})