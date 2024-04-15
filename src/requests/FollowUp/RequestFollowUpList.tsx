import { createSlice } from "@reduxjs/toolkit";
import FollowUpApi from "src/api/FollowUp/ApiFollowUp"; // Import the correct API for follow-up
import { IAddFollowUpBody } from "src/Interface/FollowUp/IFollowUp"; // Import the correct interfaces for follow-up
import { AppThunk } from "src/store";
import { getDateFormatted } from 'src/components/Common/util';

const FollowUpSlice = createSlice({
    name: 'FollowUp', // Change slice name to 'FollowUp'
    initialState: {
        AddFollowUpMsg: '',
        FollowUpList: [],
        Loading: true
    },
    reducers: {
        getAddFollowUpMsg(state, action) {
            state.Loading = false;
            state.AddFollowUpMsg = action.payload;
        },
        resetAddFollowUpMsg(state) {
            state.Loading = false;
            state.AddFollowUpMsg = "";
        },
        getFollowUpList(state, action) {
            state.Loading = false;
            state.FollowUpList = action.payload;
        },
        getLoading(state, action) {
            state.Loading = true;
        }
    }
});

export const AddFollowUp =
    (data: IAddFollowUpBody): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.getLoading(true));
            const response = await FollowUpApi.AddFollowUpApi(data);
            dispatch(FollowUpSlice.actions.getAddFollowUpMsg(response.data));
        };

export const resetAddFollowUpMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.resetAddFollowUpMsg());
        };

export const getFollowUpList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FollowUpSlice.actions.getLoading(true));
            const response = await FollowUpApi.GetFollowUpListApi(); // Update to use follow-up API
            const responseData = response.data.map((Item, i) => {
                return {
                    ID: Item.StudentId,
                    Text1: Item.StudentName,
                    Text2: Item.FollowUpCount,
                    Text3: Item.Status,
                    Text4: Item.Reminder,
                    Text5: Item.Comment,
                    Text6: Item.SocietyName,
                    Text7: Item.FollowUpDate// Update to use follow-up date
                }
            })
            dispatch(FollowUpSlice.actions.getFollowUpList(responseData));
        };

export default FollowUpSlice.reducer;
