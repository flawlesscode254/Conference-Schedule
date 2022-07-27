import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";

import Conferences from "./Conferences";
import Schedule from "./Schedule";
import Booked from "./Booked";
import Favorites from "./Favorites";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                marginTop: 3,
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", height: 320 }}
            >
                <Tab label="Available Conferences" {...a11yProps(0)} />
                <Tab label="Schedule Conference" {...a11yProps(1)} />
                <Tab label="Booked Conferences" {...a11yProps(2)} />
                <Tab label="Favorite Conferences" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Conferences />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Schedule />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Booked />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Favorites />
            </TabPanel>
        </Box>
    );
}