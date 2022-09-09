import { appState } from "../AppState.js";
import { Budget } from "../Models/Budget.js";
import { saveState } from "../Utils/Store.js";




class BudgetsService {

  createBudget(formData) {
    let budget = new Budget(formData)
    appState.budgets = [budget, ...appState.budgets]
    console.log(appState.budgets);
    saveState('budgets', appState.budgets)

  }
  
  removeBudget(id) {
    let budgets = appState.budgets
    let budgetId = budgets.findIndex(budget => id == budget.id)
    console.log("removing budget: " + budgetId)
    appState.budgets.splice(budgetId, 1)
    saveState('budgets', appState.budgets)
  }
}

export const budgetsService = new BudgetsService()