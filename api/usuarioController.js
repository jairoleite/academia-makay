
import * as argon2 from "argon2";
import * as crypto from "crypto";

const hashingConfig = { // based on OWASP cheat sheet recommendations (as of March, 2022)
  parallelism: 1,
  memoryCost: 64000, // 64 mb
  timeCost: 3 // number of itetations
}

export default function usuarioController(app, prisma) {

  // verifica se o usuário existe
  app.post('/usuario/isValido', async (req, res) => {
    const {email, senha } = req.body
    const usuario = await prisma.usuario.findFirst({
      where: { email: email }
    })
    res.json({valido: await verifyPasswordWithHash(senha, usuario ? usuario.senha : null)})
  })

  // salva usuário
  app.post(`/usuario`, async (req, res) => {
    const {nome, email, senha} = req.body
    const result = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: await hashPassword(senha)
      },
    })
    res.json(result)
  })

  async function hashPassword(senha) {
    let salt = crypto.randomBytes(16);
    return await argon2.hash(senha, {
      ...hashingConfig,
      salt,
    })
  }

  async function verifyPasswordWithHash(senha, hash) {
    return await argon2.verify(hash, senha, hashingConfig);
  }
}

