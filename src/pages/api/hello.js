import { promises as fs } from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    let job = JSON.parse(req.body);
    console.log("******* HELLO ************");
    fs.appendFile('test.txt', JSON.stringify(job) + '\n', err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
    fs.readFile('test.txt', (err, data) => { console.log(data) })
    res.status(200).json({ message: job.title })
  } else {
    res.status(200).json({ message: 'Hello from Next.js!' })
  }
}
