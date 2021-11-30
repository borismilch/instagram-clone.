import { IAlerts } from "../types";

export const alerts: IAlerts = {
  user_singed_in: { type: 'success', message: 'you successfully singed id' },
  user_singed_out: { type: 'success', message: 'you leaved your account' },
  user_registered: { type: 'success', message: 'you registered' },
  'auth/wrong-password': { type: 'error', message: 'your password is invalid' },
  'auth/user-not-found': { type: 'error', message: 'user not found' },
  'auth/email-already-in-use':  { type: 'error', message: 'email is already in use' },
  'auth/weak-password': { type: 'info', message: 'your password is to weak' },
}