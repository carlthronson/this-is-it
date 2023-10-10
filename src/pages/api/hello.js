import { promises as fs } from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let job = JSON.parse(req.body);
    console.log("******* HELLO ************");
    fs.appendFile('test.txt', JSON.stringify(job) + '\n', err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    });
    res.status(200).json({ message: job.title })
  } else {
    // Use fs.readFile() method to read the file 
    console.log('********** here');
    const fileContents = await fs.readFile('./test.txt', 'utf8');
    res.status(200).json({ message: JSON.stringify(fileContents) });
    // res.status(200).json({ message: 'Hello from Next.js!' })
  }
}
