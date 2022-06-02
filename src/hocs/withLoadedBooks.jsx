import { useEffect, useState } from 'react';
import axios from 'axios';
 
const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';
const generalBooksUrl = 'https://edwardtanguay.netlify.app/share/books.json';

return (props) => {
    const [techBooks, setTechBooks] = useState([]);
    const [generalBooks, setGeneralBooks] = useState([]);

    useEffect(() => {
        (async () => {
            setTechBooks((await axios.get(techBooksUrl)).data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            setGeneralBooks((await axios.get(generalBooksUrl)).data);
        })();
    }, []);

const withLoadedBooks = () => {

  return (
    <div>withLoadedBooks</div>
  )
}

export default withLoadedBooks