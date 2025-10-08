# Álvaro 👨‍💻🎲🇧🇷 - Modelo de Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://alvarofonteles.github.io/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎯 Sobre o Projeto

Modelo de portfolio profissional moderno e responsivo, desenvolvido com **HTML5, CSS3 e JavaScript vanilla**. Perfeito para desenvolvedores que desejam apresentar sua jornada profissional de forma elegante e técnica.

**Live Demo**: [alvarofonteles.github.io](https://alvarofonteles.github.io)

## ✨ Características

### **🎨 Design & UX**
- ✅ **Interface Moderna** - Design limpo e profissional
- ✅ **Totalmente Responsivo** - Mobile-first approach
- ✅ **Performance Otimizada** - Carregamento rápido
- ✅ **Animações Suaves** - CSS transitions e effects
- ✅ **Scroll Fluido** - Navegação entre seções

### **⚙️ Funcionalidades Técnicas**
- ✅ **Estrutura Modular** - Código organizado em módulos separados
- ✅ **JavaScript Vanilla** - Zero dependências externas
- ✅ **CSS Variables** - Design system consistente
- ✅ **GitHub Pages Ready** - Deploy automatizado
- ✅ **SEO Optimized** - Meta tags e estrutura semântica
- ✅ **Dados Dinâmicos** - Conteúdo carregado via JavaScript

### **📊 Seções Incluídas**
- **👤 Header** - Apresentação com foto e tagline
- **🎯 Sobre** - Resumo profissional e jornada
- **🛠 Habilidades** - Stack técnica dividida em atual e em transição
- **📂 Projetos** - Gallery de projetos com múltiplos links
- **💼 Experiência** - Timeline profissional interativa
- **🎓 Formação** - Histórico acadêmico e especializações
- **📜 Certificações** - Cursos e certificações técnicas
- **📞 Contato** - Links para redes sociais

## 🛠 Stack de Desenvolvimento

### **🌐 Frontend & Core**
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### **🚀 Deploy & DevOps**
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=githubpages&logoColor=white)](https://pages.github.com/)
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)](https://git-scm.com/)

## 📁 Estrutura do Projeto

```
portfolio-template/
│
├── 📄 index.html              # Página principal
├── 📁 assets/
│   ├── 📁 css/
│   │   ├── style.css          # Estilos principais + variáveis CSS
│   │   └── responsive.css     # Media queries + mobile
│   ├── 📁 js/
│   │   ├── script.js          # Core application e inicialização
│   │   ├── skills.js          # Gerenciamento de habilidades
│   │   ├── certifications.js  # Gerenciamento de certificações
│   │   ├── experience.js      # Timeline profissional
│   │   ├── projects.js        # Gerenciamento de projetos
│   │   ├── education.js       # Gerenciamento de formação acadêmica
│   │   └── 📁 data/           # Dados estruturados
│   │       ├── skills-data.js
│   │       ├── certifications-data.js
│   │       ├── experience-data.js
│   │       ├── projects-data.js
│   │       └── education-data.js
│   └── 📁 images/
│       ├── profile.jpg        # Profile picture
│       └── 📁 projects/       # Project screenshots
│
├── 📄 README.md               # Project documentation
├── 📄 LICENSE                 # MIT License
└── 📄 .gitignore              # Git ignore rules
```

## 🚀 Como Usar

### **1. 📥 Fazer Download**
```bash
git clone https://github.com/alvarofonteles/alvarofonteles.github.io.git
cd alvarofonteles.github.io
```

### **2. 🎨 Personalizar**
- Edite `index.html` com suas informações pessoais
- Atualize os arquivos em `assets/js/data/` com seus dados:
  - `projects-data.js` - Seus projetos
  - `experience-data.js` - Sua experiência profissional
  - `education-data.js` - Sua formação acadêmica
  - `skills-data.js` - Suas habilidades técnicas
  - `certifications-data.js` - Suas certificações
- Substitua imagens em `assets/images/`

### **3. 🌐 Deploy (GitHub Pages)**
```bash
# Push para seu repositório
git remote set-url origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git add .
git commit -m "Personalizei meu portfolio"
git push origin main

# Ative GitHub Pages nas configurações do repositório
```

### **4. 💻 Desenvolvimento Local**
```bash
# Servidor local simples
python -m http.server 8000

# Ou com serve
npx serve ./

# Acesse: http://localhost:8000
```

## 🎯 Personalização

### **📝 Conteúdo Editável**
- **Dados Pessoais**: Nome, título, bio, contato
- **Projetos**: Título, descrição, tecnologias, links, status
- **Experiência**: Empresas, cargos, períodos, conquistas, tecnologias
- **Formação**: Cursos, instituições, períodos, status
- **Habilidades**: Categorias, tecnologias (atual e em transição)
- **Certificações**: Cursos, instituições, links, tecnologias

### **🎨 Customização Visual**
- **Cores**: Edite variáveis CSS em `assets/css/style.css`
- **Fontes**: Modifique `@import` do Google Fonts
- **Layout**: Ajuste grids e containers no CSS

## 🔧 Estrutura de Dados

O projeto utiliza uma arquitetura modular onde:
- **Dados** são separados em arquivos `.js` na pasta `data/`
- **Lógica** é implementada em arquivos `.js` na pasta `js/`
- **Cada seção** é independente e auto-contida

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

**Desenvolvido por [Álvaro 👨‍💻🎲🇧🇷](https://github.com/alvarofonteles)**

*"Um template moderno para desenvolvedores modernos"* 🚀