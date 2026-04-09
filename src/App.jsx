import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { TaskList } from "./components/taskList/taskList";
import { InputContainer } from "./components/inputContainer/inputContainer";
import { Todo } from "./components/todo/todo";

function App() {
  return (
    <Todo>
      <Header />
      <InputContainer />
      <TaskList />
      <Footer />
    </Todo>
  );
}

export default App;
