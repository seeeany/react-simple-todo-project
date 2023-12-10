import React from "react";

interface CheckboxProps {
  label: string;
  value: boolean;
  onCheck?: () => void;
  onChangeLabel?: (newLabel: string) => void;
  style?: object;
  editable?: boolean;
}

function Checkbox({
  label,
  value,
  style,
  editable,
  onCheck,
  onChangeLabel,
}: CheckboxProps) {
  const inlineStyle = {
    container: {
      // border: "1px solid #272822",
      // borderRadius: "5px",
      // padding: "0.75em",
      // backgroundColor: "#4e596d",
      color: "white",
    },
    label: {
      fontSize: "1.25em",
      margin: "10px",
    },
  };

  function handleOnChange(): void {
    if (!onCheck) return;
    onCheck();
  }

  function handleOnChangeLabel(newLabel: string): void {
    if (!onChangeLabel) return;
    onChangeLabel(newLabel);
  }

  const handleOnCheckboxClick: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      style={{ ...inlineStyle.container, ...style }}
      onClick={handleOnCheckboxClick}
    >
      <input type="checkbox" checked={value} onChange={handleOnChange} />
      {editable ? (
        <input
          disabled={value}
          type="text"
          value={label}
          style={{
            textDecoration: value ? "line-through" : "none",
          }}
          onChange={(event) => {
            handleOnChangeLabel(event.target.value);
          }}
        />
      ) : (
        <span style={{ ...inlineStyle.label }}>{label}</span>
      )}
    </div>
  );
}

export default Checkbox;
