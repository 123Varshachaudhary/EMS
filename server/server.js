import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'
import mongoose from 'mongoose'

connectToDatabase()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)

// Example schema & model
const testSchema = new mongoose.Schema({ name: String })
const Test = mongoose.model('Test', testSchema)

// Test DB route
app.get('/api/test-db', async (req, res) => {
  try {
    await Test.create({ name: 'Database Working!' })
    const docs = await Test.find()
    res.json(docs)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
})
