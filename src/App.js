import logo from './logo.svg';
import './App.css';
import AllProduct from './Componets/AllProduct/AllProduct';
import Header from './Componets/Header/Header';
import QuestionAns from './Componets/QuestionAns/QuestionAns';

function App() {
  return (
    <div>
      <Header></Header>
      <AllProduct></AllProduct>
      <QuestionAns></QuestionAns>
    </div>
  );
}

export default App;
