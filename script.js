let familyData = JSON.parse(localStorage.getItem('familyData')) || [];
renderTable();

function addMember() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const relationship = document.getElementById('relationship').value;
  const editIndex = document.getElementById('editIndex').value;

  if (editIndex !== "") {
    familyData[editIndex] = { name, age, relationship };
    document.getElementById('editIndex').value = "";
  } else {
    familyData.push({ name, age, relationship });
  }

  localStorage.setItem('familyData', JSON.stringify(familyData));
  renderTable();
  clearForm();
}

function editMember(index) {
  const member = familyData[index];
  document.getElementById('name').value = member.name;
  document.getElementById('age').value = member.age;
  document.getElementById('relationship').value = member.relationship;
  document.getElementById('editIndex').value = index;
}

function deleteMember(index) {
  familyData.splice(index, 1);
  localStorage.setItem('familyData', JSON.stringify(familyData));
  renderTable();
}

function renderTable() {
  const tableBody = document.getElementById('familyTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  familyData.forEach((member, index) => {
    const row = tableBody.insertRow();
    const nameCell = row.insertCell();
    const ageCell = row.insertCell();
    const relationshipCell = row.insertCell();
    const actionsCell = row.insertCell();

    nameCell.textContent = member.name;
    ageCell.textContent = member.age;
    relationshipCell.textContent = member.relationship;
    actionsCell.innerHTML = `<button class="edit-btn" onclick="editMember(${index})">Edit</button> <button class="delete-btn" onclick="deleteMember(${index})">Delete</button>`; // Corrected line
  });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('relationship').value = '';
}