import { Divider } from "@mui/material";

interface dividerLineProps {
  orientation: 'horizontal' | 'vertical';
}

const DividerLine = (props: dividerLineProps): JSX.Element => {
  const { orientation } = props;

  return (
    <div id="divider" className="flex justify-center items-center w-full py-10">
      <Divider
        variant="middle"
        orientation={orientation}
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
