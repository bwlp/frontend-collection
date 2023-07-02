import { InputStateProvider } from './main/InputStateContext';
import { Main } from './main/Main';

function App() {
  return (
    <InputStateProvider>
      <Main />
    </InputStateProvider>
  );
}

export default App;
