/**/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, Menu, MenuItem } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import React, { useState } from "react";

function Tables() {
  const { columns, rows } = authorsTableData();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (category) => {
    setSelectedCategory(category);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-menu" : undefined;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <div>
                  <Button
                    aria-controls={id}
                    aria-haspopup="true"
                    onClick={handleClick}
                    variant="contained"
                    color="primary"
                  >
                    <MDTypography variant="h6" color="white">
                      {selectedCategory}
                    </MDTypography>
                  </Button>
                  <Menu
                    id={id}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose(selectedCategory)}
                  >
                    <MenuItem onClick={() => handleClose("All Categories")}>
                      All Categories
                    </MenuItem>
                    <MenuItem onClick={() => handleClose("Category 1")}>1x/year</MenuItem>
                    <MenuItem onClick={() => handleClose("Category 1")}>2x/year</MenuItem>
                    <MenuItem onClick={() => handleClose("Category 1")}>3x/year</MenuItem>
                    <MenuItem onClick={() => handleClose("Category 1")}>5x/year</MenuItem>
                    <MenuItem onClick={() => handleClose("Category 2")}>Monthly</MenuItem>
                  </Menu>
                </div>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
