import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="72vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;