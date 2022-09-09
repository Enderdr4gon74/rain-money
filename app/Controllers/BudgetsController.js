import { appState } from "../AppState.js";
import { budgetsService } from "../Services/BudgetsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawBudgets() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.BudgetTemplate)
  setHTML('budgets', template)
}

export class BudgetsController {
  constructor() {
    _drawBudgets()
    console.log('budgets controller is working');
    appState.on('budgets', _drawBudgets)
  }
  createBudget() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      budgetsService.createBudget(formData)
      // @ts-ignore
      form.reset()


    } catch (error) {
      console.error('[CREATE_BUDGET]', error);
    }
  }

  removeBudget(id) {
    try {
      budgetsService.removeBudget(id)
      _drawBudgets()
    } catch (error) {
      console.error('[REMOVE_SOURCE]', error);
    }
  }
}