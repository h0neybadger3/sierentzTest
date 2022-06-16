import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { format } from 'date-fns';
import s from './PopupTable.module.css';

export default function PopupTable() {
  const [data, setData] = useState([]);
  const [valueInput, setValueInput] = useState(0);
  const [userInput, setUserInput] = useState('User');
  const [commentInput, setCommentInput] = useState('');
  const today = format(new Date(), 'dd.MM.yyyy');

  const handlerValueChange = e => {
    setValueInput(e.target.value);
  };
  const handlerUserChange = e => {
    setUserInput(e.target.value);
  };

  const handlerCommentChange = e => {
    setCommentInput(e.target.value);
  };

  const clearInputValue = () => {
    setValueInput(0);
    setUserInput('User');
    setCommentInput('');
  };

  const handlerSubmit = e => {
    e.preventDefault();
    setData([
      ...data,
      {
        id: nanoid(),
        value: valueInput,
        user: userInput,
        date: today,
        comment: commentInput,
      },
    ]);
    clearInputValue();
  };

  return (
    <div className={s.wrapper}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow
              sx={{
                th: {
                  border: '1px solid #757575',
                },
              }}
            >
              <TableCell align="center">value</TableCell>
              <TableCell align="center">date</TableCell>
              <TableCell align="center">user</TableCell>
              <TableCell align="center">comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.map(({ id, value, date, user, comment }) => (
                <TableRow
                  key={id}
                  sx={{
                    td: {
                      border: '1px solid #757575',
                    },
                  }}
                >
                  <TableCell>{value}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>{user}</TableCell>
                  <TableCell>{comment}</TableCell>
                </TableRow>
              ))}
            <TableRow
              sx={{
                td: {
                  border: '1px solid #757575',
                },
              }}
            >
              <TableCell>
                <label htmlFor="value">
                  <input
                    name="value"
                    type="number"
                    value={valueInput}
                    onChange={handlerValueChange}
                    className={s.input}
                  />
                </label>
              </TableCell>
              <TableCell>
                <label htmlFor="date">
                  <input
                    name="date"
                    type="string"
                    value={today}
                    disabled
                    className={s.input}
                  />
                </label>
              </TableCell>
              <TableCell>
                <label htmlFor="user">
                  <select
                    name="user"
                    className={s.input}
                    onChange={handlerUserChange}
                    value={userInput}
                  >
                    <option value="User">User</option>
                    <option value="Petro">Petro</option>
                    <option value="Ivan">Ivan</option>
                    <option value="Anton">Anton</option>
                    <option value="Alex">Alex</option>
                  </select>
                </label>
              </TableCell>
              <TableCell>
                <label htmlFor="comment">
                  <input
                    name="comment"
                    type="text"
                    onChange={handlerCommentChange}
                    value={commentInput}
                    className={s.input}
                  />
                </label>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className={s.btn__wrapper}>
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={handlerSubmit}
          sx={{
            marginBottom: '10px',
          }}
        >
          add
        </Button>
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={() => window.close()}
        >
          back
        </Button>
      </div>
    </div>
  );
}
