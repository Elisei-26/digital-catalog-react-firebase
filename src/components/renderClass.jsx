import React from 'react';
import { Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

function RenderClass(props) {
  if(props.renderData.length === 0) {
    return null;
  }
  return (
    <Grid>
      <Paper elevation={8}>
        <Table className="table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Class name</TableCell>
              <TableCell align="center">Student name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.renderData.map((item, index) => (
              <TableRow key={index}>
                <TableCell align="center">{props.outputClassName}</TableCell>
                <TableCell align="center">{item}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
}

export default RenderClass;