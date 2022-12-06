import StyledApp from './styledApp.js';
import TodoList from './components/Lists/todolist';
import Footer from './components/Footer/footer.js';

function App() {

  return(
    <StyledApp>
      <TodoList/>
      <Footer/>
    </StyledApp>

  );
}

export default App;