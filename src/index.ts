import express,{Request,Response} from 'express'


const app = express()

app.get('/',  (req: Request, res: Response) => {
  res.send('Hello it-incubator')
})

app.listen(3001, () => {
  console.log('Hello it-incubator')
})