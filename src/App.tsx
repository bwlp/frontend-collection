import { Main } from './main/Main';
import { InputStateProvider } from './main/InputStateContext';

function App() {
  return (
    <div className="App">
      <InputStateProvider>
        <Main />
      </InputStateProvider>
    </div>
  );
}

export default App;
