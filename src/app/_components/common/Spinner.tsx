import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Spinner(): React.ReactNode {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
      }}
    >
      {/* Blurred Background */}
      <Box
        sx={{
          backgroundColor: "rgb(44 62 80 / 0.5)",
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />

      {/* Spinner Container */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          zIndex: 51,
        }}
      >
        <CircularProgress
          className="text-primary dark:text-primary-dark"
          size={40}
        />
      </Box>
    </Box>
  );
}
