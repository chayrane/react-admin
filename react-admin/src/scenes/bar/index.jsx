import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="70vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;