import express from 'express'

const app = express()

console.log('process.env.STAGE:', process.env.STAGE)

app.get('/test1', async (req, res, next) => {
  try {
    throw new Error('An error occurred in the async middleware.');
  } catch (error) {
    console.log('error:', error)
    throw error;
  }
})

app.get('/test2', async (req, res, next) => {
  console.log('test2')
  res.status(200).json('test2')
})

app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: err.message });
})

app.listen(8080)
