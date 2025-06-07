import { GenericHealth } from '../src/generic/health';

describe('GenericHealth', () => {
  it('should return status ok', async () => {
    const health = new GenericHealth();
    const result = await health.status();
    expect(result).toHaveProperty('status', 'ok');
  });
});
