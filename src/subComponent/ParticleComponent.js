import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import { loadFull } from "tsparticles";

//particle config files

import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
const ParticleComponent = (props) => {
  const loadParitlces = async (main) => {
    await loadFull(main);
  };
  return (
    <Box>
      <Particles
        id="tsparticles"
        init={loadParitlces}
        style={{ position: "absolute", top: 0 }}
        options={props.theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default ParticleComponent;
