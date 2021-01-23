import './App.css';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA'
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import ClassClick from './components/ClassClick';
// import FunctionClick from './components/FunctionClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent';
// import UserGreetings from './components/UserGreetings';

function App() {
  return (
    <div className="App">
      {<LifecycleA />}
      {/* {<Form />} */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* {<Inline />} */}
      {/* {<Stylesheet primary={1} />} */}
      {/* {<NameList />} */}
      {/* <UserGreetings /> */}
      {/* <ParentComponent /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <Counter /> */}
      {/* <Greet name="Bruce" heroName="Batman" >
        <p>This is cHiLdReN props</p>
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
