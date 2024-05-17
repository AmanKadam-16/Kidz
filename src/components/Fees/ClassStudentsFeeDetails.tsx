import React from 'react';
import { Container, Grid, Button, Typography, Select, MenuItem, FormControl, InputLabel, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import PageHeader from 'src/library/heading/pageHeader';
import DropDown from 'src/library/DropDown/DropDown';
const ClassStudentsFeeDetails = () =>{
    return(
<>
<Container maxWidth="md">
      <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <PageHeader heading={"Fee Details"} />
                        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Day Care</InputLabel>
                <Select label="Day Care">
                  <MenuItem value="">Select Day Care</MenuItem>
                  
               
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Fee Type</InputLabel>
                <Select label="Fee Type">
                  <MenuItem value="">Select Fee Type</MenuItem>
               
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Fee Name</InputLabel>
                <Select label="Fee Name">
                  <MenuItem value="">Select Fee Name</MenuItem>
             
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add Fee Details
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Academic Year</TableCell>
                  <TableCell>Fee Type</TableCell>
                  <TableCell>Fee Name</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Amount (Rs.)</TableCell>
                  <TableCell>Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
</>
    )
}
export default ClassStudentsFeeDetails

