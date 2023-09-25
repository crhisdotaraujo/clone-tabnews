function status(request, response) {
  response.status(200).json({ chave: "olá, dev! Seja bem vindo à nossa API" });
}

export default status;
