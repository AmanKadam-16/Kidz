import http from '../../utils/http-common1';


import { IAddFollowUpBody } from "src/Interface/FollowUp/IFollowUp"; // Import the correct interface for follow-up

const AddFollowUpApi = (data: IAddFollowUpBody) => {
  return http.post<string>('AddFollowUp', data); // Assuming 'AddFollowUp' is the endpoint for adding a follow-up
};

const GetFollowUpListApi = () => {
  return http.post<IAddFollowUpBody[]>('GetStudentFollowUpList'); // Assuming 'GetStudentFollowUpList' is the endpoint for fetching follow-up list
};

const FollowUpApi = {
  AddFollowUpApi,
  GetFollowUpListApi,
};

export default FollowUpApi;
