import React from "react";
import styles from "./BoringSelect.module.scss";
import _ from "lodash";
import colors from "../../domain/colors";

type BoringSelectProps = {
  color: string;
  setColor: (color: string) => void;
  title: string;
};

/**
 * Renders a bootstrap select with the known colors.
 */
const BoringSelect: React.FC<BoringSelectProps> = ({
  color,
  setColor,
  title,
}) => {
  return (
    <div className={styles.BoringSelect}>
      <div className="form-group">
        <label htmlFor={title}>{_.capitalize(title)}</label>
        <select
          value={color}
          className="form-control"
          id={title}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          <option value={null}>none</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BoringSelect;
