import { generateId } from "../Utils/generateId.js";






export class Source {
  constructor(data) {
    console.log('source model');
    this.income = data.income
    this.amount = data.amount
    this.budgetName = data.budgetName
    this.id = data.id || generateId()
  }

  get SourceTemplate() {
    return /*html*/`
    <div class="col-md-3 col-sm-4 p-4 border bg-secondary">
      <div class="d-flex justify-content-between">
        <h3>${this.income}</h3>
        <h3 class="text-success">$${this.amount}</h3>
      </div>
      <div class="d-flex justify-content-between">
        <h5>Budget Targeted: ${this.budgetName}</h5>
        <button class="btn btn-danger" onclick="app.sourcesController.removeSource('${this.id}')"><i class="mdi mdi-delete" title="Delete Source"></i></button>
      </div>
    </div>   
    
    `
  }




}