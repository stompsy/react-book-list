import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	)
}

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	)
}

const Image = () => (
	<img
		src='https://m.media-amazon.com/images/I/4143s1BpV2L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
		alt='Dad Jokes'
	/>
)
const Title = () => <h2>Dad Jokes</h2>
const Author = () => <h4>Jimmy Niro</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
