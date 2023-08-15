import  Express  from "express";

const server = Express()

server.get('/', (req, res) => {
  return res.send('OLA, DEV')
})


export{server}