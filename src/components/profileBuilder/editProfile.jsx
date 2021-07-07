import React, { useEffect, useState } from 'react';
import EditBookForm from '../components/EditBookform';
import axios from "axios";

const Edit = ({ match, history }) => {
    const {
        params: { id },
    } = match;

    const [book, setBook] = useState(null);

    const bookApi = `http://localhost:3000/books/`;

    const deleteBook = ((id) => {
        axios.delete(`${bookApi}/${id}`)
            .then(res => console.log(res.data))
            .then(alert("Book has been deleted"))
            .then(() => {
                history.push('/bookshelf');
            });
    });

    useEffect(() => {
        axios.get(`${bookApi}/${id}`)
            .then(({ data: books }) => setBook(books))
            .catch((err) => console.log(err));
    }, [id]);


    return (
        <main>
            <h2> Edit Book</h2>
            <section className="add-book">
                {book && <EditBookForm key={id} book={book} deleteBook={deleteBook} />}

            </section>
        </main>
    );
};
export default Edit;
