import React from "react";
import styles from "./ResistorTable.module.scss";

type ResistorTableProps = {
  ohms: number;
  tolerancePercent: number;
};

/**
 * Renders a table showing the calculated values of the resistor
 */
const ResistorTable: React.FC<ResistorTableProps> = ({
  ohms,
  tolerancePercent,
}) => {
  return (
    <div className={styles.ResistorTable}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Resistance</th>
            <th scope="col">Tolerance</th>
            <th scope="col">Minimum</th>
            <th scope="col">Maximum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ohms} ohms</td>
            <td>± {tolerancePercent} % </td>
            <td data-testid="min">
              {ohms - (tolerancePercent * ohms) / 100} ohms
            </td>
            <td data-testid="max">
              {ohms + (tolerancePercent * ohms) / 100} ohms
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResistorTable;
