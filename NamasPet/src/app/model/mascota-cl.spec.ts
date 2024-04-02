import { MascotaCL } from './mascota-cl';

describe('MascotaCL', () => {
  it('should create an instance', () => {
    expect(new MascotaCL(0, "", "", "", 0, false, 0, 0,0)).toBeTruthy();
  });
});
