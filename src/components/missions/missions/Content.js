import React from "react";
import "./Content.css";
import Mission from "./Mission";

import { useState, useEffect } from "react";
import {
  colRefUsers,
  colRefUserMission,
  colRefMissions,
} from "../../../firebase";
import { getDocs } from "firebase/firestore";
import { UserAuth } from "../../../context/AuthContext";

const Content = (props) => {
  const [missions, setMissions] = useState([]);
  console.log("🚀 ~ file: Content.js:16 ~ Content ~ missions:", missions)
  const [userMissionLinks, setUserMissionLinks] = useState([]);
  const [userDoc, setUserDoc] = useState({});

  const { user } = UserAuth();

  let tmp = [],
    tmp2 = [];

  useEffect(() => {
    const getMissions = async () => {
      const data = await getDocs(colRefMissions);
      setMissions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMissions();

    const getUserMissionLinks = async () => {
      const data = await getDocs(colRefUserMission);
      setUserMissionLinks(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getUserMissionLinks();

    const getUserDoc = async () => {
      const data = await getDocs(colRefUsers);
      data.docs.forEach((doc) => {
        if (doc.data().email === localStorage.email) {
          setUserDoc({ ...doc.data(), id: doc.id });
          return;
        }
      });
    };
    getUserDoc();
  }, []);


  let cnt = 0;

  return (
    <>
      {userDoc.role === "admin" || !user ? (
        <div>
          {missions.map((mission) => {
            cnt++;
            return (
              <div key={mission.id}>
                <Mission
                  title={mission.title}
                  content={mission.content}
                  address={mission.address}
                  number={mission.number}
                  score={mission.score}
                  status={mission.status}
                  statusText={mission.statusText}
                  userStatus={null}
                  userStatusText={null}
                  // volunteer={mission.volunteer}
                  userRole={userDoc.role}
                  volunteers={mission.volunteers}
                  volunteersRequired={mission.volunteersRequired}
                  id={mission.id}
                // missionReload={missionReload}
                />
              </div>

            );
          })}
        </div>
      ) : (
        <div>
          {userMissionLinks.map((userMissionLink) => {
            if (userMissionLink.userEmail === userDoc.email) {
              return missions.map((mission) => {
                if (
                  mission.status !== "done" &&
                  //mission.volunteersLength < mission.volunteersRequired &&
                  mission.id === userMissionLink.missionId &&
                  userMissionLink.userStatus !== "done"
                ) {
                  tmp = [...tmp, mission.id];
                  cnt++;
                  return (
                    <div key={mission.id}>
                      <Mission
                        title={mission.title}
                        content={mission.content}
                        address={mission.address}
                        number={mission.number}
                        score={mission.score}
                        status={mission.status}
                        statusText={mission.statusText}
                        userStatus={userMissionLink.userStatus}
                        userStatusText={userMissionLink.userStatusText}
                        userRole={userDoc.role}
                        // volunteer={mission.volunteer}
                        volunteers={mission.volunteers}
                        id={mission.id}
                      // missionReload={missionReload}
                      />
                    </div>

                  );
                } else return null
              });
            } else return null
          })}
          {missions.map((mission) => {
            if (
              mission.status !== "done" &&
              mission.volunteersLength < mission.volunteersRequired &&
              !tmp.includes(mission.id) &&
              !tmp2.includes(mission.id) &&
              mission.status === "registerOpen"
            ) {
              cnt++;
              return (
                <div key={mission.id}>
                  <Mission
                    title={mission.title}
                    content={mission.content}
                    address={mission.address}
                    number={mission.number}
                    score={mission.score}
                    status={mission.status}
                    statusText={mission.statusText}
                    userStatus={null}
                    userStatusText={null}
                    // volunteer={mission.volunteer}
                    userRole={userDoc.role}
                    volunteers={mission.volunteers}
                    volunteersRequired={mission.volunteersRequired}
                    id={mission.id}
                  // missionReload={missionReload}
                  />
                </div>

              );
            } else return null
          })}

          {userMissionLinks.map((userMissionLink) => {
            if (
              userMissionLink.userEmail === userDoc.email &&
              userMissionLink.userStatus === "done"
            ) {
              return missions.map((mission) => {
                if (mission.id === userMissionLink.missionId) {
                  tmp2 = [...tmp2, mission.id];
                  cnt++;
                  return (
                    <div key={mission.id}>
                      <Mission
                        title={mission.title}
                        content={mission.content}
                        address={mission.address}
                        number={mission.number}
                        score={mission.score}
                        status={mission.status}
                        statusText={mission.statusText}
                        userStatus={userMissionLink.userStatus}
                        userStatusText={userMissionLink.userStatusText}
                        userRole={userDoc.role}
                        // volunteer={mission.volunteer}
                        volunteers={mission.volunteers}
                        id={mission.id}
                      // missionReload={missionReload}
                      />
                    </div>

                  );
                } else return null
              });
            } else return null
          })}
        </div>
      )}
      {cnt === 0 ? (
        <div className="missions--empty_notification">
          Chưa có nhiệm vụ nào, bạn hãy quay lại sau nhé!
        </div>
      ) : null}
    </>
  );
};

export default Content;
