# Front - Gerência de Sócios CTG

Aplicação front-end desenvolvida para apoio à gestão de sócios de um Centro de Tradições Gaúchas (CTG), permitindo o controle, visualização e organização das informações dos associados.

## 📌 Sobre o Projeto

Este sistema faz parte de uma iniciativa de extensão do IFSul - Câmpus Charqueadas, com o objetivo de desenvolver uma solução tecnológica para auxiliar entidades tradicionalistas na administração de seus sócios.

A aplicação permite:

- Cadastro de sócios
- Consulta e listagem de associados
- Atualização de dados cadastrais
- Exclusão de registros
- Interface amigável para usuários administrativos

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- [Framework utilizado, se houver – ex: React, Vue, etc.]
- [Bibliotecas adicionais, se aplicável]

## 📂 Estrutura do Projeto

```bash
front-gerencia-socios-ctg/
├── public/           # Arquivos públicos
├── src/              # Código-fonte da aplicação
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Páginas da aplicação
│   ├── services/     # Comunicação com API
│   └── assets/       # Imagens, estilos, etc.
├── package.json      # Dependências e scripts
└── README.md         # Documentação do projeto
```

## ⚙️ Instalação e Execução

### Pré-requisitos

- Node.js (versão recomendada: >= 16)
- Gerenciador de pacotes (npm ou yarn)

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/IFSul-Charqueadas-Extensao/front-gerencia-socios-ctg.git
```

2. Acesse a pasta do projeto:
```bash
cd front-gerencia-socios-ctg
```

3. Instale as dependências:
```bash
npm install
```

4. Execute a aplicação:
```bash
npm start
```

5. Acesse no navegador:
http://localhost:3000

## 🔌 Integração com Backend

Este projeto depende de uma API para persistência dos dados. Certifique-se de:

- Configurar a URL da API no arquivo de ambiente (ex: `.env`)
- Garantir que o backend esteja em execução

Exemplo:
```env
REACT_APP_API_URL=http://localhost:8080
```

## 🧪 Testes

Caso implementado:

```bash
npm test
```

## 🤝 Contribuição

Contribuições são bem-vindas!

Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch:
```bash
git checkout -b minha-feature
```
3. Commit suas alterações:
```bash
git commit -m "Minha nova feature"
```
4. Envie para o repositório:
```bash
git push origin minha-feature
```
5. Abra um Pull Request

## 📄 Licença

Este projeto é de caráter acadêmico e pode ser utilizado para fins educacionais.

## 👨‍🏫 Projeto de Extensão

Desenvolvido no âmbito do Instituto Federal Sul-rio-grandense (IFSul), com foco na formação prática dos estudantes e atendimento à comunidade.
