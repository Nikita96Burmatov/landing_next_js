import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";



import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function IslandTree(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/_next/static/3d/FloatTree.glb");
  const { actions } = useAnimations(animations, group);

  console.log(actions);
  useEffect(() => {
    actions["Take 001"].play();
  }, []);
  return (
    <a.group ref={group} {...props} dispose={null}>
      <a.group name="Sketchfab_Scene">
        <a.group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <a.group
            name="eea6f6fcb0454f068882665e88815bd1fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <a.group name="Object_2">
              <a.group name="RootNode">
                <a.group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.gras_and_veg}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.swing}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <a.group
                    name="Object_6"
                    position={[369.543, -183.243, -24.97]}
                    rotation={[0, 0, 0.262]}
                    scale={[1.827, 2.005, 2.31]}
                  />
                  <a.group
                    name="Object_8"
                    position={[369.543, -183.243, -24.97]}
                    rotation={[0, 0, 0.262]}
                    scale={[1.827, 2.005, 2.31]}
                  />
                  <a.group name="rock_2" position={[357.662, -44.367, 0]}>
                    <mesh
                      name="rock_2_stones_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.rock_2_stones_0.geometry}
                      material={materials.stones}
                    />
                  </a.group>
                  <a.group
                    name="leafs"
                    position={[38.872, 14.366, 2.371]}
                    rotation={[0, 0, 0.262]}
                    scale={[1.827, 2.005, 2.31]}
                  >
                    <a.group
                      name="Object_18"
                      position={[146.834, -137.874, -11.838]}
                    >
                      <mesh
                        name="leafs_gras_and_veg_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.leafs_gras_and_veg_0.geometry}
                        material={materials.gras_and_veg}
                      />
                    </a.group>
                  </a.group>
                  <a.group
                    name="Object001"
                    position={[-25.494, 92.015, -50.271]}
                    rotation={[0, 0, 0.262]}
                    scale={[1.827, 2.005, 2.31]}
                  />
                  <a.group
                    name="swing"
                    position={[-56.254, 24.341, -48.945]}
                    rotation={[0, 0, 0.262]}
                    scale={[1.827, 2.005, 2.31]}
                  />
                  <a.group
                    name="to_anim_leaf_1"
                    position={[-22.55, 82.859, -35.079]}
                    rotation={[-1.015, 0.003, 3.074]}
                    scale={0.596}
                  >
                    <mesh
                      name="to_anim_leaf_1_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.to_anim_leaf_1_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="to_anim_leaf_003"
                    position={[1.992, 116.235, -32.248]}
                    rotation={[-2.226, -0.623, 1.824]}
                    scale={0.596}
                  >
                    <mesh
                      name="to_anim_leaf_003_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.to_anim_leaf_003_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="to_anim_leaf_004"
                    position={[33.313, 87.804, -54.32]}
                    rotation={[-2.226, -0.623, 1.824]}
                    scale={0.596}
                  >
                    <mesh
                      name="to_anim_leaf_004_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.to_anim_leaf_004_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane009"
                    position={[-4.554, 7.508, -44.363]}
                    rotation={[-1.715, 0.082, -2.613]}
                    scale={0.838}
                  >
                    <mesh
                      name="Plane009_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane009_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane007"
                    position={[-8.784, 27.681, 7.886]}
                    rotation={[-1.463, -0.165, -0.558]}
                  >
                    <mesh
                      name="Plane007_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane007_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane010"
                    position={[4.382, 19.86, -27.144]}
                    rotation={[-1.632, -1.17, -2.573]}
                    scale={0.838}
                  >
                    <mesh
                      name="Plane010_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane010_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane005"
                    position={[6.815, 18.326, 19.023]}
                    rotation={[-1.059, 0.237, -0.425]}
                  >
                    <mesh
                      name="Plane005_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane005_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane003"
                    position={[-22.54, -23.555, 37.331]}
                    rotation={[-0.722, -0.164, -0.022]}
                  >
                    <mesh
                      name="Plane003_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane003_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group name="tree" position={[-66.6, 96.431, -24.373]}>
                    <mesh
                      name="tree_tree_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.tree_tree_0.geometry}
                      material={materials.tree}
                    />
                  </a.group>
                  <a.group
                    name="Plane006"
                    position={[-13.545, 20.642, 19.023]}
                    rotation={[-1.009, -0.165, -0.558]}
                  >
                    <mesh
                      name="Plane006_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane006_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane002"
                    position={[36.83, 13.925, 11.135]}
                    rotation={[-1.196, 0.075, 0.262]}
                  >
                    <mesh
                      name="Plane002_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane002_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane004"
                    position={[9.127, 14.938, 20.669]}
                    rotation={[-0.892, 0.501, 0.093]}
                  >
                    <mesh
                      name="Plane004_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane004_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                  <a.group
                    name="Plane008"
                    position={[-19.567, 7.508, -37.397]}
                    rotation={[-1.576, -0.165, -0.558]}
                  >
                    <mesh
                      name="Plane008_gras_and_veg_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plane008_gras_and_veg_0.geometry}
                      material={materials.gras_and_veg}
                    />
                  </a.group>
                </a.group>
              </a.group>
            </a.group>
          </a.group>
        </a.group>
      </a.group>
    </a.group>
  );
}

