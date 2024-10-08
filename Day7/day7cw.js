import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        axios.get("http://localhost:3000/data")
            .then(res => {
                const formattedBooks = res.data.map(book => ({
                    id: book.id,
                    title: book.title,
                    author:book.author 
                }));
                setBooks(formattedBooks);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h1>Book Management</h1>
            <h2>Book List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Books;
