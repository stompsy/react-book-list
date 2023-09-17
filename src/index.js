import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
	{
		title: 'Dad Jokes',
		author: 'Jimmy Niro',
		img: 'https://m.media-amazon.com/images/I/713toGwMnqL._SL1500_.jpg',
	},
	{
		title: 'Atomic Habits',
		author: 'James Clear',
		img: 'https://m.media-amazon.com/images/I/81bGKUa1e0L._SL1500_.jpg',
	},
];

const BookList = () => {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
};

const handleEvents = () => {
	const handleFormInput = () => {
		console.log('Handle form input');
	};
	const handleButtonClick = () => {
		alert('Handle form input');
	};
	return (
		<section>
			<form action=''>
				<h2>Typical Form</h2>
				<input
					type='text'
					name='example'
					onChange={handleFormInput}
					style={{ margin: '1rem 0' }}
				/>
			</form>
			<button onClick={handleButtonClick}>Click Me</button>
		</section>
	);
};

const Book = ({ title, author, img }) => {
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
