import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const BookList = () => {
	return (
		<section>
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	)
}

const Book = () => {
	return (
		<article>
			<Image />
			<Title />
			<Author />
		</article>
	)
}

const Image = () => <h2>image placeholder</h2>
const Title = () => <h2>title placeholder</h2>
const Author = () => <h4>author placeholder</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
