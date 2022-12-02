import StyledApp from './styledApp.js';
import TodoList from './components/todolist';
import Footer from './components/footer.js';

function App() {

  return(
   
    <StyledApp>
      <TodoList/>
      <Footer/>
    </StyledApp>

  );
}

export default App;