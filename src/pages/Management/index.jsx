import { useEffect } from "react";
import { getAllPlayers } from "../../server/api";
import { useState } from "react";
import { deletePlayerById } from "../../server/api";

import "./index.scss";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Management = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [staffIdToDelete, setStaffIdToDelete] = useState(null);
  const [allPlayers, setAllPlayers] = useState([]);
  const fetchAllPlayer = async () => {
    const response = await getAllPlayers();
    setAllPlayers(response.data);
  };
  useEffect(() => {
    fetchAllPlayer();
  }, []);
  const handleDelete = (id) => {
    setStaffIdToDelete(id);
    setShowConfirm(true);
  };
  const handleConfirmDelete = async () => {
    await deletePlayerById(staffIdToDelete);
    setAllPlayers(allPlayers.filter((item) => item.id !== staffIdToDelete));
    setShowConfirm(false);
    toast.success("Delete successfully!!");
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };
  const handleNavigateAdd = () => {
    navigate(`/add`);
  };
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };
  return (
    <div className="wrapper__dashboard">
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
        className="button_add"
      >
        <Button onClick={handleNavigateAdd} variant="contained">
          Add new player
        </Button>
      </div>
      <div className="table">
        <Table sx={{ width: "87%", margin: "0 auto", marginTop: "20px" }}>
          <TableHead sx={{ background: "#ccc", width: "1200px" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }}>id</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>playerName</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>minutesPlayed</TableCell>

              <TableCell sx={{ fontWeight: "600" }}>position</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>isCaptain</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>image</TableCell>

              <TableCell sx={{ fontWeight: "600" }}>team</TableCell>
              <TableCell sx={{ fontWeight: "600" }}>PassingAccuracy</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allPlayers
              .sort((a, b) => b.id - a.id)
              .map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.playerName}</TableCell>
                    <TableCell>{item.minutesPlayed}</TableCell>

                    <TableCell>{item.position}</TableCell>
                    <TableCell>{item.isCaptain ? "true" : "false"}</TableCell>
                    <TableCell>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={() => handleUpdate(item.id)}
                        src={item.image}
                        alt="image"
                        width={100}
                      />
                    </TableCell>

                    <TableCell>{item.team}</TableCell>
                    <TableCell>{item.PassingAccuracy}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleDelete(item.id)}
                        variant="contained"
                        color="secondary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </div>

      <div className={`box-confirm ${showConfirm ? "active" : ""}`}>
        {showConfirm && (
          <div className="content-main">
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this player?</p>
            <div>
              <Button onClick={handleConfirmDelete}>Yes, delete</Button>
              <Button onClick={handleCancelDelete}>Cancel</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Management;
