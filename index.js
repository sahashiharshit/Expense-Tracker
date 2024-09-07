function addExpense(event) {
  event.preventDefault();
  const expenseAmount = event.target.expenseAmount.value;
  const expenseDesc = event.target.description.value;
  const expenseCategory = event.target.category.value;
  let newExpense = {
    expense: expenseAmount,
    expenseDesc: expenseDesc,
    expenseCategory: expenseCategory,
  };
  localStorage.setItem(expenseDesc, JSON.stringify(newExpense));
  const expenseList = document.querySelector("#expenseList");
  let getexpense = JSON.parse(localStorage.getItem(expenseDesc));
  console.log(getexpense);
  const listItem = document.createElement("li");
  const p = document.createElement("p");
  p.style.fontSize="24px";
  p.textContent = `Expense Name: ${getexpense.expenseDesc}, Expense Amount: ₹ ${getexpense.expense}, Category: ${getexpense.expenseCategory}`;
  listItem.appendChild(p);
  listItem.className = "list-group-item";
  const editButton = document.createElement("button");
  editButton.textContent = "Edit Expense";
  editButton.className = "btn btn-outline-secondary m-2";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete Expense";
  deleteButton.className = "btn btn-outline-danger m-2";
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  expenseList.appendChild(listItem);
  document.getElementById("expenseAmount").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
}
function updateExpenseList() {
  const expenseList = document.querySelector("#expenseList");
  let expenses = [];
  for (let i = 0; i < localStorage.length; i++) {
    expenses.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
  expenses.forEach((expense) => {
    const listItem = document.createElement("li");
    const p = document.createElement("p");
    p.style.fontSize="24px";
    p.textContent = `Expense Name: ${expense.expenseDesc}, Expense Amount: ₹ ${expense.expense}, Category: ${expense.expenseCategory}`;
    listItem.appendChild(p);
    listItem.className = "list-group-item";
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Expense";
    editButton.className = "btn btn-outline-secondary m-2";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete Expense";
    deleteButton.className = "btn btn-outline-danger m-2";
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    expenseList.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const expensesList = document.querySelector("#expenseList");
  if (expensesList) {
    expensesList.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-outline-danger")) {
        const expenseTodelete = event.target.parentElement;
        const expenseDesc = expenseTodelete.textContent
          .match(/Expense Name:\s*([^,]*)/)[1]
          .trim();
        expensesList.removeChild(expenseTodelete);
        //  console.log(expenseDesc);
        localStorage.removeItem(expenseDesc);
      }
    });
  }

  if (expensesList) {
    expensesList.addEventListener("click", (event) => {
      if (event.target.classList.contains("btn-outline-secondary")) {
        const expenseToEdit = event.target.parentElement;
        const expenseDesc = expenseToEdit.textContent
          .match(/Expense Name:\s*([^,]*)/)[1]
          .trim();
        const expenseDetails = JSON.parse(localStorage.getItem(expenseDesc));
        document.getElementById("expenseAmount").value = expenseDetails.expense;
        document.getElementById("description").value =
          expenseDetails.expenseDesc;
        document.getElementById("category").value =
          expenseDetails.expenseCategory;
        expensesList.removeChild(expenseToEdit);
        localStorage.removeItem(expenseDesc);
      }
    });
  }
});
window.onload = updateExpenseList;
