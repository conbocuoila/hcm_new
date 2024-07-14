import { useParams } from "react-router-dom";
import { getDetailsPlayer } from "../../server/api";
import { useEffect, useState } from "react";
import "./index.scss";
const Details = () => {
  const [value, setValue] = useState({});
  const { id } = useParams();
  const fetchDetailsData = async () => {
    const response = await getDetailsPlayer(id);
    setValue(response.data);
  };
  useEffect(() => {
    fetchDetailsData();
  }, []);
  return (
    <div className="wrapper__details">
      <p>
        <strong>playerName: </strong>
        {value.playerName}
      </p>
      <p>
        <strong>position: </strong>
        {value.position}
      </p>
      <p>
        <strong>team: </strong>
        {value.team}
      </p>
      <img src={value.image} width={200} />
      <p>
        <strong>PassingAccuracy: </strong>
        {value.PassingAccuracy} %
      </p>
      <p>
        <strong>minutesPlayed: </strong>
        {value.minutesPlayed}
      </p>
      <p>
        {value.isCaptain ? (
          <div
            style={{ background: "#ccc", padding: "10px 0", margin: "0 40px" }}
          >
            <strong>isCaptain: true</strong>
          </div>
        ) : (
          <p>
            <strong>isCaptain: </strong> false
          </p>
        )}
      </p>
    </div>
  );
};

export default Details;
