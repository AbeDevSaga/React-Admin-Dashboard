/**/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="CBE"
            company="Advent Association"
            email="1000435678234"
            vat="12/3/2000"
          />
          <Bill
            name="CBO"
            company="Advent Association"
            email="000435678234"
            vat="12/3/2010"
          />
          <Bill
            name="Telebirr"
            company="Advent Association"
            email="0978345261"
            vat="1/8/1998"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
