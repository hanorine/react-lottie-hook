import React, { useState } from "react";
import { animationTable, AnimationTitle } from "../";
import LottieOption from "./LottieOptions";

interface SelectProps {
  onClick: (value: AnimationTitle) => (e: React.MouseEvent) => void;
  value: string;
  animations: { id: number; title: string }[];
  styles?: {
    main?: React.CSSProperties;
    closeButton?: React.CSSProperties;
  };
}

const SelectAnimations: React.FC<SelectProps> = ({ onClick, value, animations, styles }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="change-animations">
      {!open && (
        <div className="change-animations-select" style={styles?.main} onClick={() => setOpen(true)}>
          Open Animation Selection
        </div>
      )}
      {open && (
        <div className="change-animations-list-container">
          <span className="change-animations-close" style={styles?.closeButton} onClick={() => setOpen(false)}>
            X
          </span>
          <div className="change-animations-list">
            {animations
              .filter((anim) => anim.title !== value)
              .map(({ id, title }) => (
                <div key={id} style={{ cursor: "pointer" }} onClick={onClick(title as AnimationTitle)}>
                  <LottieOption animationData={animationTable[title as AnimationTitle] as any} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectAnimations;
