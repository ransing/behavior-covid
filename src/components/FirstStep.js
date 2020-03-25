import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Destructure props
const FirstStep = ({
  handleNext,
  handleChange,
  values: { interest, lastName, email, gender },
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const isEmpty = [];
  // interest.length > 0 &&
  // lastName.length > 0 &&
  // gender.length > 0 &&
  // email.length > 0

  const PrettoSlider = withStyles({
    root: {
      color: "#52af77",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);

  const marks = [
    {
      value: 1,
      label: "Not At All"
    },
    {
      value: 2,
      label: " "
    },
    {
      value: 3,
      label: "Somewhat"
    },
    {
      value: 4,
      label: " "
    },
    {
      value: 5,
      label: "A lot "
    }
  ];

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          Have you lost interest or pleasure in doing things
          {/* <div className={classes.margin} /> */}
          <Typography gutterBottom></Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={3}
            max={5}
            min={1}
            marks={marks}
            onChange={handleChange(marks.value)}
            // {handleChange("interest")}
          />
          {/* <div className={classes.margin} /> */}
          {/* <TextField
            fullWidth
            label="First Name"
            name="interest"
            placeholder="Your first name"
            defaultValue={interest}
            onChange={handleChange("interest")}
            margin="normal"
            error={filedError.interest !== ""}
            helperText={
              filedError.interest !== "" ? `${filedError.interest}` : ""
            }
            required
          /> */}
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            defaultValue={lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            error={filedError.lastName !== ""}
            helperText={
              filedError.lastName !== "" ? `${filedError.lastName}` : ""
            }
            required
          />
        </Grid> */}

        {/* <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select value={gender} onChange={handleChange("gender")}>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid> */}
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};

export default FirstStep;
