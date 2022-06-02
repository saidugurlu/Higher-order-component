import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageTechBooks } from './pages/PageTechBooks';
import { PageAbout } from './pages/PageAbout';
import { PageGeneralBooks } from './pages/PageGeneralBooks';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { withLoadedBooks } from './hocs/withLoadedBooks';

const PageTechBooksWithLoadedBooks = withLoadedBooks(PageTechBooks);
const PageGenericBooksWithLoadedBooks = withLoadedBooks(PageGeneralBooks);
const PageAboutBooksWithLoadedBooks = withLoadedBooks(PageAbout);

function App() {
	return (
		<div className="App">
			<h1>Personal Site</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/general-books">General Books</NavLink> |{' '}
			<NavLink to="/tech-books">Tech Books</NavLink> |{' '}
			<NavLink to="/about">About</NavLink>
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route
					path="/tech-books"
					element={<PageTechBooksWithLoadedBooks />}
				/>
				<Route path="/general-books" element={<PageGenericBooksWithLoadedBooks />} />
				<Route path="/about" element={<PageAboutBooksWithLoadedBooks />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
