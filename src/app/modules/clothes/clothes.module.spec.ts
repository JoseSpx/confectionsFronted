import { ClothesModule } from './clothes.module';

describe('ClothesModule', () => {
  let clothesModule: ClothesModule;

  beforeEach(() => {
    clothesModule = new ClothesModule();
  });

  it('should create an instance', () => {
    expect(clothesModule).toBeTruthy();
  });
});
