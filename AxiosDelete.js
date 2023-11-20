import React, { useState } from 'react';
import axios from 'axios';

const AxiosDelete = () => {
  const [bookId, setBookId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/books/${bookId}`);
      setMessage(`Book with ID ${bookId} deleted successfully`);
    } catch (error) {
      setMessage(`Error deleting book with ID ${bookId}`);
    }
  };

  return (
    <div>
      <h2>Delete Books</h2>
      <label>
        Enter Book ID to Delete:
        <input
          type='text'
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
        />
      </label>
      <button onClick={handleDelete}>Delete Book</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AxioDelete;
