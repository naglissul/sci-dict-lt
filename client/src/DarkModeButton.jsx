import { Button } from "react-bootstrap";
import { FiSun } from "react-icons/fi";
import { BsMoonFill } from "react-icons/bs";

export default function DarkModeButton({ isDarkMode, setIsDarkMode }) {
  return (
    <Button
      variant="secondary"
      style={{
        borderRadius: "100%",
      }}
      onClick={() => setIsDarkMode(!isDarkMode)}
    >
      {isDarkMode ? (
        <FiSun style={{ marginBottom: "4px" }} />
      ) : (
        <BsMoonFill style={{ marginBottom: "4px" }} />
      )}
    </Button>
  );
}
