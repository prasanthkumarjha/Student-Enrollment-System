const studentDataform = document.getElementById("studentForm"); // The form element by ID
// Retrieve student data from localStorage or initialize as an empty array
let allStudentData = JSON.parse(localStorage.getItem("studentInfo")) || [];
let editingIndex = null; // Variable to track the index of the student being edited

// Function to update the table with student data
function updateTable() {
  if (allStudentData.length !== 0) {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Clear existing table rows

    // Loop through all student data and create rows dynamically
    allStudentData.forEach((student, index) => {
      const row = tbody.insertRow();
      row.innerHTML = `
        <td>${student.studentName}</td>
        <td>${student.studentId}</td>
        <td>${student.email}</td>
        <td>${student.contactNo}</td>
        <td class="actions">
            <!-- Edit and Delete buttons -->
            <button class="edit" data-index="${index}"> 
                <i class="fas fa-edit"></i> Edit
            </button>
            <button class="delete" data-index="${index}">
                <i class="fas fa-trash"></i> Delete
            </button>
        </td>`;
    });
  } else {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; 
    const row = tbody.insertRow();
    row.innerHTML =  ` <tr><td colspan="5">No student information found.</td></tr>`;
  }
}

// Function to capitalize the first letter of each word
function capitalizeName(sName) {
  return sName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
    .join(" ");
}

// Handle form submission to add or edit a student
studentDataform.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from reloading the page

  // Retrieve input field values
  let studentName = document.getElementById("studentName").value.trim();
  const studentId = document.getElementById("studentId").value.trim();
  const email = document.getElementById("email").value.trim();
  const contactNo = document.getElementById("contactNo").value.trim();

  // Capitalize the student name
  studentName = capitalizeName(studentName);

  // Validate if the student ID is unique
  if (
    editingIndex === null &&
    allStudentData.some((student) => student.studentId === studentId)
  ) {
    alert("Student ID already exists. Please use a unique ID.");
    return; // Stop further execution
  }

  // Validate that the contact number is exactly 10 digits
  if (contactNo.length !== 10) {
    alert("Contact Number must be exactly 10 digits.");
    return; // Stop further execution
  }

  // Validate that all fields are filled correctly
  if (studentName && studentId && email && contactNo.length === 10) {
    const studentData = { studentName, studentId, email, contactNo };

    if (editingIndex !== null) {
      // Update existing student record if editing
      allStudentData[editingIndex] = studentData;
      editingIndex = null; // Reset editing index
    } else {
      // Add new student record
      allStudentData.push(studentData);
    }
    // Save updated student data to localStorage
    localStorage.setItem("studentInfo", JSON.stringify(allStudentData));

    // Clear form inputs after submission
    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";
    document.getElementById("email").value = "";
    document.getElementById("contactNo").value = "";

    updateTable(); // Refresh the table
  } else {
    alert("Please fill in all fields correctly.");
  }
});

// Handle Edit and Delete button clicks
document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const index = e.target.dataset.index;
    deleteStudent(index);
  }

  if (e.target.classList.contains("edit")) {
    const index = e.target.dataset.index;
    editStudent(index);
  }
});

// Function to delete a student record
function deleteStudent(index) {
  allStudentData.splice(index, 1);
  localStorage.setItem("studentInfo", JSON.stringify(allStudentData));
  updateTable(); // Refresh the table
}

// Function to edit a student record
function editStudent(index) {
  const student = allStudentData[index];

  // Getting selected student data
  document.getElementById("studentName").value = student.studentName;
  document.getElementById("studentId").value = student.studentId;
  document.getElementById("email").value = student.email;
  document.getElementById("contactNo").value = student.contactNo;

  editingIndex = index; // Set editing index for tracking
}

updateTable(); // Load and populate the table when the page is loaded
