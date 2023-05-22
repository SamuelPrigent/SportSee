export class PerformanceData {
  data = [
    {
      value: 0,
      kind: "Intensité",
    },
    {
      value: 0,
      kind: "Vitesse",
    },
    {
      value: 0,
      kind: "Force",
    },
    {
      value: 0,
      kind: "Endurance",
    },
    {
      value: 0,
      kind: "Energie",
    },
    {
      value: 0,
      kind: "Cardio",
    },
  ];
  constructor(userData) {
    if (userData) {
      this.data = userData;
    }
  }

  formated() {
    const userDataObject = this.data;
    //
    const kindMap = {};
    const kindArray = Object.entries(userDataObject.kind).map(
      ([key, value]) => {
        const entry = {};
        entry[key] = value;
        return entry;
      }
    );
    //
    for (const entry of kindArray) {
      const key = Object.keys(entry)[0];
      const value = entry[key];
      kindMap[key] = value;
    }
    //
    const userDataNewFormat = userDataObject.data.map((entry) => {
      const kind = kindMap[entry.kind];
      return {
        value: entry.value,
        kind: kind,
      };
    });
    const kindTranslation = {
      cardio: "Cardio",
      energy: "Energie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    const userDataInFrench = userDataNewFormat.map(({ value, kind }) => {
      return {
        value,
        kind: kindTranslation[kind] || kind,
      };
    });

    const userDataReOrder = userDataInFrench.reverse();
    return userDataReOrder;
  }
}
