import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
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
      //   maxWidth: "100%",
      //   width: "100%",
      backgroundColor: "#147efb ",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
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

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
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
    //display: "flex",
    overflow: "auto",
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
    <div className={classes.root}>
      {/* <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
        </Tabs>
      </AppBar> */}

      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          //   scrollButtons="auto"
          //   variant="scrollable"
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Alerts" {...a11yProps(0)} />
          <StyledTab label="Options" {...a11yProps(1)} />
          <StyledTab label="WSB Trends" {...a11yProps(2)} />
          {/* <StyledTab label="Insider Trades" {...a11yProps(2)} />
          <StyledTab label="TweetBot" {...a11yProps(3)} /> */}
        </StyledTabs>
        {/* <Typography className={classes.padding} /> */}
      </div>
      <TabPanel value={value} index={0}>
        <StockAlerts></StockAlerts>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StockAlerts></StockAlerts>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WSBTrends></WSBTrends>
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        <InsiderTrades></InsiderTrades>
      </TabPanel> */}
      {/* <TabPanel value={value} index={4}>
        <Tweets></Tweets>
      </TabPanel> */}
    </div>
  );
}
