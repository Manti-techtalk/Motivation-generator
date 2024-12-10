import React, { useState, useEffect } from 'react';
import style from './Motivation.module.css';
import axios from 'axios';

function Motivation() {
    const [quote, setQuote] = useState('Loading...');
    const [author, setAuthor] = useState('Author');

    function fetchQuotes() {
        axios.get('https://zenquotes.io/api/random')
            .then(res => {
                const data = res.data[0]; // Accessing the first element of the array
                setQuote(data.q);
                setAuthor(data.a);
            })
            .catch(err => {
                console.error('Error fetching the quote:', err);
            });
    }

    useEffect(() => {
        fetchQuotes();
    }, []); // Empty dependency array to run once on mount

    const handleClick = () => {
        fetchQuotes();
    };

    return (
        <div className={style.container}>
            <h2>Motivation Boost</h2>
            <div className={style.mot}>
                {quote}
            </div>
            <div className={style.auth}>
                <p>{author}</p>
            </div>
            <button onClick={handleClick} className={style.btn}>Generate New Quote</button>
        </div>
    );
}

export default Motivation;
