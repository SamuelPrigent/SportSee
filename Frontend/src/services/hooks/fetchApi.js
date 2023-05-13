import { useEffect, useState } from "react";
const BASE_URL = "http://localhost:3000";

/**
 * Hook to get data from API in react components
 * @param { number } userId - the user about we need information
 * @param { string } type - type of data we want
 * @returns { undefined | Object } - array of data
 */
export function useSportSeeApi(userId, type) {
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState({});
  const endpoint = getEndpoint(userId, type);
  useEffect(() => {
    if (!endpoint) return;
    async function fetchData() {
      try {
        const url = `${BASE_URL}/${endpoint}`;
        const response = await fetch(url);
        const data = await response.json();
        // get default data if "can not get user"
        if (data === "can not get user") {
          const defaultData = getDefaultData(type);
          setData(defaultData);
          setError(true);
        }
        // get user data
        else {
          const userData = getUserData(data, type);
          setData(userData);
        }
      } catch (err) {
        // get default data if any error
        const defaultData = getDefaultData(type);
        setData(defaultData);
        setError(true);
        console.error(`Error on ${endpoint} : ${err}`);
      } finally {
        //  setIsLoading(false);
      }
    }

    fetchData();
  }, [userId, type, endpoint]);

  return { data, error };
}

/**
 * Endpoint
 * @param { number } userId
 * @param { string } type
 * @returns { string } endpoint used to fetch API
 */
function getEndpoint(userId, type) {
  switch (type) {
    case "activity":
      return `user/${userId}/activity`;

    case "average-sessions":
      return `user/${userId}/average-sessions`;

    case "performance":
      return `user/${userId}/performance`;

    case "today-score":
      return `user/${userId}`;

    case "firstName":
      return `user/${userId}`;

    case "key-data":
      return `user/${userId}`;

    default:
      return null;
  }
}

/**
 * Default data
 * @param { string } type
 * @returns { undefined | string | number | Object | array.Object }
 */
function getDefaultData(type) {
  switch (type) {
    case "activity":
      return getDefaultDailyActivity();

    case "average-sessions":
      return getDefaultAverageSessions();

    case "performance":
      return getDefaultActivities();

    case "today-score":
      return 0;

    case "firstName":
      return "...";

    case "key-data":
      return getDefaultKeyData();

    default:
      return;
  }
}

/**
 * Extract Data
 * @param { string|Object } data
 * @param { string } type
 * @returns { undefined | string | number | Object | array.Object }
 */
function getUserData(data, type) {
  if (data) {
    switch (type) {
      case "activity":
        return getDailyActivity(data.data.sessions);

      case "average-sessions":
        return getAverageSessions(data.data.sessions);

      case "performance":
        return getActivities(data.data);

      case "today-score":
        return getTodayScore(data);

      case "firstName":
        return getFirstName(data);

      case "key-data":
        return getKeyData(data);

      default:
        throw new Error("Unknown type parameter: " + type);
    }
  } else {
    throw new Error("Missing data parameter.");
  }
}

/**
 * get Data
 * @param { array.Object } userData
 * @returns { array.Object } return a new array with data formated
 */
function getDailyActivity(userData) {
  if (userData) {
    const dailyActivity = [];
    for (let item of userData) {
      const [yyyy, mm, dd] = item.day.split("-");
      // push item data
      dailyActivity.push({
        day: `${dd}/${mm}`,
        kilogram: item.kilogram,
        calories: item.calories,
      });
    }
    return dailyActivity;
  }
  // or default
  return getDefaultDailyActivity();
}

/**
 * @returns { array.Object } default data
 */
function getDefaultDailyActivity() {
  const dailyActivity = [];
  let date = new Date(Date.now());
  for (let _ of "1234567") {
    let dateFr = new Intl.DateTimeFormat("fr").format(date);
    dailyActivity.push({
      day: dateFr.slice(0, 5),
      kilogram: 0,
      calories: 0,
    });
    date.setDate(date.getDate() - 1);
  }
  dailyActivity.reverse();
  return dailyActivity;
}

/**
 * get Data
 * @param { array.Object } userData
 * @returns { array.Object } userData without modification
 */
function getAverageSessions(userData) {
  if (userData) {
    return userData;
  }
  // or default
  return getDefaultAverageSessions();
}

/**
 * @returns { array.Object } default data
 */
function getDefaultAverageSessions() {
  const averageSessions = [
    {
      day: 1,
      sessionLength: 0,
    },
    {
      day: 2,
      sessionLength: 0,
    },
    {
      day: 3,
      sessionLength: 0,
    },
    {
      day: 4,
      sessionLength: 0,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 0,
    },
  ];
  return averageSessions;
}

/**
 * get Data
 * @param { array.Object } userData
 * @returns { array.Object } data re-order and formated for recharts radar
 */
function getActivities(userData) {
  if (userData) {
    const performanceData = userData.data.map((data) => ({
      value: data.value,
      kind: userData.kind[data.kind],
    }));
    const performanceArrayReOrder = [
      { kind: "Intensité", value: performanceData[5].value },
      { kind: "Vitesse", value: performanceData[4].value },
      { kind: "Force", value: performanceData[3].value },
      { kind: "Endurance", value: performanceData[2].value },
      { kind: "Energie", value: performanceData[1].value },
      { kind: "Cardio", value: performanceData[0].value },
    ];
    return performanceArrayReOrder;
  }
  // or default
  return getDefaultActivities();
}

/**
 * @returns { array.Object } default data
 */
function getDefaultActivities() {
  const ACTIVITY_BY_KIND = {
    1: "Intensité",
    2: "Vitesse",
    3: "Force",
    4: "Endurance",
    5: "Energie",
    6: "Cardio",
  };

  const activities = [];

  for (let key in ACTIVITY_BY_KIND) {
    activities.push({
      kind: ACTIVITY_BY_KIND[key],
      value: 0,
    });
  }

  return activities;
}

/**
 * get Data
 * @param { Object } userData
 * @returns { number } score number
 */
function getTodayScore(userData) {
  if (userData.data && userData.data.score) {
    return userData.data.score;
  }
  if (userData.data && userData.data.todayScore) {
    return userData.data.todayScore;
  }
  // or default
  return 0;
}

/**
 * get Data
 * @param { Object } userData
 * @returns { string } user first name
 */
function getFirstName(userData) {
  if (userData) {
    return userData.data.userInfos.firstName;
  }
  // or default
  return "...";
}

/**
 * get Data
 * @param { Object } userData
 * @returns { string } user first name
 */
function getKeyData(userData) {
  if (userData) {
    return userData.data.keyData;
  }
  // or default
  return getDefaultKeyData();
}

/**
 * @returns { Object } default data
 */
function getDefaultKeyData() {
  return {
    calorieCount: 0,
    proteinCount: 0,
    carbohydrateCount: 0,
    lipidCount: 0,
  };
}
