
export default function cursoController(app, prisma) {

  // lista todos os cursos
  app.get('/curso', async (req, res) => {
    res.json(await prisma.curso.findMany())
  })

  app.post(`/curso`, async (req, res) => {
    const result = await prisma.curso.create({
      data: {
        ...req.body
      },
    })
    res.json(result)
  })

  app.delete(`/curso/:id`, async (req, res) => {
    const { id } = req.params
    const post = await prisma.curso.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json(post)
  })

}

