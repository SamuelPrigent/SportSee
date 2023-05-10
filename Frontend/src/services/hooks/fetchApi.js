import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

//
export function useSportSeeApi(userId, type) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  //
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
        setError(true);
      } finally {
        // setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, error };
}

// ==== Endpoint ====
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

// ==== Extract Data ====
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
        console.error("extractDataByService error.");
        return;
    }
  } else {
    console.error("extractDataByService error.");
    return;
  }
}

// ===== Performance =====
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

// ===== Average =====
function getAverageSessions(userData) {
  if (userData) {
    return userData;
  }
  // or default
}

// ===== Score =====
function getTodayScore(userData) {
  // console.log(userData);
  if (userData.data.score) {
    return userData === "can not get user" ? 0 : userData.data.score;
  }
  if (userData.data.todayScore) {
    return userData === "can not get user" ? 0 : userData.data.todayScore;
  }
  // or default
}

// ===== Activity =====
function getDailyActivity(userData) {
  // console.log(userData);
  if (userData) {
    const dailyActivity = [];

    for (let item of userData) {
      // eslint-disable-next-line no-unused-vars
      const [yyyy, mm, dd] = item.day.split("-");

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

// ===== Name Surname =====
function getFirstName(userData) {
  return userData === "can not get user"
    ? "unknown user"
    : userData.data.userInfos.firstName;
}

// ===== Key Data =====
function getKeyData(userData) {
  return userData === "can not get user"
    ? getDefaultKeyData()
    : userData.data.keyData;
}
