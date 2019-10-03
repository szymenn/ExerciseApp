﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    interface IBooksRepository
    {
        IEnumerable<Book> GetRentedBooks();
        IEnumerable<User> GetRentingUsers();
        void BorrowBook(int bookId, int userId);
        void PassBookIn(int bookId);
        IEnumerable<Book> GetAll();
        IEnumerable<Book> AddBook(Book book);
        Book EditBook(Book book, int bookId);
        BookDetails GetBookDetails(int bookId);
        BookDetails GetBookDetails(int bookId);
    }
}
