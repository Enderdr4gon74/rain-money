import { generateId } from "../Utils/generateId.js"




export class Budget {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.purchased = data.purchased || false
    this.id = data.id || generateId()
  }
  get BudgetTemplate() {
    return /*html*/`
    <div class="col-md-3 col-sm-4 mt-3 p-2 border bg-secondary">
      <div class="d-flex justify-content-between">
        <h3>${this.name}</h3>
        <h3 class="text-success">$${this.price}</h3>
      </div>
      <div class="d-flex justify-content-between">
        <p>Purchased: ${this.purchased ? '<i class="mdi mdi-check text-success"></i>' : ''}</p>
        <button class="btn btn-danger" onclick="app.budgetsController.removeBudget('${this.id}')"><i class="mdi mdi-delete" title="Delete Budget"></i></button>
      </div>
    </div>
  `
  }




}