// ===== DADOS DE EXPERIÊNCIA =====
const EXPERIENCES_DATA = [
    {
        id: 1,
        title: "Desenvolvedor | APEX | PL/SQL",
        company: "Viptech Smart Solutions @Copel", 
        period: "Mar 2025 - Ago 2025",
        location: "Curitiba, PR • Remoto",
        description: "Atuação como Analista de Sistemas nas Squads de Correção, Sustentação e Melhorias, com foco nos sistemas GPO, TCE, PLD.",
        achievements: [
            "Garantir estabilidade e eficiência dos sistemas corporativos",
            "Implementar melhorias contínuas para otimização de processos",
            "Suporte técnico e resolução de problemas em sistemas críticos"
        ],
        technologies: ["Oracle APEX", "PL/SQL", "Sustentação", "Otimização"],
        featured: true
    },
    {
        id: 2,
        title: "Desenvolvedor | APEX | PL/SQL",
        company: "Memora Processos Inovadores @ANAC | @ANTAQ",
        period: "Ago 2024 - Fev 2025", 
        location: "Distrito Federal, DF • Remoto",
        description: "Desenvolvimento de aplicações web em Oracle Apex para órgãos públicos, com foco em relatórios gerenciais e integração com bancos Oracle PL/SQL.",
        achievements: [
            "Desenvolvimento de aplicações web para órgãos públicos federais",
            "Criação de relatórios gerenciais e dashboards",
            "Integração com bancos de dados Oracle PL/SQL",
            "Suporte e manutenção de sistemas críticos"
        ],
        technologies: ["Oracle APEX", "PL/SQL", "Oracle Database", "Relatórios", "Sistemas Governamentais"],
        featured: true
    },
    {
        id: 3,
        title: "Desenvolvedor | PL/SQL | APEX",
        company: "Pasquali Solution @NSI", 
        period: "Mai 2023 - Abr 2024",
        location: "São Paulo, SP • Remoto", 
        description: "Análise e desenvolvimento no sistema eComex e SAP, utilizando PL/SQL, Oracle Apex, Forms, Reports e ABAP, otimizando processos de comércio exterior.",
        achievements: [
            "Análise e desenvolvimento no sistema eComex para comércio exterior",
            "Integração com SAP utilizando ABAP e PL/SQL",
            "Otimização de processos de comércio exterior",
            "Desenvolvimento em Oracle Forms e Reports"
        ],
        technologies: ["PL/SQL", "Oracle APEX", "Oracle Forms", "Oracle Reports", "ABAP", "SAP", "Comércio Exterior"],
        featured: true
    },
    {
        id: 4, 
        title: "Analista de Software | PL/SQL | Java",
        company: "Radek Systems @Siemens",
        period: "Jun 2022 - Dez 2022",
        location: "Curitiba, PR • Remoto",
        description: "Sustentação e evolução do sistema Spectrum Power 7 (OMS e SCADA), com desenvolvimento de packages, procedures, triggers e consultas em PL/SQL.",
        achievements: [
            "Sustentação do sistema Spectrum Power 7 (OMS e SCADA)",
            "Desenvolvimento de packages, procedures e triggers em PL/SQL",
            "Otimização de consultas e performance do banco",
            "Integração com sistemas de energia e utilities"
        ],
        technologies: ["PL/SQL", "Java", "Oracle Database", "XML", "C", "C++", "Sistemas de Energia"],
        featured: true
    },
    {
        id: 5,
        title: "Analista de Software | PL/SQL | Java Spring", 
        company: "Profectum @Unifor",
        period: "Out 2021 - Mai 2022",
        location: "Fortaleza, CE  • Híbrido",
        description: "Desenvolvimento e manutenção de sistemas de ensino (EAD e FIES), utilizando PL/SQL, Java Spring Boot e API Rest, com foco em automação de faturamento.",
        achievements: [
            "Desenvolvimento de sistemas de ensino (EAD e FIES)",
            "Automação de processos de faturamento e cobrança", 
            "Integração com APIs REST e microserviços",
            "Manutenção e evolução de sistemas educacionais"
        ],
        technologies: ["PL/SQL", "Java Spring Boot", "API REST", "Oracle Database", "Sistemas Educacionais"],
        featured: true
    },
    {
        id: 6,
        title: "Analista de Sistema | PL/SQL | APEX | Forms",
        company: "Hapvida NotreDame Intermédica",
        period: "Mai 2019 - Out 2021", 
        location: "Fortaleza, CE • Presencial",
        description: "Criação e manutenção de sistemas hospitalares e financeiros em PL/SQL, Forms e Apex, automatizando processos de atendimento e faturamento.",
        achievements: [
            "Desenvolvimento de sistemas hospitalares e financeiros",
            "Automação de processos de atendimento médico e faturamento",
            "Criação e manutenção de aplicações em Oracle Forms e APEX",
            "Otimização de performance em bancos Oracle"
        ],
        technologies: ["PL/SQL", "Oracle APEX", "Oracle Forms", "Oracle Database", "Sistemas Hospitalares"],
        featured: true
    },
    {
        id: 7,
        title: "Analista Desenvolvedor | Delphi | PL/SQL",
        company: "AS SISTEMAS - Consultoria e Inovação",
        period: "Mai 2018 - Mai 2019",
        location: "Fortaleza, CE • Presencial", 
        description: "Desenvolvimento de funcionalidades para sistemas de arrecadação de impostos municipais.",
        achievements: [
            "Desenvolvimento de sistemas de arrecadação municipal",
            "Implementação de funcionalidades fiscais e tributárias",
            "Integração entre Delphi e bancos Oracle",
            "Manutenção e evolução de sistemas legados"
        ],
        technologies: ["Delphi", "PL/SQL", "Oracle Database", "Sistemas Fiscais"],
        featured: true
    },
    {
        id: 8,
        title: "Analista de Software | Delphi | PL/SQL", 
        company: "Via Lógica - Softwares de Gestão",
        period: "Jul 2017 - Abr 2018",
        location: "Fortaleza, CE • Presencial",
        description: "Desenvolvimento de sistemas farmacêuticos (Ally Sistemas) e manutenção de bancos de dados Oracle.",
        achievements: [
            "Desenvolvimento de sistemas farmacêuticos (Ally Sistemas)",
            "Manutenção e otimização de bancos de dados Oracle",
            "Implementação de funcionalidades para gestão farmacêutica",
            "Suporte técnico e correção de bugs"
        ],
        technologies: ["Delphi", "PL/SQL", "Oracle Database", "Sistemas Farmacêuticos"],
        featured: true
    },
    {
        id: 9,
        title: "Desenvolvedor | Delphi | PL/SQL",
        company: "Grupo Carmehil", 
        period: "Abr 2017 - Jul 2017",
        location: "Fortaleza, CE • Presencial",
        description: "Desenvolvimento e manutenção de aplicações e bancos de dados Oracle para sistema de gestão interno.",
        achievements: [
            "Desenvolvimento de aplicações corporativas internas",
            "Manutenção de bancos de dados Oracle",
            "Implementação de relatórios e funcionalidades",
            "Suporte aos usuários e treinamentos"
        ],
        technologies: ["Delphi", "PL/SQL", "Oracle Database", "Sistemas Corporativos"],
        featured: true
    },
    {
        id: 10,
        title: "Desenvolvedor | Delphi | PL/SQL",
        company: "Health Solution",
        period: "Out 2011 - Mar 2013", 
        location: "Fortaleza, CE • Presencial",
        description: "Desenvolvimento de sistemas para o SUS em Delphi e Oracle PL/SQL.",
        achievements: [
            "Desenvolvimento de sistemas para o SUS (Sistema Único de Saúde)",
            "Implementação de funcionalidades para gestão hospitalar",
            "Integração com bancos de dados Oracle",
            "Suporte técnico e manutenção corretiva"
        ],
        technologies: ["Delphi", "PL/SQL", "Oracle Database", "Sistemas de Saúde", "SUS"],
        featured: true
    }
];