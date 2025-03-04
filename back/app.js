import { Express } from "express";
import {cors} from "cors;"


const port = 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('./public'))

app.use("/files", filesRouter)

app.listen(port,() =>
{
    console.log('example app listening on port ${port}')
})

