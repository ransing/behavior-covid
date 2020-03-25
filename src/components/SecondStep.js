import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button";
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

// Destructure props
const SecondStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: { depression},
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const isEmpty = []
  // date.length > 0 && city.length > 0

  
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
      value: "1",
      label: "Not At All"
    },
    {
      value: "2",
      label: "<>"
    },
    {
      value: "3",
      label: "Somewhat"
    },
    {
      value: "4",
      label: "<>"
    },
    {
      value: "5",
      label: "A lot "
    }
  ];


  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={25}>
        Have you been Feeling down, depressed, or hopeless 
          {/* <div className={classes.margin} /> */}
          <Typography gutterBottom></Typography>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            name="depression"
            defaultValue={depression}
            max={5}
            min={1}
            marks={marks}
            // onChange={handleChange("depression")}
            // valueLabelDisplay="on"
            // {handleChange("interest")}
          />
          {/* <TextField
            fullWidth
            label="City"
            name="city"
            placeholder="Enter your city"
            defaultValue={city}
            onChange={handleChange("city")}
            margin="normal"
            error={filedError.city !== ""}
            helperText={filedError.city !== "" ? `${filedError.city}` : ""}
            required
          /> */}
        </Grid>
        
          {/* <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="birthday"
            type="date"
            defaultValue={date}
            onChange={handleChange("date")}
            margin="normal"
            required
          /> */}
        
        
          {/* <TextField
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            defaultValue={phone}
            onChange={handleChange("phone")}
            margin="normal"
            error={filedError.phone !== ""}
            helperText={filedError.phone !== "" ? `${filedError.phone}` : ""}
          /> */}
        
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 20 }}
        >
          Back
        </Button>
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
  )
}

export default SecondStep
