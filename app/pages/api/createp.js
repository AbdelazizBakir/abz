import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();

export default async (req, res) => {

    const data = JSON.parse(req.body)
    const contact = await prisma.messagep.create({
        data
    })
    try {
        console.log('Message envoyé')
      } catch (err) {
        console.log(err)
      }
      res.status(200).json(req.body);
      res.json(contact)
      }
  //res.json(contact)
  //res.status(200).json(req.body);
