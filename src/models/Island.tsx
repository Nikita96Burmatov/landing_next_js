import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
// import IslandScene from "/_next/static/3d/stylised_sky_player_home_dioroma.glb";

export default function Island(props) {
  const { nodes, materials } = useGLTF(
    "/_next/static/3d/stylised_sky_player_home_dioroma.glb"
  );
  const islandRef = useRef();
  return (
    <a.group ref={islandRef} {...props}>
      <a.group
        position={[-44.516, 45.46, 10.285]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <a.group position={[0, 0, -34.814]}>
          <mesh
            geometry={nodes.tower_base_wall_0.geometry}
            material={materials.wall}
          />
          <mesh
            geometry={nodes.tower_base_planks_0.geometry}
            material={materials.planks}
          />
        </a.group>
      </a.group>
      <a.group position={[-22.341, 70.746, -26.347]} rotation={[0, 0.667, 0]}>
        <mesh
          geometry={nodes.house_base_wall_0.geometry}
          material={materials.wall}
          position={[-4.244, 0, -22.805]}
        />
      </a.group>
      <a.group position={[-19.572, 3.067, 56.714]}>
        <mesh geometry={nodes.roof_roof_0.geometry} material={materials.roof} />
        <mesh
          geometry={nodes.roof_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
        />
      </a.group>
      <a.group
        position={[-62.013, 69.642, 4.806]}
        rotation={[-2.987, -1.271, -2.962]}
        scale={0.557}
      >
        <mesh
          geometry={nodes.stone_details_wall_0.geometry}
          material={materials.wall}
          position={[0, 0, -9.758]}
        />
      </a.group>
      <a.group
        position={[-60.621, 71.68, -29.659]}
        rotation={[2.675, -0.9, 2.732]}
        scale={0.295}
      >
        <mesh
          geometry={nodes.wood_loose_planks_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
          position={[167.603, 70.907, -5.194]}
        />
      </a.group>
      <a.group
        position={[65.223, 90.387, -43.067]}
        rotation={[-1.861, 0.588, 1.284]}
        scale={0.611}
      >
        <mesh
          geometry={nodes.leaves_op_branches_0.geometry}
          material={materials.op_branches}
          position={[-2.491, -18.554, -1.982]}
        />
      </a.group>
      <a.group
        position={[45.452, 50.763, -23.448]}
        rotation={[2.684, 0.646, -2.739]}
        scale={0.233}
      >
        <mesh
          geometry={nodes.grass_op_branches_0.geometry}
          material={materials.op_branches}
          position={[-0.562, 11.093, 0]}
        />
      </a.group>
      <a.group
        position={[36.662, 0.659, 17.226]}
        rotation={[0.107, 1.046, -0.139]}
        scale={[1.221, 1.208, 1]}
      >
        <mesh
          geometry={nodes["rocks_Material_#413_0"].geometry}
          material={materials.Material_413}
          position={[-100.304, -21.28, -15.81]}
        />
      </a.group>
      <a.group
        position={[46.878, 46.628, 8.397]}
        rotation={[-0.002, 0.334, -0.09]}
        scale={0.799}
      >
        <mesh
          geometry={nodes["ferns_Material_#650_0"].geometry}
          material={materials.Material_650}
          position={[-13.284, 9.049, 0]}
        />
      </a.group>
      <a.group
        position={[-8.336, 32.703, -8.657]}
        rotation={[-0.04, -0.953, -0.058]}
        scale={0.736}
      >
        <mesh
          geometry={nodes.wood_structure_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
          position={[77.142, -2.511, -9.584]}
        />
      </a.group>
      <a.group
        position={[15.005, 38.223, -26.353]}
        rotation={[-Math.PI / 2, 0, 1.904]}
        scale={[0.049, 0.049, 0.159]}
      >
        <mesh
          geometry={nodes["barrels_door_+_barrels_0"].geometry}
          material={materials.door__barrels}
        />
        <mesh
          geometry={nodes.barrels_planks_0.geometry}
          material={materials.planks}
        />
      </a.group>
      <a.group
        position={[-1.063, 56.917, -47.881]}
        rotation={[0, -1.281, 0]}
        scale={[0.398, 0.155, 0.603]}
      >
        <a.group position={[77.142, -2.511, -9.584]}>
          <mesh
            geometry={nodes.windows_wooden_skel_no_op_0.geometry}
            material={materials.wooden_skel_no_op}
          />
          <mesh
            geometry={nodes["windows_door_+_barrels_0"].geometry}
            material={materials.door__barrels}
          />
        </a.group>
      </a.group>
      <a.group
        position={[18.805, -42.02, 19.523]}
        rotation={[1.559, 0.008, -0.351]}
        scale={0.474}
      >
        <mesh
          geometry={nodes.wood_beams_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
          position={[-186.901, 79.687, -8.777]}
        />
      </a.group>
      <mesh
        geometry={nodes.base_tower_wall_0.geometry}
        material={materials.wall}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.tree_trunk_bark_0.geometry}
        material={materials.bark}
        position={[47.887, 83.803, 0]}
      />
      <mesh
        geometry={nodes.grass_floor_grass_0.geometry}
        material={materials.grass}
        rotation={[-Math.PI / 2, 0, 1.328]}
      />
      <mesh
        geometry={nodes["door_door_+_barrels_0"].geometry}
        material={materials.door__barrels}
        position={[-11.427, 60.918, -3.194]}
        rotation={[0, 0.773, 0]}
        scale={[0.84, 1, 1]}
      />
      <mesh
        geometry={nodes["klimop_Material_#650_0"].geometry}
        material={materials.Material_650}
        position={[-54.458, 38.769, -13.438]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
}
