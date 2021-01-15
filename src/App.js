import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
import ClassClick from './components/ClassClick';
import FunctionClick from './components/FunctionClick'
import EventBind from './components/EventBind'

function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBind />
      {/* <Counter /> */}
      {/* <Greet name="Bruce" heroName="Batman" >
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Clark" heroName="Superman" >
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Diana" heroName="Green Lantern" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Welcome name="Bruce" heroName="Batman" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
    </div>
  );
}

export default App;
