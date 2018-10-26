import { RealtyProRoutingModule } from './realty-pro-routing.module';

describe('RealtyProRoutingModule', () => {
  let realtyProRoutingModule: RealtyProRoutingModule;

  beforeEach(() => {
    realtyProRoutingModule = new RealtyProRoutingModule();
  });

  it('should create an instance', () => {
    expect(realtyProRoutingModule).toBeTruthy();
  });
});
