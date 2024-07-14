import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import { addNewPlayer } from "../../server/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [value, setValue] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const onValueChange = (e) => {
    const { name, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle Switch component
      setValue({ ...value, [name]: checked });
    } else {
      const { name, value: inputValue } = e.target;
      setValue({ ...value, [name]: inputValue });
      switch (name) {
        case "playerName":
          if (!inputValue) {
            setErrors({ ...errors, playerName: "playerName is required" });
          } else if (inputValue.trim().split(" ").length < 2) {
            setErrors({
              ...errors,
              playerName: "playerName must be more than 1 words",
            });
          } else if (inputValue !== inputValue.toUpperCase()) {
            setErrors({
              ...errors,
              playerName: "playerName must be all uppercase",
            });
          } else {
            setErrors({ ...errors, playerName: null });
          }
          break;
        case "minutesPlayed":
          if (!inputValue) {
            setErrors({
              ...errors,
              minutesPlayed: "minutesPlayed is required",
            });
          } else {
            setErrors({ ...errors, minutesPlayed: null });
          }
          break;

        case "position":
          if (!inputValue) {
            setErrors({ ...errors, position: "position is required" });
          } else {
            setErrors({ ...errors, position: null });
          }
          break;
        case "image":
          if (!inputValue) {
            setErrors({ ...errors, image: "image is required" });
          } else if (!inputValue.match(/^https?:\/\/.+/)) {
            setErrors({ ...errors, image: "image must be a valid URL" });
          } else {
            setErrors({ ...errors, image: null });
          }
          break;

        case "team":
          if (!inputValue) {
            setErrors({
              ...errors,
              team: "team is required",
            });
          } else {
            setErrors({ ...errors, team: null });
          }
          break;

        case "PassingAccuracy":
          if (!inputValue) {
            setErrors({
              ...errors,
              PassingAccuracy: "PassingAccuracy is required",
            });
          } else {
            setErrors({ ...errors, PassingAccuracy: null });
          }
          break;
        default:
          if (!inputValue) {
            setErrors({ ...errors, [name]: "This field is required" });
          } else {
            setErrors({ ...errors, [name]: null });
          }
      }
    }
  };
  const handleAdd = async () => {
    await addNewPlayer(value);
    navigate("/admin");
  };
  return (
    <div>
      <FormGroup
        sx={{
          margin: "20px 350px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography variant="h4">Add new player</Typography>
        <FormControl>
          <InputLabel>playerName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="playerName" />
          {errors.playerName && (
            <Typography color="error">{errors.playerName}</Typography>
          )}
        </FormControl>

        <FormControl>
          <InputLabel>minutesPlayed</InputLabel>
          <Input
            type="number"
            onChange={(e) => onValueChange(e)}
            name="minutesPlayed"
          />
          {errors.minutesPlayed && (
            <Typography color="error">{errors.minutesPlayed}</Typography>
          )}
        </FormControl>

        <FormControl variant="filled">
          <InputLabel >position</InputLabel>
          <Select  onChange={(e) => onValueChange(e)} name="position">
            <MenuItem value="Goalkeeper">Goalkeeper</MenuItem>
            <MenuItem value="Defender">Defender</MenuItem>
            <MenuItem value="Midfielder">Midfielder</MenuItem>
            <MenuItem value="Forward">Forward</MenuItem>
          </Select>
          {/* <Input onChange={(e) => onValueChange(e)} name="position" /> */}
          {errors.position && (
            <Typography color="error">{errors.position}</Typography>
          )}
        </FormControl>

        <FormControl>
          <FormControlLabel
            control={
              <Switch onChange={(e) => onValueChange(e)} name="isCaptain" />
            }
            label="IsCaptain?"
          />
        </FormControl>

        <FormControl>
          <InputLabel>image</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="image" />
          {errors.image && (
            <Typography color="error">{errors.image}</Typography>
          )}
        </FormControl>

        <FormControl>
          <InputLabel>team</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="team" />
          {errors.team && <Typography color="error">{errors.team}</Typography>}
        </FormControl>

        <FormControl>
          <InputLabel>PassingAccuracy</InputLabel>
          <Input
            type="number"
            onChange={(e) => onValueChange(e)}
            name="PassingAccuracy"
          />
          {errors.PassingAccuracy && (
            <Typography color="error">{errors.PassingAccuracy}</Typography>
          )}
        </FormControl>

        <FormControl>
          <Button
            disabled={
              Object.values(errors).some((error) => error !== null) ||
              !value.playerName ||
              !value.minutesPlayed ||
              !value.position ||
              !value.image ||
              !value.team ||
              !value.PassingAccuracy
            }
            onClick={handleAdd}
            variant="contained"
          >
            Add
          </Button>
        </FormControl>
      </FormGroup>
    </div>
  );
};

export default Add;
