import { dev } from '$app/environment'

export default dev || process.env.IS_STAGING === 'true'
