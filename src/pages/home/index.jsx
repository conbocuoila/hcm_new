import { useEffect, useState } from "react";
import { getAllPlayers } from "../../server/api";
import "./index.scss";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [allPlayers, setAllPlayers] = useState([]);
  const navigate = useNavigate();
  const fetchAllPlayers = async () => {
    const response = await getAllPlayers();
    setAllPlayers(response.data);
  };
  useEffect(() => {
    fetchAllPlayers();
  }, []);
  const handleNavigateDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="wrapper_home">
      {allPlayers
        .filter((item) => item.position === "Forward")
        .map((item) => {
          return (
            <div key={item.id} className="container">
              <p>
                <strong
                  style={{ cursor: "pointer" }}
                  onClick={() => handleNavigateDetails(item.id)}
                >
                  playerName:{" "}
                </strong>
                {item.playerName}
              </p>
              <p>
                <strong>isCaptain: </strong>
                {item.isCaptain ? "true" : "false"}
              </p>
              <p>
                <strong>image: </strong>
                {item.image}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
