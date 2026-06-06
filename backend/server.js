// Starting server
import app from './src/app.js'
import connectDB from './src/db/db.js'

(async () => {
    try {
        await connectDB()
        app.listen(5000, () => {
            console.log('running on http://localhost:5000')
        })
    } catch (err) {
        console.error('Server not started due to DB connection failure.')
        process.exit(1)
    }
})()