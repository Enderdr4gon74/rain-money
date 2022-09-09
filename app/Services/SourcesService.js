import { appState } from "../AppState.js"
import { Source } from "../Models/Source.js"
import { saveState } from "../Utils/Store.js"




class SourceService {

  createSource(formData) {
    let source = new Source(formData)
    appState.sources = [source, ...appState.sources]
    saveState('sources', appState.sources)
  }

  removeSource(id) {
    let sources = appState.sources
    let sourceId = sources.findIndex(source => id == source.id)
    console.log("removing source: " + sourceId)
    appState.sources.splice(sourceId, 1)
    saveState('sources', appState.sources)
  }
}

export const sourceService = new SourceService