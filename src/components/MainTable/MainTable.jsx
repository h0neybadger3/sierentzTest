import { Fragment } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../../data/data.json';

export default function MainTable({ onClick }) {
  const years = [2017, 2018, 2019];
  const newData = Object.entries(data).map(([key, value]) => {
    return { region: key, value };
  });

  return (
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
            <TableCell align="center" rowSpan={2}>
              Regions
            </TableCell>
            <TableCell colSpan={3} align="center">
              2017
            </TableCell>
            <TableCell colSpan={3} align="center">
              2018
            </TableCell>
            <TableCell colSpan={3} align="center">
              2019
            </TableCell>
          </TableRow>
          <TableRow
            sx={{
              th: {
                border: '1px solid #757575',
              },
            }}
          >
            {years.map(year => (
              <Fragment key={year}>
                <TableCell align="center">XX</TableCell>
                <TableCell align="center">YY</TableCell>
                <TableCell align="center">ZZ</TableCell>
              </Fragment>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {newData.flatMap(({ region, value }) => (
            <TableRow
              key={region}
              sx={{
                td: {
                  border: '1px solid #757575',
                },
              }}
            >
              <TableCell align="center">{region}</TableCell>
              {years.map(year => (
                <Fragment key={year}>
                  <TableCell
                    align="center"
                    onClick={onClick}
                    sx={{
                      cursor: 'pointer',
                    }}
                  >
                    {value?.G[year]?.XX?.value}
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={onClick}
                    sx={{
                      cursor: 'pointer',
                    }}
                  >
                    {value?.G[year]?.YY?.value}
                  </TableCell>
                  <TableCell
                    align="center"
                    onClick={onClick}
                    sx={{
                      cursor: 'pointer',
                    }}
                  >
                    {value?.G[year]?.ZZ?.value}
                  </TableCell>
                </Fragment>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
