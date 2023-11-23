import { TodoProvider } from "./utils/context/TodoProvider";
import { LayoutTodos } from "./components/LayoutTodos";
import { Container } from "./Container.styled";
import image from "./assets/img.png";
function App() {
  return (
    <>
      <TodoProvider>
        <Container>
          <LayoutTodos />
          <div>
            <img src={image} width={700} alt="backgroundImg" />
          </div>
        </Container>
      </TodoProvider>
    </>
  );
}

export default App;
