# Álvaro 👨‍💻🎲🇧🇷
## Modelo de Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎯 Sobre o Projeto

Modelo de portfolio profissional moderno e responsivo, desenvolvido com **HTML5, CSS3 e JavaScript vanilla**. Perfeito para desenvolvedores que desejam apresentar sua jornada profissional de forma elegante e técnica.

  [![Portfolio](https://img.shields.io/badge/GitHub%20Pages-alvarofonteles.github.io-000000?logo=githubpages)](https://alvarofonteles.github.io/)  

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

### **🚀 Página Data Engineering (Opcional)**
- **📊 Projetos DE** - Página dedicada com roadmap completo de Data Engineering
- **🎯 Roadmap 9 Fases** - Estrutura organizada de aprendizado
- **🛠 Stack Moderna** - Python, PySpark, Delta Lake, AWS, Airflow, dbt, Databricks
- **💻 Implementações** - Projetos hands-on e casos práticos

*Para ativar: Configure `featured: true` em `projects-de-data.js` e acesse `/projects/index.html`*

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
├── 📄 index.html              # Página principal (implementação exemplo)
├── 📁 template/               # Base do template reutilizável
│   └── 📁 assets/
│       ├── 📁 css/
│       │   ├── style.css           # Estilos principais + variáveis CSS
│       │   └── responsive.css      # Media queries + mobile
│       ├── 📁 js/
│       │   ├── core.js             # Módulo core compartilhado
│       │   ├── script.js           # Core application e inicialização
│       │   └── 📁 modules/         # Módulos organizados
│       │       ├── skills.js           # Gerenciamento de habilidades
│       │       ├── certifications.js   # Gerenciamento de certificações
│       │       ├── experiences.js      # Timeline profissional
│       │       ├── projects.js         # Gerenciamento de projetos
│       │       ├── educations.js       # Gerenciamento de formação acadêmica
│       │       ├── contacts.js         # Gerenciamento dos contatos
│       │       └── 📁 data/            # Dados estruturados
│       │           ├── skills-data.js          # Dados das habilidades
│       │           ├── certifications-data.js  # Dados das certificações  
│       │           ├── experiences-data.js     # Dados da experiência
│       │           ├── projects-data.js        # Dados dos projetos
│       │           ├── educations-data.js      # Dados da formação
│       │           └── contacts-data.js        # Dados dos contatos
│       └── 📁 images/
│           ├── profile.jpg         # Profile picture
│           └── 📁 projects/        # Project screenshots
│               └── 📁 badges/      # Badges dos projetos e contatos
│                   ├── aws-badge.svg
│                   ├── cv-badge.svg
│                   ├── delta-lake-badge.svg
│                   ├── email-badge.svg
│                   ├── github-badge.svg
│                   ├── linkedin-badge.svg
│                   ├── portfolio-badge.svg
│                   ├── pyspark-advanced-badge.svg
│                   └── python-badge.svg
├── 📁 projects/               # Página dedicada Data Engineering
│   │   index.html             # Página completa de projetos DE
│   └── 📁 assets/
│       ├── 📁 images/
│       │   └── 📁 badges/     # Badges específicos Data Engineering
│       │           ├── airflow-badge.svg
│       │           ├── aws-badge.svg
│       │           ├── databricks-badge.svg
│       │           ├── dbt-badge.svg
│       │           ├── delta-lake-badge.svg
│       │           ├── lakehouse-badge.svg
│       │           ├── methodology-badge.svg
│       │           ├── pandas-badge.svg
│       │           ├── pyspark-advanced-badge.svg
│       │           ├── pyspark-badge.svg
│       │           └── python-badge.svg
│       └── 📁 js/
│           ├── script.js      # Inicialização específica DE
│           └── 📁 modules/    # Módulos específicos Data Engineering
│               ├── skills-de.js            # Gerenciamento de habilidades DE
│               ├── certifications-de.js    # Gerenciamento de projetos DE
│               ├── projects-de.js          # Gerenciamento de projetos DE
│               └── 📁 data/          # Dados específicos DE
│                   ├── skills-de-data.js           # Dados dos projetos DE
│                   ├── certifications-de-data.js   # Dados dos projetos DE
│                   └── projects-de-data.js         # Dados das habilidades DE
├── 📄 README.md               # Project documentation
├── 📄 LICENSE                 # MIT License
├── 📄 SECURITY.md             # Security policy
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
- Atualize os arquivos em `template/assets/js/modules/data/` com seus dados:
  - `projects-data.js` - Seus projetos
  - `experiences-data.js` - Sua experiência profissional  
  - `educations-data.js` - Sua formação acadêmica
  - `skills-data.js` - Suas habilidades técnicas
  - `certifications-data.js` - Suas certificações
  - `contact-data.js` - Seus contatos
- Atualize os módulos em `template/assets/js/modules/` para refletir seus dados:
  - `projects.js` - Lógica dos projetos
  - `experiences.js` - Lógica da experiência
  - `educations.js` - Lógica da formação
  - `skills.js` - Lógica das habilidades
  - `certifications.js` - Lógica das certificações
  - `contact-data.js` - Lógica dos contatos
- Substitua imagens em `template/assets/images/`:
  - `profile.jpg` - Sua foto de perfil
  - `projects/badges/` - Badges dos seus projetos
- Ajuste cores e temas no `template/assets/css/style.css`
- Atualize metatags e SEO no `<head>` do `index.html`
- Configure suas redes sociais nos links de contato

### **🎯 Personalização Avançada (Data Engineering)**
- Para criar página DE personalizada, edite `/projects/index.html`
- Atualize dados em `/projects/assets/js/modules/data/`:
  - `skills-de-data.js` - Suas habilidades em DE
  - `certifications-de-data.js` - Suas certificações em DE
  - `projects-de-data.js` - Seus projetos de Data Engineering  
- Modifique módulos em `/projects/assets/js/modules/`:  
  - `skills-de.js` - Lógica das habilidades DE
  - `certifications-de.js` - Lógica das certificações DE
  - `projects-de.js` - Lógica dos projetos DE
- Adicione badges personalizados em `/projects/assets/images/badges/`

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

## 📄 Licença

Este projeto está sob a licença MIT.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.  

[![GitHub](https://img.shields.io/badge/GitHub-%40alvarofonteles-000000?logo=github)](https://github.com/alvarofonteles/) [![LinkedIn](https://img.shields.io/badge/LinkedIn-in/alvarofonteles-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/alvarofonteles) 

*"Um template moderno para desenvolvedores modernos"* 🚀