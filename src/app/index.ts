import express from 'express'
import { database } from '../database'

database.connect()

const app = express()

export default app
