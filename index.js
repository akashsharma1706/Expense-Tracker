// Function to add expense
function addExpense() {
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;

    // Check if all fields are filled
    if (!amount || !description || !category) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new expense object
    const expense = {
      amount,
      description,
      category
    };

    // Add expense to the list
    const expenseList = document.getElementById('expenseList');
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <span>${description} - ${amount} - ${category}</span>
      <div>
        <button type="button" class="btn btn-warning btn-sm" onclick="editExpense(this)">Edit</button>
        <button type="button" class="btn btn-danger btn-sm ml-2" onclick="deleteExpense(this)">Delete</button>
      </div>
    `;

    // Append the new expense to the list
    expenseList.appendChild(li);

    // Clear the form fields
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
  }

  // Function to edit expense
  function editExpense(button) {
    const li = button.parentElement.parentElement;
    const span = li.querySelector('span');
    const [description, amount, category] = span.textContent.split(' - ');

    // Set form values to the selected expense
    document.getElementById('amount').value = amount.trim();
    document.getElementById('description').value = description.trim();
    document.getElementById('category').value = category.trim();

    // Remove the edited expense from the list
    li.remove();
  }

  // Function to delete expense
  function deleteExpense(button) {
    const li = button.parentElement.parentElement;
    li.remove();
  }