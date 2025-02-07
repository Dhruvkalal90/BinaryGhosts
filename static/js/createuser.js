function goBack() {
    window.history.back();
}

function openForm(role) {
    document.getElementById("form-container").style.display = "block";
    const formTitle = document.getElementById("form-title");
    const dynamicFields = document.getElementById("dynamic-fields");

    if (role === "faculty") {
        formTitle.innerText = "Add Faculty";
        dynamicFields.innerHTML = `
            <input type="text" placeholder="Faculty ID" required>
            <input type="text" placeholder="Faculty Name" required>
            <input type="email" placeholder="Email" required>
            <input type="text" placeholder="Phone Number" required>
            <input type="text" placeholder="Course" required>
            <input type="text" placeholder="Subject" required>
            <input type="password" placeholder="Password" required>
        `;
    } else {
        formTitle.innerText = "Add Student";
        dynamicFields.innerHTML = `
            <input type="text" placeholder="Student ID" required>
            <input type="text" placeholder="Student Name" required>
            <input type="email" placeholder="Email" required>
            <input type="text" placeholder="Phone Number" required>
            <input type="text" placeholder="Course Selected" required>
            <input type="text" placeholder="Division" required>
            <input type="password" placeholder="Password" required>
        `;
    }
}
