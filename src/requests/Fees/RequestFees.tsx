import { createSlice } from "@reduxjs/toolkit";
import FeesApi from "src/api/Fees/ApiFees";
import { IAddFeesBody, IGetFeesDetailsBody } from "src/Interface/Fees/IFees";
import { AppThunk } from "src/store";
import { getDateFormatted } from 'src/components/Common/utils1';

const FeesSlice = createSlice({
    name: 'Fees',
    initialState: {
        AcademicYear: [],
        FeeName: [],
        ClassFeeList: [],
        AddFeeDetailsMsg: '',
        FeeDetails: null,
        updateFeeDetailsMsg: '',
        deleteFeeDetailsMsg: '',
        Loading: true
    },
    reducers: {

        getAcademicYear(state, action) {
            state.Loading = false;
            state.AcademicYear = action.payload;
        },

        getClassFeeList(state, action) {
            state.Loading = false;
            state.ClassFeeList = action.payload;
        },
        getFeeName(state, action) {
            state.Loading = false;
            state.FeeName = action.payload;
        },
        getAddFeeDetailsMsg(state, action) {
            state.Loading = false;
            state.AddFeeDetailsMsg = action.payload;
        },
        resetAddFeesDetailsMsg(state) {
            state.Loading = false;
            state.AddFeeDetailsMsg = "";
        },
        getFeeDetails(state, action) {
            state.Loading = false;
            state.FeeDetails = action.payload;
        },
        resetFeeDetails(state) {
            state.Loading = false;
            state.FeeDetails = null;
        },
        getDeleteFeeDetailsMsg(state, action) {
            state.Loading = false;
            state.deleteFeeDetailsMsg = action.payload;
        },
        resetDeleteFeeDetailsMsg(state) {
            state.Loading = false;
            state.deleteFeeDetailsMsg = "";
        },
        getLoading(state, action) {
            state.Loading = true;
        },
    }
});


export const getAcademicYear =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetAcademicYearApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Name: Item.AcademicYear,
                    Value: Item.ID.toString()
                };
            });
            dispatch(FeesSlice.actions.getAcademicYear(responseData));
        };

export const getFeeName =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetFeeNameApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Name: Item.FeeName,
                    Value: Item.ID.toString()
                };
            });
            dispatch(FeesSlice.actions.getFeeName(responseData));
        };
export const AddFeeDetails =
    (data: IAddFeesBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.AddFeeDetailsApi(data);
            dispatch(FeesSlice.actions.getAddFeeDetailsMsg(response.data));
        };

export const resetAddFeesDetailsMsg =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.resetAddFeesDetailsMsg());
        };

export const resetFeeDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.resetFeeDetails());
        };

export const getClassFeeList =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            // const responseData = response.data.map((Item, i) => {
            //     return {
            //         Id: Item.ID,
            //         Text1: Item.EmployeeName,
            //         Text2: Item.BirthDate,
            //         Text3: Item.EmailId,
            //         Text4: Item.PhoneNo,
            //     };
            const response = await FeesApi.GetClassFeeListApi();
            const responseData = response.data.map((Item, i) => {
                return {
                    Id: Item.ID,
                    Text1: Item.ClassName,
                    Text2: Item.AcademicYear,
                    Text3: Item.FeeName,
                    Text4: Item.FeeType,
                    Text5: Item.Amount,
                    Text6: getDateFormatted(Item.EndDate)
                };
            });
            dispatch(FeesSlice.actions.getClassFeeList(responseData));
        };

        export const getFeeDetails =
    (data: IGetFeesDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.GetClassFeeDetailsForEditApi(data);

            dispatch(FeesSlice.actions.getFeeDetails(response.data));
        };

        export const DeleteFeeDetails =
    (data: IGetFeesDetailsBody): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.getLoading(true));
            const response = await FeesApi.DeleteFeeDetailsApi(data);
            dispatch(FeesSlice.actions.getDeleteFeeDetailsMsg(response.data));
        };
        export const resetDeleteFeeDetails =
    (): AppThunk =>
        async (dispatch) => {
            dispatch(FeesSlice.actions.resetDeleteFeeDetailsMsg());
        };

export default FeesSlice.reducer;
