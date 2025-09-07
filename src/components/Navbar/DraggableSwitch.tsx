import { Switch } from "@mui/material";
import React, { useEffect, useRef } from "react";

type DraggableSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  color?: "primary" | "secondary" | "default";
};

const DraggableSwitch: React.FC<DraggableSwitchProps> = ({
  checked,
  onChange,
  color = "default",
}) => {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const dragging = useRef(false);
  const initialChecked = useRef(checked);

  useEffect(() => {
    initialChecked.current = checked;
  }, [checked]);

  const handlePointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    startY.current = e.clientY;
    dragging.current = false;
    initialChecked.current = checked;
    try {
      (e.target as Element).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    const dy = e.clientY - (startY.current ?? 0);

    if (!dragging.current) {
      if (Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy)) {
        dragging.current = true;
      }
    } else {
      e.preventDefault();
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;

    const dx = e.clientX - startX.current;
    const width = wrapRef.current?.offsetWidth ?? 36;
    const threshold = Math.max(20, width * 0.25);

    if (Math.abs(dx) > threshold) {
      onChange(dx > 0);
    } else {
      onChange(!initialChecked.current);
    }

    startX.current = null;
    startY.current = null;
    dragging.current = false;
  };

  return (
    <div
      ref={wrapRef}
      style={{ display: "inline-block", touchAction: "none" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <Switch checked={checked} color={color} />
    </div>
  );
};

export default DraggableSwitch;
