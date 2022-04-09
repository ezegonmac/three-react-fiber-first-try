import React from 'react';

const Sphere = () => {
    return(
        <mesh>
            <sphereGeometry />
            <meshStandardMaterial color="#00ff00" wireframe/>
        </mesh>
    );
}

export default Sphere