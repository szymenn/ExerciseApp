﻿using ExcerciseApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExcerciseApp.Core.Interfaces
{
    public interface IBookRentalRepository
    {
        void RentBook(Borrow borrow);
        IEnumerable<int> PassBookIn(int bookId);
        IEnumerable<int> GetRentedBooksIds();
        IEnumerable<int> GetRentingUsersIds();
        IEnumerable<int> GetUserBooksIds(int userId);
        IEnumerable<Borrow> GetUserBorrowHistory(int userId);
        IEnumerable<Borrow> GetBookBorrowHistory(int bookId);
        bool IsRented(int bookId);
    }
}
