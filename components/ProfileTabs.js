import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PhoneIcon from "@material-ui/icons/Phone";
import Assessment from "@material-ui/icons/Assessment";
import Lock from "@material-ui/icons/Lock";
import Chat from "@material-ui/icons/Chat";

// import WSBTrends from "../Components/WSBTrends";
// import InsiderTrades from "../Components/InsiderTrades";
// import UnusualOptions from "../Components/UnusualOptions";
import WSBTrends from "../Components/WSBTrends";

import StockAlerts from "../Components/StockAlerts";
// import Tweets from "../Components/Tweets";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: "100%",
      width: "50%",
      backgroundColor: "#147efb",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    width: 50,
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 20,
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function LockedContent() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 20,
      }}
    >
      <div
        style={{
          backgroundColor: "#191919",
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderRadius: 25,
        }}
      >
        <span
          style={{
            fontSize: 20,
          }}
        >
          🔒
        </span>
      </div>
      <p style={{ color: "#FFF" }}>Subscribe for exclusive content</p>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // flex: 1,
    // width: 300,
    //backgroundColor: "#2e1534"
  },
  padding: {
    //padding: theme.spacing(1)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#282c34",
    display: "flex",
    //overflow: "auto",
    //width: "300",
  },
}));
export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={
        {
          //flex: 1,
          //width: 500,
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      <StyledTabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        //scrollButtons="auto"
        //variant="scrollable"
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab icon={<Chat />} {...a11yProps(0)} />
        <StyledTab icon={<Assessment />} {...a11yProps(1)} />
        <StyledTab icon={<Lock />} {...a11yProps(2)} />
        {/* <StyledTab label="Insider Trades" {...a11yProps(2)} />
          <StyledTab label="TweetBot" {...a11yProps(3)} /> */}
      </StyledTabs>
      {/* <Typography className={classes.padding} /> */}

      <TabPanel value={value} index={0}>
        <StockAlerts></StockAlerts>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LockedContent></LockedContent>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LockedContent></LockedContent>
      </TabPanel>
    </div>
  );
}
