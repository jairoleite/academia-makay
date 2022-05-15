export default function cursoController(app, prisma) {

  // lista todos as aulas de um determinado curso
  app.get('/aula/:cursoId', async (req, res) => {
    const { cursoId } = req.params
    res.json(await prisma.aula.findMany({
      where: { cursoId: parseInt(cursoId) }
    }))
  })

  app.post(`/aula`, async (req, res) => {
    const result = await prisma.aula.create({
      data: {
        ...req.body
      },
    })
    res.json(result)
  })

  app.put('/aula/:id', async (req, res) => {
    const {id} = req.params
    const aula = await prisma.aula.update({
      where: {
        id: parseInt(id),
      },
      data: {...req.body},
    })
    res.json(aula)
  })

  app.delete(`/aula/:id`, async (req, res) => {
    const {id} = req.params
    const aula = await prisma.aula.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json(aula)
  })

}

