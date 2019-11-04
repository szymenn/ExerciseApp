import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table, TableBody, TableHead, TableCell, TableRow, makeStyles, Paper } from '@material-ui/core';

function mapStateToProps(state){
    console.log(state)
    return {
        userDetails: state.users.userDetails
    }
}

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });

function UserDetails(props){
    const classes = useStyles()

    const userBooks = props.userDetails.rentedBooks.map((book, index) => {
        let addDate = new Date(book.addDate)
        let releaseDate = new Date(book.releaseDate)
        let modifiedDate = new Date(book.modifiedDate)
return (
    <TableRow key={book.id}>
    <TableCell>{book.id}</TableCell>
    <TableCell>{book.author}</TableCell>
    <TableCell>{book.title}</TableCell>
    <TableCell>{releaseDate.toDateString()}</TableCell>
    <TableCell>{book.isbn}</TableCell>
    <TableCell>{book.count}</TableCell>
    <TableCell>{addDate.toDateString()}</TableCell>
    <TableCell>{modifiedDate.toDateString()}</TableCell>
    <TableCell>{book.bookGenreId}</TableCell>
</TableRow>
    )})

    const userRentals = props.userDetails.borrowHistory.map((borrow, index) => {
        let fromDate = new Date(borrow.fromDate)
        let toDate = new Date(borrow.toDate)
        return(
        <TableRow>
            <TableCell>{borrow.bookId}</TableCell>
            <TableCell>{fromDate.toDateString()}</TableCell>
            <TableCell>{toDate.toDateString()}</TableCell>
            <TableCell>{borrow.isReturned.toString()}</TableCell>
        </TableRow>
        )
    })

    return(
        <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead >
            <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Release Date</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Count</TableCell>
            <TableCell>Add Date</TableCell>
            <TableCell>Modified Date</TableCell>
            <TableCell>Book Genre Id</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {userBooks}
        </TableBody>
     </Table>
             <Table>
             <TableHead>
                 <TableRow>
                 <TableCell>Book Id</TableCell>
                 <TableCell>From Date</TableCell>
                 <TableCell>To Date</TableCell>
                 <TableCell>Is Returned</TableCell>
                 </TableRow>
             </TableHead>
             <TableBody>
                 {userRentals}
             </TableBody>
          </Table>
          </Paper>
    )
}

export default connect(mapStateToProps)(withRouter(UserDetails))
