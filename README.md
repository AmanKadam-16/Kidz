Okay, here is a list of all the API endpoints defined in the provided code, formatted for easier testing in Postman. Remember to replace placeholders like `{courseId}`, `{batchId}`, `{studentId}` with actual IDs, and use `{{baseUrl}}` if you set up an environment variable (e.g., `https://localhost:7123` or `http://localhost:5022`).

**Authentication (`/api/auth`)**

1.  **Register User**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/auth/register`
    *   **Auth:** None (`AllowAnonymous`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "email": "new.user@example.com",
          "password": "YourPassword123!",
          "fullName": "New User Name",
          "phoneNumber": "555-1234" // Optional
        }
        ```
    *   **Notes:** First user registered becomes 'Admin', others 'Student'.

2.  **Login User**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/auth/login`
    *   **Auth:** None (`AllowAnonymous`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "email": "registered.user@example.com",
          "password": "TheirPassword123!"
        }
        ```
    *   **Notes:** Copy the `sessionId` from the successful response `data`.

3.  **Verify Current Session**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/auth/verify-session`
    *   **Auth:** Requires Session Header
    *   **Headers:** `X-Session-Id`: `<Your_Session_ID>`
    *   **Body:** None

4.  **Logout User**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/auth/logout`
    *   **Auth:** Requires Session Header
    *   **Headers:** `X-Session-Id`: `<Your_Session_ID>`
    *   **Body:** None

**Student Actions (`/api/students`)**

*   **Authentication:** All endpoints below (unless marked `AllowAnonymous`) require a valid `X-Session-Id` header from a logged-in **Student**.

5.  **Get My Profile**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/students/my-profile`
    *   **Auth:** Student Session Header (`X-Session-Id`)
    *   **Body:** None

6.  **Update My Profile**
    *   **Method:** `PUT`
    *   **URL:** `{{baseUrl}}/api/students/my-profile`
    *   **Auth:** Student Session Header (`X-Session-Id`)
    *   **Body:** `form-data`
        *   `FullName` (Text): `Updated Student Name`
        *   `PhoneNumber` (Text, Optional): `555-5678`
        *   `DateOfBirth` (Text, Optional): `YYYY-MM-DD` (e.g., `1999-10-20`)
        *   `EducationLevel` (Text, Optional): `Bachelor's Degree`
        *   `SchoolCollegeName` (Text, Optional): `State University`
        *   `YearOfStudy` (Text, Optional): `3rd Year`
        *   `ProfilePhoto` (File, Optional): *Select an image file*

7.  **Get My Assigned Courses**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/students/my-courses`
    *   **Auth:** Student Session Header (`X-Session-Id`)
    *   **Body:** None

8.  **Get Course Details (Student View)**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/students/courses/{courseId}/details`
    *   **Auth:** Student Session Header (`X-Session-Id`)
    *   **Body:** None
    *   **Notes:** Replace `{courseId}` with the ID of a course the student is assigned to or a free course.

9.  **Mark Lesson as Complete**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/students/lessons/mark-complete`
    *   **Auth:** Student Session Header (`X-Session-Id`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "lessonId": 1 // ID of the lesson to mark complete
        }
        ```

10. **Get My Progress Overview**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/students/my-progress/overview`
    *   **Auth:** Student Session Header (`X-Session-Id`)
    *   **Body:** None

11. **Get Free Courses (Public)**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/students/courses/free`
    *   **Auth:** None (`AllowAnonymous`)
    *   **Body:** None

**Course Management (`/api/courses`)**

*   **Authentication:** Admin actions require a valid `X-Session-Id` header from a logged-in **Admin**. Public endpoints are marked.

12. **Get All Courses (Public)**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/courses`
    *   **Auth:** None (`AllowAnonymous`)
    *   **Body:** None

13. **Get Course by ID (Public)**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/courses/{courseId}`
    *   **Auth:** None (`AllowAnonymous`)
    *   **Body:** None
    *   **Notes:** Replace `{courseId}`.

14. **Create Course (Admin)**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/courses`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `form-data`
        *   `Title` (Text): `New Course Title`
        *   `Description` (Text, Optional): `Course Description`
        *   `IsFree` (Text): `true` or `false`
        *   `ThumbnailImage` (File, Optional): *Select thumbnail image*

15. **Add Module to Course (Admin)**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/courses/modules`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "courseId": 1, // ID of the course to add to
          "title": "Module 1: Introduction",
          "moduleOrder": 1, // Unique order within the course
          "description": "Module description" // Optional
        }
        ```

16. **Add Lesson to Module (Admin)**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/courses/lessons`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "moduleId": 1, // ID of the module to add to
          "title": "Lesson 1.1: Getting Started",
          "lessonOrder": 1 // Unique order within the module
        }
        ```

17. **Add Content to Lesson (Admin)**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/courses/lessons/content`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `form-data`
        *   `LessonId` (Text): `1` // ID of the lesson to add content to
        *   `ContentType` (Text): `TextInfo` / `VideoLink` / `PDFLink` / `DocLink`
        *   `ContentValue` (Text, Optional): *Required for TextInfo/VideoLink. Put text or URL here.*
        *   `ContentFile` (File, Optional): *Required for PDFLink/DocLink. Select PDF/Doc file here.*
    *   **Notes:** Provide `ContentValue` OR `ContentFile` based on `ContentType`. If `ContentFile` is provided, the *saved file path* will be stored in the DB.

18. **Add Quiz to Lesson (Admin)**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/courses/quizzes`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "lessonId": 1, // ID of the lesson to add quiz to (UNIQUE per lesson)
          "title": "Lesson 1.1 Quiz"
        }
        ```

19. **Add Question to Quiz (Admin)**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/courses/questions`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "quizId": 1, // ID of the quiz to add question to
          "questionText": "What is 2 + 2?",
          "optionA": "3",
          "optionB": "4",
          "optionC": "5", // Optional
          "optionD": null, // Optional (use null if not needed)
          "correctOption": "B", // 'A', 'B', 'C', or 'D'
          "marks": 1
        }
        ```

**Admin Actions (`/api/admin`)**

*   **Authentication:** All endpoints below require a valid `X-Session-Id` header from a logged-in **Admin**.

20. **Get All Registered Students**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/admin/students`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** None

21. **Create Batch**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/admin/batches`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "batchName": "Batch A - Intro to C#", // Must be unique
          "courseId": 1 // ID of the course for this batch
        }
        ```

22. **Get All Batches**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/admin/batches`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** None

23. **Assign Student to Batch**
    *   **Method:** `POST`
    *   **URL:** `{{baseUrl}}/api/admin/batches/assign-student`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** `raw` (JSON)
        ```json
        {
          "batchId": 1, // ID of the batch
          "studentId": 2 // ID of the student (must be a student role user)
        }
        ```

24. **Get Students in a Specific Batch**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/admin/batches/{batchId}/students`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** None
    *   **Notes:** Replace `{batchId}`.

25. **Get Specific Student's Progress for a Course**
    *   **Method:** `GET`
    *   **URL:** `{{baseUrl}}/api/admin/students/{studentId}/progress/{courseId}`
    *   **Auth:** Admin Session Header (`X-Session-Id`)
    *   **Body:** None
    *   **Notes:** Replace `{studentId}` and `{courseId}`.

This list should cover all the endpoints defined in your controllers. Remember to test both success and failure cases (e.g., invalid input, incorrect session ID, wrong role).
