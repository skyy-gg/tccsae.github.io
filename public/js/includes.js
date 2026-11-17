document.querySelectorAll('[data-include]').forEach(async (el) => {
  try {
    const resposta = await fetch(el.dataset.include);
    if (!resposta.ok) throw new Error(resposta.status);
    el.outerHTML = await resposta.text();
  } catch (erro) {
    console.error('Erro ao carregar', el.dataset.include, erro);
  }
});
