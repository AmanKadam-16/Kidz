import { Box, Card, Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid, Switch, Typography } from "@mui/material"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IAddEnquiryBody, IGetEnquiryDetailsBody } from "src/Interface/Enquiry/IEnquiry"
import { IAddFollowUpBody } from "src/Interface/FollowUp/IFollowUp"
import ButtonField from "src/libraries/Training/ButtonField"
import CalendarField from "src/libraries/Training/CalendarField"
import Dropdown from "src/libraries/Training/Dropdown"
import InputField from "src/libraries/Training/InputField"
import RadioList from "src/libraries/Training/RadioList"
import SendIcon from '@mui/icons-material/Send';
import PageHeader from 'src/library/heading/pageHeader'
import { AddStudentDetails, getClass, resetAddEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList"
import { getEnquiryDetails } from "src/requests/Enquiry/RequestEnquiryList"
import { RootState, useDispatch, useSelector } from 'src/store'
import { calculateAge, getCalendarFormat } from "../Common/utils1"
import { AddFollowUpDetails, GetFollowUpHistoryList, GetStatus, resetAddFollowUpMsg } from "src/requests/FollowUp/RequestFollowUpList"
import { toast } from "react-toastify"

import { ButtonPrimary } from "src/library/StyledComponents/CommonStyled"
const StudentFeeForm = () => {
    const { Id } = useParams();
    const [AcademicYear, setAcademicYear] = useState("")
    const [FeeName, setFeeName] = useState("")
    const [FeeType, setFeeType] = useState("")
    const [ClassName , setClassName] = useState("")
    const [Amount, setAmount] = useState("")
    const [EndDate, setEndDate] = useState('')
    const [Student, setStudent ] = useState('')

    return (
        <>
            <PageHeader heading={'Student Fee Details'} />
            <Container sx={{ py: 2 }}>
                <Card variant="outlined">
                    <Box p={2}>
                        <form>
                            <Grid container spacing={2} >
                                <Grid item xs={6}>
                                    <InputField Item={undefined} Label={'Academic Year'}
                                        ClickItem={undefined}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField Item={undefined} Label={'Class'}
                                        ClickItem={undefined}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <InputField Item={undefined} Label={'Student Name'}
                                        ClickItem={undefined}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6}>
                                    <InputField Item={undefined} Label={'Fee Name'}
                                        ClickItem={undefined}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6} >
                                    <InputField Item={undefined} Label={'Fee Type'}
                                        ClickItem={undefined}
                                        ErrorMessage={undefined} />
                                </Grid>
  
                                    <Grid item xs={6}>
                                    <InputField Item={undefined} Label={'Amount'}
                                        ClickItem={undefined}
                                        ErrorMessage={undefined} />
                                </Grid>
                                <Grid item xs={6} sm={6}  >
                                        <CalendarField
                                            Item={undefined}
                                            Label="End Date *"
                                            ClickItem={undefined}
                                            ErrorMessage={undefined}
                                        />

                                    </Grid>
                                <Grid item xs={6}>
                                
                                </Grid>
                                <Grid item xs={6}>
                                    {/* <ButtonField Label={'Submit'} ClickItem={clickSubmit} /> &nbsp;&nbsp; */}
                                    <ButtonPrimary onClick={undefined} >Submit&nbsp;<SendIcon fontSize="small" /></ButtonPrimary>

                                </Grid>
                                <Grid item xs={6}>
                                    <ButtonPrimary onClick={undefined} >Clear</ButtonPrimary>

                                    {/* <ButtonField Label={'Cancel'} ClickItem={undefined} /> */}
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Card>
            </Container>


        </>
    )
}

export default StudentFeeForm