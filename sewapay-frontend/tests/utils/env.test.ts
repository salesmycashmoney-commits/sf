import { validateEnv } from '@/utils/env';

describe('validateEnv', () => {
  it('throws error if VITE_API_BASE_URL is missing', () => {
    const originalEnv = { ...import.meta.env };
    // @ts-ignore
    import.meta.env.VITE_API_BASE_URL = '';
    expect(() => validateEnv()).toThrow(/Missing required environment variables/);
    // @ts-ignore
    import.meta.env = originalEnv;
  });
});
