import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

/**
 * Hook to get data from API in react components
 * @param { number } userId - the user about we need information
 * @param { string } type - type of data we want
 * @returns { undefined | Object } - array of data
 */
export function useSportSeeApi(userId, type) {
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const endpoint = getEndpoint(userId, type);
  useEffect(() => {
    if (!endpoint) return;
    // setIsLoading(true);
    async function fetchData() {
      try {
        const url = `${BASE_URL}/${endpoint}`;
        const response = await fetch(url);
        const data = await response.json();
        const extractedData = extractData(data, type);
        setData(extractedData);
      } catch (err) {
        console.error(`Error on ${endpoint} : ${err}`);
        // setError(true);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data };
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
 * Extract Data
 * @param { string|Object } data
 * @param { string } type
 * @returns { undefined | string | number | Object | array.Object }
 */
function extractData(data, type) {
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
  // console.log(userData);
  if (userData) {
    const dailyActivity = [];

    for (let item of userData) {
      // eslint-disable-next-line no-unused-vars
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
  return;
  // or default
}

/**
 * get Data
 * @param { Object } userData
 * @returns { number } score number
 */
function getTodayScore(userData) {
  if (userData.data.score) {
    return userData.data.score;
  }
  if (userData.data.todayScore) {
    return userData.data.todayScore;
  }
  // or default
}

/**
 * get Data
 * @param { Object } userData
 * @returns { string } user first name
 */
function getFirstName(userData) {
  return userData.data.userInfos.firstName;
}

/**
 * get Data
 * @param { Object } userData
 * @returns { string } user first name
 */
function getKeyData(userData) {
  return userData.data.keyData;
}
