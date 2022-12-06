import StyledApp from './StyledApp.js';
import TodoList from './components/Lists/Index';
import Footer from './components/Footer/Index.js';

function App() {

  return(
    <StyledApp>
      <TodoList/>
      <Footer/>
    </StyledApp>

  );
}

export default App;