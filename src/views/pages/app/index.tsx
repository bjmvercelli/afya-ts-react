import { useCallback, useEffect, useState } from "react";
import api from '../../../services/api';
import LoaderContent from '../../../LoaderContent';
import { Container } from './style';

const App: React.FC = () => { //FC = Funcional components
  const [ photo, setPhoto ] = useState<string>('');
  const [ isLoad, setIsLoad ] = useState<boolean>(false);

  useEffect(() => { 
    setIsLoad(true);
    api.get('').then(
      response => {
        setPhoto(response.data.message);
        setIsLoad(false);
      }
    );
  }, []);

  const handleSortImage: any = useCallback(() => { //essa função permite memorizar um estado da aplicação
      setIsLoad(true);
      api.get('').then(
        response => {
          setPhoto(response.data.message);
          setIsLoad(false);
        }
      )
  }, []);//entre [] deve ter o elemento a ser observado, nesse caso nenhum

  return (
    <Container>
      <div className="content">
        <h1>Hello Gama!</h1>
        <h4>Veja estas imagens</h4>
        <button onClick={handleSortImage}>Clique aqui</button>
      </div>

      { isLoad ? (<LoaderContent/>) : <img src={photo} alt="dog" />}
    </Container>
    
  )

}

//hooks é um modelo de solução com sintaxe amigavel orientado a funções (quando tem o useXXX, trata-se de um hook)

export default App;
