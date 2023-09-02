// import React, { useState } from 'react';
import Button from './Button';

function Booklist() {
  const objectBooks = [
    {
      id: 1,
      title: 'Foundation',
      author: 'Isaac Asimov',
      category: 'Science Fiction',
      year: '1951',
    },
    {
      id: 2,
      title: 'Solaris',
      author: 'Stanislaw Lem',
      category: 'Science Fiction',
      year: '1961',
    },
    {
      id: 3,
      title: 'Hyperion',
      author: 'Dan Simmons',
      category: 'Science Fiction',
      year: '1989',
    },
    {
      id: 4,
      title: 'Along the Ganges',
      author: 'Ilija Trojanow',
      category: 'Travel',
      year: '2006',
    },
    {
      id: 5,
      title: 'The Baron in the Trees',
      author: 'Italo Calvino',
      category: 'Travel',
      year: '1957',
    },
    {
      id: 6,
      title: 'Disorder: Hard Times in the 21st Century',
      author: 'Helen Thompson',
      category: 'Economy',
      year: '2022',
    },
    {
      id: 7,
      title: 'The Bourne identity',
      author: 'Robert Ludlum',
      category: 'Action',
      year: '1980',
    },
  ];

  return (
    <div className="booklist">
      <h3>Books list</h3>
      <ul>
        {objectBooks.map((book) => (
          <li className="libook" key={book.id}>
            <div className="div1">
              <div className="bookdetails">
                <span className="categorysize">{book.category}</span>
                <span className="titlesize">{book.title}</span>
                <span className="authorsize">
                  {book.author}
                  &nbsp;-&nbsp;
                  {book.year}
                </span>
              </div>
              <div>
                <button type="button" className="lightbutton">Comments</button>
                <button type="button" className="lightbutton">Remove</button>
                <button type="button" className="lightbutton">Edit</button>
              </div>
            </div>
            <div className="div3">
              <Button className="buttonbook">Update progress</Button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div className="divnewbook">
        <h4 className="newbook">ADD NEW BOOK</h4>
      </div>
    </div>
  );
}

export default Booklist;
