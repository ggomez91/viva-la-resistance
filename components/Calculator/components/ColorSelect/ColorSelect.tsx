import React from "react";
import styles from "./ColorSelect.module.scss";
import colors from "../../domain/colors";

type ColorSelectProps = {
  color: string;
  setColor: (color: string) => void;
};

/**
 * Renders a colored select with the known colors
 */
const ColorSelect: React.FC<ColorSelectProps> = ({ color, setColor }) => {
  return (
    <div className={styles.ColorSelect}>
      <select
        value={color}
        title="Select your surfboard"
        className="selectpicker"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        style={{
          backgroundColor:
            color == null || color == "none" ? "transparent" : color,
        }}
      >
        {colors.map((color) => (
          <option
            key={color}
            value={color}
            style={{ backgroundColor: color }}
          ></option>
        ))}
      </select>
    </div>
  );
};

export default ColorSelect;
