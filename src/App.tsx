import { Main } from './main/Main';
import { InputStateProvider } from './main/InputStateContext';

function App() {
  return (
    <div className="p-2">
      <InputStateProvider>
        <Main />
      </InputStateProvider>
    </div>
  );
}

export default App;
