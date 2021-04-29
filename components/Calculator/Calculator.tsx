import React, { useState } from "react";
import styles from "./Calculator.module.scss";
import ColorSelect from "./components/ColorSelect";
import _ from "lodash";
import ResistorTable from "./components/ResistorTable";
import BoringSelect from "./components/BoringSelect";

const DECODE_SERVICE_URL = "http://localhost:3002";
type CalculatorProps = {};

/**
 * Component that lets the user decode transistor colors to the values. It connects directly to the API.
 */
const Calculator: React.FC<CalculatorProps> = ({}) => {
  const [firstDigit, setFirstDigit] = useState("none");
  const [secondDigit, setSecondDigit] = useState("none");
  const [multiplier, setMultiplier] = useState("none");
  const [tolerance, setTolerance] = useState("none");

  const [resistorValues, setResistorValues] = useState(null);

  const [error, setError] = useState(null);

  /**
   * Resets the state of the component
   */
  function reset() {
    setFirstDigit("none");
    setSecondDigit("none");
    setMultiplier("none");
    setTolerance("none");
    setError(null);
    setResistorValues(null);
  }

  /**
   * Queries the api for a set of colors and updates the state.
   */
  function decode() {
    const colors = [firstDigit, secondDigit, multiplier, tolerance];
    const colorsWithoutNulls = colors.map((c) => c || "none");

    fetch(
      `${DECODE_SERVICE_URL}/decode?colors=${JSON.stringify(
        colorsWithoutNulls
      )}`
    )
      .then((response) => {
        if (response.status === 400) {
          response.text().then(setError);
        }
        return response.json();
      })
      .then((resistorValues) => {
        setResistorValues(resistorValues);
        setError(null);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  return (
    <div className={styles.Calculator}>
      <BoringSelect
        title="first digit"
        color={firstDigit}
        setColor={setFirstDigit}
      />
      <BoringSelect
        title="second digit"
        color={secondDigit}
        setColor={setSecondDigit}
      />
      <BoringSelect
        title="multiplier"
        color={multiplier}
        setColor={setMultiplier}
      />
      <BoringSelect
        title="tolerance"
        color={tolerance}
        setColor={setTolerance}
      />
      <hr />

      <div className={styles.resistor}>
        <ColorSelect color={firstDigit} setColor={setFirstDigit} />
        <ColorSelect color={secondDigit} setColor={setSecondDigit} />
        <ColorSelect color={multiplier} setColor={setMultiplier} />
        <div className={styles.spacer}></div>
        <ColorSelect color={tolerance} setColor={setTolerance} />
        <div className={styles.wire} />
      </div>

      <div className="row" style={{ minHeight: "40px" }}>
        {error && (
          <div className="invalid-feedback" style={{ display: "block" }}>
            {error}
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-sm-6">
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
        </div>
        <div className="col-sm-6">
          <button className="btn btn-primary" onClick={decode}>
            Decode
          </button>
        </div>
      </div>
      <hr />

      <div className="row">
        {resistorValues && (
          <ResistorTable
            ohms={resistorValues.ohms}
            tolerancePercent={resistorValues.tolerancePercent}
          />
        )}
      </div>
    </div>
  );
};

export default Calculator;
