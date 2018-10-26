import { RealtyProModule } from './realty-pro.module';

describe('RealtyProModule', () => {
  let realtyProModule: RealtyProModule;

  beforeEach(() => {
    realtyProModule = new RealtyProModule();
  });

  it('should create an instance', () => {
    expect(realtyProModule).toBeTruthy();
  });
});
