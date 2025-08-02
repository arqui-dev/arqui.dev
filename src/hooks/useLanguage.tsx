import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
}

export const useLanguage = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'pt',
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);

export const translations = {
  pt: {
    // Header
    services: 'Serviços',
    about: 'Sobre',
    contact: 'Contato',
    talkToUs: 'Fale Conosco',
    
    // Hero
    heroDescription: 'Especializados em produtos digitais com IA e serviços gerenciados de DevOps. Trabalhamos em duas frentes: criação completa de produtos inovadores e infraestrutura robusta para acelerar suas entregas.',
    createDigitalProduct: 'Criar Produto Digital',
    devopsAsService: 'DevOps como Serviço',
    
    // Services
    servicesTitle: 'Nossas Duas Frentes de Atuação',
    servicesDescription: 'Oferecemos soluções completas para criação de produtos digitais inovadores e serviços gerenciados de DevOps',
    
    digitalProductsTitle: 'Produtos Digitais com IA',
    digitalProductsDescription: 'Da ideação ao lançamento de produtos digitais inovadores, especialmente no mercado de Inteligência Artificial. Acompanhamos todo o ciclo de vida do produto.',
    
    strategyDiscovery: 'Strategy & Discovery',
    productManagement: 'Gestão de Produtos',
    designSprint: 'Design Sprint',
    discoveryValidation: 'Discovery & Validação',
    businessOpportunities: 'Oportunidades de Negócio',
    
    developmentLaunch: 'Development & Launch',
    pocMvp: 'POC & MVP',
    technicalArchitecture: 'Arquitetura Técnica',
    projectManagement: 'Gestão de Projetos',
    goToMarket: 'Go-to-Market',
    
    devopsTitle: 'DevOps como Serviço',
    devopsDescription: 'Serviço gerenciado completo para cuidar e criar soluções de infraestrutura em nuvem, permitindo que você foque no seu core business.',
    
    infrastructureCloud: 'Infraestrutura & Cloud',
    cloudInfrastructure: 'Infraestrutura em Nuvem',
    cicdPipelines: 'CI/CD Pipelines',
    kubernetesContainers: 'Kubernetes & Containers',
    infrastructureAsCode: 'Infrastructure as Code',
    
    operationsSre: 'Operations & SRE',
    releaseManagement: 'Gestão de Lançamentos',
    srePractices: 'Práticas de SRE',
    monitoring247: 'Monitoramento 24/7',
    securityCompliance: 'Security & Compliance',
    
    // About
    aboutTitle: 'Nossa Abordagem Completa',
    aboutDescription: 'Trabalhamos em duas frentes estratégicas: criamos produtos digitais inovadores do zero e oferecemos DevOps gerenciado para otimizar suas operações. Nossa experiência no mercado de IA nos permite entregar soluções verdadeiramente disruptivas.',
    
    digitalProductsAI: 'Produtos Digitais com IA',
    digitalProductsAIDesc: 'Da ideação ao go-to-market, especializados em produtos que utilizam Inteligência Artificial',
    
    managedDevops: 'DevOps Gerenciado',
    managedDevopsDesc: 'Infraestrutura robusta e práticas de SRE para garantir alta disponibilidade e performance',
    
    completeCycle: 'Ciclo Completo',
    completeCycleDesc: 'Desde discovery e validação até arquitetura técnica e operação contínua',
    
    projectsDelivered: 'Projetos Entregues',
    uptimeGuaranteed: 'Uptime Garantido',
    support: 'Suporte',
    yearsExperience: 'Anos de Experiência',
    
    // CTA
    ctaTitle: 'Pronto para transformar sua infraestrutura?',
    ctaDescription: 'Vamos conversar sobre como podemos acelerar seus projetos e otimizar sua operação',
    scheduleFreeConsultation: 'Agendar Consulta Gratuita',
    
    // Footer
    footerDescription: 'Consultoria especializada em DevOps e Arquitetura de Produtos Digitais',
    digitalProducts: 'Produtos Digitais',
    managedDevopsFooter: 'DevOps Gerenciado',
    copyright: '© 2024 arqui.dev. Todos os direitos reservados.',
  },
  en: {
    // Header
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    talkToUs: 'Contact Us',
    
    // Hero
    heroDescription: 'Specialized in AI-powered digital products and managed DevOps services. We work on two fronts: complete creation of innovative products and robust infrastructure to accelerate your deliveries.',
    createDigitalProduct: 'Create Digital Product',
    devopsAsService: 'DevOps as a Service',
    
    // Services
    servicesTitle: 'Our Two Lines of Action',
    servicesDescription: 'We offer complete solutions for creating innovative digital products and managed DevOps services',
    
    digitalProductsTitle: 'AI-Powered Digital Products',
    digitalProductsDescription: 'From ideation to launch of innovative digital products, especially in the Artificial Intelligence market. We follow the complete product lifecycle.',
    
    strategyDiscovery: 'Strategy & Discovery',
    productManagement: 'Product Management',
    designSprint: 'Design Sprint',
    discoveryValidation: 'Discovery & Validation',
    businessOpportunities: 'Business Opportunities',
    
    developmentLaunch: 'Development & Launch',
    pocMvp: 'POC & MVP',
    technicalArchitecture: 'Technical Architecture',
    projectManagement: 'Project Management',
    goToMarket: 'Go-to-Market',
    
    devopsTitle: 'DevOps as a Service',
    devopsDescription: 'Complete managed service to handle and create cloud infrastructure solutions, allowing you to focus on your core business.',
    
    infrastructureCloud: 'Infrastructure & Cloud',
    cloudInfrastructure: 'Cloud Infrastructure',
    cicdPipelines: 'CI/CD Pipelines',
    kubernetesContainers: 'Kubernetes & Containers',
    infrastructureAsCode: 'Infrastructure as Code',
    
    operationsSre: 'Operations & SRE',
    releaseManagement: 'Release Management',
    srePractices: 'SRE Practices',
    monitoring247: '24/7 Monitoring',
    securityCompliance: 'Security & Compliance',
    
    // About
    aboutTitle: 'Our Complete Approach',
    aboutDescription: 'We work on two strategic fronts: we create innovative digital products from scratch and offer managed DevOps to optimize your operations. Our experience in the AI market allows us to deliver truly disruptive solutions.',
    
    digitalProductsAI: 'AI-Powered Digital Products',
    digitalProductsAIDesc: 'From ideation to go-to-market, specialized in products that use Artificial Intelligence',
    
    managedDevops: 'Managed DevOps',
    managedDevopsDesc: 'Robust infrastructure and SRE practices to ensure high availability and performance',
    
    completeCycle: 'Complete Cycle',
    completeCycleDesc: 'From discovery and validation to technical architecture and continuous operation',
    
    projectsDelivered: 'Projects Delivered',
    uptimeGuaranteed: 'Uptime Guaranteed',
    support: 'Support',
    yearsExperience: 'Years of Experience',
    
    // CTA
    ctaTitle: 'Ready to transform your infrastructure?',
    ctaDescription: "Let's talk about how we can accelerate your projects and optimize your operation",
    scheduleFreeConsultation: 'Schedule Free Consultation',
    
    // Footer
    footerDescription: 'Consulting specialized in DevOps and Digital Product Architecture',
    digitalProducts: 'Digital Products',
    managedDevopsFooter: 'Managed DevOps',
    copyright: '© 2024 arqui.dev. All rights reserved.',
  }
};