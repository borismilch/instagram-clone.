import { IAlert } from '../../../types'

import { AUTH_LOADED, SHOW_ALERT } from '../variables'

import { alerts } from '../../../utils/alerts'

export const callAlert = (code: string) => {
  console.log(code)
  const alert: IAlert = alerts[code]
  return ({type: SHOW_ALERT, payload: alert})
  
}

export const authLoaded = () => ({ type:AUTH_LOADED })