import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import { ToggleButtonGroup } from "@mui/material";

export default function Header({
  timespan,
  setTimespan,
  magnitude,
  setMinMag,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" sx={{ bgcolor: "white" }}>
        <Toolbar variant="regular">
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="black"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            USGS Earthquakes
          </Typography>
          <Stack direction="row" spacing={2} color="white" alignItems="center">
            <Typography
              variant="h10"
              color="black"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Select Time Period:
            </Typography>
            <ToggleButtonGroup
              color="secondary"
              value={timespan}
              exclusive
              onChange={(event, newTime) => {
                setTimespan(newTime);
              }}
            >
              <ToggleButton value="hour">LAST HOUR</ToggleButton>
              <ToggleButton value="day">LAST DAY</ToggleButton>
              <ToggleButton value="week">LAST 7 DAYS</ToggleButton>
              <ToggleButton value="month">LAST 30 DAYS</ToggleButton>
            </ToggleButtonGroup>
            <Typography
              variant="h10"
              color="black"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Select Magnitude:
            </Typography>
            <ToggleButtonGroup
              color="secondary"
              value={magnitude}
              exclusive
              onChange={(event, newMag) => {
                setMinMag(newMag);
              }}
            >
              <ToggleButton value="all">All</ToggleButton>
              <ToggleButton value="1.0">M1.0+</ToggleButton>
              <ToggleButton value="2.5">M2.5+</ToggleButton>
              <ToggleButton value="4.5">M4.5+</ToggleButton>
              <ToggleButton value="significant">SIGNIFICANT</ToggleButton>
            </ToggleButtonGroup>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
