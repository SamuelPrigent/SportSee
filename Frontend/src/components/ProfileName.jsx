import React from "react";
// API
import { useSportSeeApi } from "../services/hooks/fetchApi.js";

function ProfileName({ userId }) {
  const { data } = useSportSeeApi(userId, "firstName");
  if (typeof data === "string") {
    return <div className="profileNameColor">{data}</div>;
  } else {
    return <div className="profileNameColor"></div>;
  }
}

export default ProfileName;
