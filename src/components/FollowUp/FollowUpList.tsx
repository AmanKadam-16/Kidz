import CallIcon from '@mui/icons-material/Call';
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Grid, Button, Typography, Box, Card, IconButton } from '@mui/material';
import DynamicList from 'src/libraries/Training/DynamicList';

import PageHeader from 'src/libraries/heading/PageHeader';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { getFollowUpList } from 'src/requests/FollowUp/RequestFollowUpList'; 
import { useNavigate } from 'react-router-dom';

const FollowUpList = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const followUpList = useSelector((state: RootState) => state.FollowUp.FollowUpList);
    useEffect(() => {
        dispatch(getFollowUpList());
    }, [dispatch]);


    const [pageIndex, setPageIndex] = useState(0);
    const pageSize = 10;

    
    const handleNextPage = () => {
        setPageIndex(pageIndex + 1);
    };

   
    const handlePrevPage = () => {
        setPageIndex(pageIndex - 1);
    };


    const paginatedList = followUpList.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    const HeaderList = ["Name", "FollowUp Count", "Status", "Reminder", "Comment", "Society", "FollowUp Date-Time", "Follow Up","Admission Link","Remove"];
    const IconList = [
        { Id: 1, Icon:<IconButton> <CallIcon /></IconButton>, Action: 'FollowUp' },
        { Id: 1, Icon: <IconButton><LinkIcon /></IconButton>, Action: 'Admission Link' },
        { Id: 1, Icon: <IconButton><DeleteIcon /></IconButton>, Action: 'Remove' }
    ];

    const totalCount = followUpList.length;
    const startIndex = pageIndex * pageSize + 1;
    const endIndex = Math.min((pageIndex + 1) * pageSize, totalCount);
console.log(followUpList);
const clickItem = (value) => {
 if (value.Action === "FollowUp") {
  navigate("../FollowUpForm/" + value.Id)
}
}
    return (
        <Container>
            
        <Grid container spacing={2}mt={1} sx={{ width: '100%', overflow: 'hidden' }} >

          <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative' }}>

            <div style={{ flexGrow: 1, overflow: 'auto' }}>
              <DynamicList
                HeaderList={HeaderList}
                ItemList={followUpList }
                IconList={IconList}
                ClickItem={clickItem}
              />
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <Typography variant="body2">Enquiry List {startIndex}-{endIndex} of {totalCount} Enquiries</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button onClick={handlePrevPage} variant="outlined" disabled={pageIndex === 0}  style={{color:'#878686'}}>
                  Previous Page
                </Button>
                <Button onClick={handleNextPage} variant="outlined" disabled={(pageIndex + 1) * pageSize >= totalCount} style={{color:'#878686'}}>
                  Next Page
                </Button>
              </Box>
            </Box>
  
          </Grid>
  
        </Grid>

      </Container>
    );

    
}
export default FollowUpList;



