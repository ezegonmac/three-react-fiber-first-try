import ThreeScene from "./components/ThreeScene";
import Sphere from "./components/Sphere";

function App() {
  return (
    <div className="App" style={{height: "100vh", overflow: "hidden"}}>
      <ThreeScene>
        <color attach="background" args={["#161c24"]}/>
        <Sphere/>
        <ambientLight intensity={0.5}/>
      </ThreeScene>
    </div>
  );
}

export default App;
