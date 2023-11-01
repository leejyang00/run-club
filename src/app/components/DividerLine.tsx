import { Divider } from "@mui/material";

const DividerLine: React.FC = () => {
  return (
    <div id="divider" className="flex justify-center items-center w-full py-10">
      <Divider
        variant="middle"
        sx={{
          width: "75%",
          bgColor: "#000000",
          borderBottomWidth: 2,
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default DividerLine;
