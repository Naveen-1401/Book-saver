import { useEffect} from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';

function App(){
    
    const {fetchBooks }  = useBooksContext();

    useEffect(() => {
        fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div className = "app"> 
        <h1> Reading List </h1>
        <BookCreate />
        <BookList />
    </div>;
}
export default App;