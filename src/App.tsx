import { Main } from './main/Main';
import { InputStateProvider } from './main/InputStateContext';

function App() {
  return (
    <InputStateProvider>
      <Main />
    </InputStateProvider>
  );
}

export default App;
