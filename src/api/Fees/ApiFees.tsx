import { IAddFeesBody, IGetFeesDetailsBody } from "src/Interface/Fees/IFees"; // Update import to match your Enquiry interfaces
import http from '../../utils/http-common1';



const GetAcademicYearApi = () => {
  return http.post<IAddFeesBody[]>('GetAcademicYear');
};
const GetFeeNameApi = () => {
    return http.post<IAddFeesBody[]>('GetFeeName');
  };

  const GetClassFeeListApi = () => {
    return http.post<IAddFeesBody[]>('GetClassFeeList');
  };

  const AddFeeDetailsApi = (data: IAddFeesBody) => {
    return http.post<string>('AddFeeDetails', data);
  };


  const GetClassFeeDetailsForEditApi = (data: IGetFeesDetailsBody) => {
    return http.post<IGetFeesDetailsBody>('GetClassFeeDetailsForEdit', data);
  };


  const DeleteFeeDetailsApi = (data: IGetFeesDetailsBody) => {
    return http.post<string>('DeleteFeeDetails', data); 
  };

const FeesApi = {
    GetAcademicYearApi,
    GetFeeNameApi,
    AddFeeDetailsApi,
    GetClassFeeListApi,
    GetClassFeeDetailsForEditApi,
    DeleteFeeDetailsApi
};
export default FeesApi;
