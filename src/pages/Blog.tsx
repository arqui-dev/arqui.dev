import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { useLanguage, translations } from "@/hooks/useLanguage";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Link } from "react-router-dom";

// Mock blog posts data
const blogPosts = {
  pt: [
    {
      id: 1,
      title: "Como Implementar DevOps Eficaz em Startups",
      excerpt: "Descubra as melhores práticas para implementar uma cultura DevOps em empresas em crescimento acelerado.",
      content: `
        <h2>Introdução</h2>
        <p>A implementação de DevOps em startups apresenta desafios únicos. Com recursos limitados e pressão por entregas rápidas, é crucial adotar as práticas certas desde o início.</p>
        
        <h2>1. Comece com o Básico</h2>
        <p>Antes de implementar ferramentas complexas, estabeleça processos básicos de CI/CD. Ferramentas como GitHub Actions ou GitLab CI podem ser suficientes no início.</p>
        
        <h2>2. Automação Incremental</h2>
        <p>Não tente automatizar tudo de uma vez. Comece com testes automatizados e deploy básico, depois evolua gradualmente.</p>
        
        <h2>3. Cultura Primeiro</h2>
        <p>DevOps é mais sobre cultura do que ferramentas. Promova colaboração entre desenvolvimento e operações desde o início.</p>
        
        <h2>Conclusão</h2>
        <p>Com a abordagem certa, startups podem se beneficiar enormemente do DevOps, ganhando velocidade e confiabilidade nas entregas.</p>
      `,
      author: "João Silva",
      date: "2024-01-15",
      readTime: "5 min",
      category: "DevOps",
      tags: ["DevOps", "Startup", "CI/CD", "Automação"]
    },
    {
      id: 2,
      title: "IA Generativa em Produtos Digitais: Oportunidades e Desafios",
      excerpt: "Explore como a inteligência artificial generativa está revolucionando o desenvolvimento de produtos digitais.",
      content: `
        <h2>O Cenário Atual da IA Generativa</h2>
        <p>A IA generativa está transformando a forma como criamos e consumimos conteúdo digital. De chatbots a geração de imagens, as possibilidades são infinitas.</p>
        
        <h2>Oportunidades em Produtos Digitais</h2>
        <p>• Personalização em massa<br>
        • Automação de criação de conteúdo<br>
        • Melhoria da experiência do usuário<br>
        • Novos modelos de negócio</p>
        
        <h2>Principais Desafios</h2>
        <p>• Qualidade e confiabilidade dos outputs<br>
        • Custos computacionais<br>
        • Questões éticas e de privacidade<br>
        • Integração com sistemas existentes</p>
        
        <h2>Melhores Práticas</h2>
        <p>Para implementar IA generativa com sucesso, é essencial começar com casos de uso específicos e mensuráveis, investir em qualidade dos dados e manter transparência com os usuários.</p>
      `,
      author: "Maria Santos",
      date: "2024-01-10",
      readTime: "7 min",
      category: "IA",
      tags: ["IA", "Produtos Digitais", "Inovação", "Machine Learning"]
    },
    {
      id: 3,
      title: "Kubernetes vs Docker Swarm: Qual Escolher em 2024?",
      excerpt: "Uma comparação detalhada entre as principais plataformas de orquestração de containers para sua estratégia de DevOps.",
      content: `
        <h2>Introdução às Plataformas de Orquestração</h2>
        <p>A escolha da plataforma de orquestração é crucial para o sucesso da sua arquitetura em containers. Vamos analisar as principais diferenças.</p>
        
        <h2>Kubernetes: O Padrão da Indústria</h2>
        <p>• Ecossistema rico e comunidade ativa<br>
        • Flexibilidade e extensibilidade<br>
        • Suporte nativo dos principais cloud providers<br>
        • Curva de aprendizado mais íngreme</p>
        
        <h2>Docker Swarm: Simplicidade em Primeiro Lugar</h2>
        <p>• Fácil de configurar e gerenciar<br>
        • Integração nativa com Docker<br>
        • Menor complexidade operacional<br>
        • Menos recursos avançados</p>
        
        <h2>Quando Usar Cada Um</h2>
        <p>Use Kubernetes para aplicações complexas com necessidades de escalabilidade avançada. Opte pelo Docker Swarm para projetos menores que priorizam simplicidade.</p>
      `,
      author: "Carlos Oliveira",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Containers",
      tags: ["Kubernetes", "Docker", "Containers", "DevOps"]
    }
  ],
  en: [
    {
      id: 1,
      title: "How to Implement Effective DevOps in Startups",
      excerpt: "Discover best practices for implementing DevOps culture in fast-growing companies.",
      content: `
        <h2>Introduction</h2>
        <p>Implementing DevOps in startups presents unique challenges. With limited resources and pressure for fast deliveries, it's crucial to adopt the right practices from the start.</p>
        
        <h2>1. Start with the Basics</h2>
        <p>Before implementing complex tools, establish basic CI/CD processes. Tools like GitHub Actions or GitLab CI can be sufficient at the beginning.</p>
        
        <h2>2. Incremental Automation</h2>
        <p>Don't try to automate everything at once. Start with automated testing and basic deployment, then evolve gradually.</p>
        
        <h2>3. Culture First</h2>
        <p>DevOps is more about culture than tools. Promote collaboration between development and operations from the start.</p>
        
        <h2>Conclusion</h2>
        <p>With the right approach, startups can benefit enormously from DevOps, gaining speed and reliability in deliveries.</p>
      `,
      author: "John Smith",
      date: "2024-01-15",
      readTime: "5 min",
      category: "DevOps",
      tags: ["DevOps", "Startup", "CI/CD", "Automation"]
    },
    {
      id: 2,
      title: "Generative AI in Digital Products: Opportunities and Challenges",
      excerpt: "Explore how generative artificial intelligence is revolutionizing digital product development.",
      content: `
        <h2>Current Generative AI Landscape</h2>
        <p>Generative AI is transforming how we create and consume digital content. From chatbots to image generation, the possibilities are endless.</p>
        
        <h2>Opportunities in Digital Products</h2>
        <p>• Mass personalization<br>
        • Content creation automation<br>
        • Enhanced user experience<br>
        • New business models</p>
        
        <h2>Main Challenges</h2>
        <p>• Output quality and reliability<br>
        • Computational costs<br>
        • Ethical and privacy concerns<br>
        • Integration with existing systems</p>
        
        <h2>Best Practices</h2>
        <p>To successfully implement generative AI, it's essential to start with specific and measurable use cases, invest in data quality, and maintain transparency with users.</p>
      `,
      author: "Maria Santos",
      date: "2024-01-10",
      readTime: "7 min",
      category: "AI",
      tags: ["AI", "Digital Products", "Innovation", "Machine Learning"]
    },
    {
      id: 3,
      title: "Kubernetes vs Docker Swarm: Which to Choose in 2024?",
      excerpt: "A detailed comparison between the main container orchestration platforms for your DevOps strategy.",
      content: `
        <h2>Introduction to Orchestration Platforms</h2>
        <p>Choosing the orchestration platform is crucial for your container architecture success. Let's analyze the main differences.</p>
        
        <h2>Kubernetes: Industry Standard</h2>
        <p>• Rich ecosystem and active community<br>
        • Flexibility and extensibility<br>
        • Native support from major cloud providers<br>
        • Steeper learning curve</p>
        
        <h2>Docker Swarm: Simplicity First</h2>
        <p>• Easy to configure and manage<br>
        • Native Docker integration<br>
        • Lower operational complexity<br>
        • Fewer advanced features</p>
        
        <h2>When to Use Each One</h2>
        <p>Use Kubernetes for complex applications with advanced scalability needs. Choose Docker Swarm for smaller projects that prioritize simplicity.</p>
      `,
      author: "Carlos Oliveira",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Containers",
      tags: ["Kubernetes", "Docker", "Containers", "DevOps"]
    }
  ]
};

const Blog = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const posts = blogPosts[language];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-transparent border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80">
                <ArrowLeft size={20} />
                <span className="text-sm">Voltar</span>
              </Link>
              <div className="text-xl font-bold">
                <span className="text-primary text-shadow-blue">arqui</span><span className="text-secondary text-shadow-pink">.dev</span>
              </div>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-secondary">
            {t.blog}
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            {t.latestPostsDescription}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-card">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      {t.readMore}
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Por {post.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-primary text-shadow-blue">arqui</span><span className="text-accent text-shadow-yellow">.dev</span>
              </div>
              <p className="text-xs text-accent mb-4">* in our humble opinion</p>
              <p className="text-accent mb-6">
                {t.footerDescription}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-accent mb-4">{t.digitalProducts}</h3>
              <ul className="space-y-2 text-accent">
                <li>{t.discoveryValidation} & {t.designSprint}</li>
                <li>{t.productManagement}</li>
                <li>{t.pocMvp} Development</li>
                <li>Produtos com IA</li>
                <li>{t.goToMarket} Strategy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-accent mb-4">{t.managedDevopsFooter}</h3>
              <ul className="space-y-2 text-accent">
                <li>{t.cloudInfrastructure}</li>
                <li>{t.cicdPipelines} & Automação</li>
                <li>{t.srePractices}</li>
                <li>{t.monitoring247}</li>
                <li>{t.releaseManagement}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-accent">
              {t.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;