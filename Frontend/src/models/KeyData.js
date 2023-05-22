export class KeyData {
  calorieCount = 0;
  proteinCount = 0;
  carbohydrateCount = 0;
  lipidCount = 0;

  constructor(keyData) {
    if (keyData) {
      this.calorieCount = keyData.calorieCount;
      this.proteinCount = keyData.proteinCount;
      this.carbohydrateCount = keyData.carbohydrateCount;
      this.lipidCount = keyData.lipidCount;
    }
  }
}
