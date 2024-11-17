# Student Enrollment System

This project is a simple Student Registration System where students or institutions can register, view, edit, and delete student records. It allows the management of student data such as name, student ID, email, and contact number. All data is stored locally in the browser using `localStorage` to allow persistence across sessions.

## Features
- **Register a Student**: Fill out a form to register a student's details.
- **Edit Student Information**: Modify any existing student's details.
- **Delete Student Record**: Remove a student from the system.
- **View Student Data**: Display all registered students in a table format.
- **Data Validation**: Ensure that student ID is unique, the contact number is exactly 10 digits, and all fields are filled properly.
  
## Technologies Used
- HTML
- CSS (Tailwind CSS for styling)
- JavaScript (for dynamic behaviour and form validation)
- LocalStorage (for persistent data storage)

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/prasanthkumarjha/Student-Enrollment-System.git
    ```

2. Open the `index.html` file in your browser to view the application.

## File Structure
├── index.html # The main HTML page ├── app.js # JavaScript logic for handling student data ├── output.css # Tailwind-generated CSS ├── README.md # Project documentation

## How to Use
1. **Register a Student**:
   - Enter the student's details into the registration form (Name, Student ID, Email, and Contact Number).
   - Click "Save" to add the student to the list.
   
2. **Edit a Student**:
   - Click the "Edit" button next to a student's record to modify their details.
   - The form will populate with the student's current data, allowing you to make changes and save the updates.

3. **Delete a Student**:
   - Click the "Delete" button next to a student's record to remove them from the list.

4. **View All Students**:
   - All registered students will appear in a table with the ability to edit or delete records.

## Features in Detail

### 1. **Student Registration Form**
   - The registration form collects basic information: Name, Student ID, Email, and Contact Number.
   - The form includes simple client-side validation to ensure data integrity:
     - Student Name only accepts alphabetic characters and spaces.
     - Student ID must be a unique number.
     - The contact Number must be exactly 10 digits.

### 2. **Dynamic Data Table**
   - The registered students are displayed in a dynamic table that allows for editing or deleting records.
   - The table will update automatically whenever data is added, edited, or deleted.
   
### 3. **Data Persistence**
   - Student data is stored locally in the browser's `localStorage`. This ensures the data persists even if the page is reloaded or the browser is closed and reopened.
   - The data is saved as a JSON string in `localStorage` and retrieved each time the page is loaded.

### 4. **User Interface**
   - The application uses Tailwind CSS for styling, with a responsive design that works on small and large screens.
   - Icons from FontAwesome are used for buttons like "Edit" and "Delete."

## Demo

You can view a live demo of this project by visiting the [GitHub Pages link (coming soon)](https://prasanthkumarjha.github.io/student-enrollment-system/).

## Contributing

If you want to contribute to this project, feel free to fork this repository and submit pull requests. Suggestions and improvements are welcome!


