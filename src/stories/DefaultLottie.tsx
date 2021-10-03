import React, { Fragment, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { animationTable, Animation, AnimationTitle, animations } from "./index";
import SelectAnimations from "./components/SelectAnimations";

import { useLottie, Lottie, Renderer } from "..";

export interface DefaultLottieProps {
  height: number;
  width: number;
  renderer: Renderer.svg;
  rendererSettings: object;
}

const DefaultLottie: React.FC<DefaultLottieProps> = (props) => {
  const { height, width, renderer, rendererSettings } = props;
  const [animationData] = useState(animationTable[Animation["Hallowin Cat"]] as any);
  const [selected, setOnSelect] = useState<AnimationTitle>(Animation["Hallowin Cat"]);

  const [lottieRef, , controls] = useLottie({
    renderer,
    rendererSettings,
    animationData,
  });

  const onSelect = useCallback(
    (value: AnimationTitle) => (e: React.MouseEvent) => {
      e.preventDefault();
      e.persist();
      setOnSelect(value);
      controls.selectAnimation(animationTable[value] as any);
    },
    [controls],
  );

  return (
    <Fragment>
      <Lottie lottieRef={lottieRef} height={height} width={width} />
      <SelectAnimations
        onClick={onSelect}
        value={selected}
        animations={animations}
        styles={{ main: { color: "yellow", textAlign: "center", cursor: "pointer" }, closeButton: { color: "yellow" } }}
      />
    </Fragment>
  );
};

export default DefaultLottie;

export const defaultRendererSettings = {
  preserveAspectRatio: "xMidYMid slice",
  progressiveLoad: false,
};

DefaultLottie.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  rendererSettings: PropTypes.object.isRequired,
};

DefaultLottie.defaultProps = {
  height: 200,
  width: 200,
  renderer: Renderer.svg,
  rendererSettings: defaultRendererSettings,
};
