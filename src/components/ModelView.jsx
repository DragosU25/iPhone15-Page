import {
  PerspectiveCamera,
  View,
  Html,
  OrbitControls,
} from "@react-three/drei";
import React, { Suspense } from "react";
import Lights from "./Lights";
import IPhone from "./iPhone";
import * as THREE from "three";
import PropTypes from "prop-types";
import Loader from "./Loader";

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? "small" : "large"`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

// ModelView.propTypes = {
//   index: PropTypes.number.isRequired,
//   groupRef: PropTypes.object,
//   gsapType: PropTypes.string.isRequired,
//   controlRef: PropTypes.object,
//   setRotationSize: PropTypes.func.isRequired,
//   size: PropTypes.number.isRequired,
//   item: PropTypes.object.isRequired,
// };

export default React.memo(ModelView);
