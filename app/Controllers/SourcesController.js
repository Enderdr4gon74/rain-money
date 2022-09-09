import { appState } from "../AppState.js"
import { sourceService } from "../Services/SourcesService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawSources() {
  let template = ''
  appState.sources.forEach(source => template += source.SourceTemplate)
  setHTML('sources', template)
}

function _drawBudgets() {
  let template = ''
  appState.budgets.forEach(budget => template += budget.BudgetTemplate)
  setHTML('budgets', template)
}

function _checkIfPurchased() {
  let budgets = appState.budgets
  let sources = appState.sources
  for (let i = 0; i < budgets.length; i++) {
    let totalAmount = 0
    for (let j = 0; j < sources.length; j++) {
      if (budgets[i].name == sources[j].budgetName) {
        totalAmount += Number(sources[j].amount)
      }
      console.log(budgets[i].name + " = " + sources[j].budgetName + "?\n" + totalAmount)
    }
    console.log(totalAmount + " >= " + budgets[i].price + "?")
    if (totalAmount >= budgets[i].price) {
      budgets[i].purchased = true
      console.log("yes on: " + budgets[i].name)
    } else {
      budgets[i].purchased = false
      console.log("no on: " + budgets[i].name)
    }
  }
  appState.budgets = budgets
  _drawBudgets()
}


export class SourcesController {

  constructor() {
    _drawSources()
    appState.on('sources', _drawSources)
    _checkIfPurchased()
    // console.log('hello from sources controller');
  }

  createSources() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      sourceService.createSource(formData)
      // @ts-ignore
      form.reset()
      _checkIfPurchased()
    } catch (error) {
      console.error('[CREATE_SOURCE]', error);
    }
  }

  removeSource(id) {
    try {
      sourceService.removeSource(id)
      _drawSources()
      _checkIfPurchased()
    } catch (error) {
      console.error('[REMOVE_SOURCE]', error);
    }
  }
}