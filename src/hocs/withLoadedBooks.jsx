import { useEffect, useState } from 'react';
import axios from 'axios';
 
const techBooksUrl = 'https://edwardtanguay.netlify.app/share/techBooks.json';
const generalBooksUrl = 'https://edwardtanguay.netlify.app/share/books.json';



const withLoadedBooks = () => {

  return (
    <div>withLoadedBooks</div>
  )
}

export default withLoadedBooks