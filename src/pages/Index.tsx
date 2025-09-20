import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Cloud, Zap, Users, CheckCircle, Mail, MapPin, Phone, Calendar, Clock } from "lucide-react";
import { useLanguage, translations } from "@/hooks/useLanguage";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
// Mock blog posts for the latest posts section
const mockPosts = {
  pt: [
    {
      id: 1,
      title: "Como Implementar DevOps Eficaz em Startups",
      excerpt: "Descubra as melhores práticas para implementar uma cultura DevOps em empresas em crescimento acelerado.",
      author: "João Silva",
      date: "2024-01-15",
      readTime: "5 min",
      category: "DevOps"
    },
    {
      id: 2,
      title: "IA Generativa em Produtos Digitais: Oportunidades e Desafios",
      excerpt: "Explore como a inteligência artificial generativa está revolucionando o desenvolvimento de produtos digitais.",
      author: "Maria Santos",
      date: "2024-01-10",
      readTime: "7 min",
      category: "IA"
    },
    {
      id: 3,
      title: "Kubernetes vs Docker Swarm: Qual Escolher em 2024?",
      excerpt: "Uma comparação detalhada entre as principais plataformas de orquestração de containers.",
      author: "Carlos Oliveira",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Containers"
    }
  ],
  en: [
    {
      id: 1,
      title: "How to Implement Effective DevOps in Startups",
      excerpt: "Discover best practices for implementing DevOps culture in fast-growing companies.",
      author: "John Smith",
      date: "2024-01-15",
      readTime: "5 min",
      category: "DevOps"
    },
    {
      id: 2,
      title: "Generative AI in Digital Products: Opportunities and Challenges",
      excerpt: "Explore how generative artificial intelligence is revolutionizing digital product development.",
      author: "Maria Santos",
      date: "2024-01-10",
      readTime: "7 min",
      category: "AI"
    },
    {
      id: 3,
      title: "Kubernetes vs Docker Swarm: Which to Choose in 2024?",
      excerpt: "A detailed comparison between the main container orchestration platforms.",
      author: "Carlos Oliveira",
      date: "2024-01-05",
      readTime: "6 min",
      category: "Containers"
    }
  ]
};
const Index = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  const posts = mockPosts[language];
  
    return <div className="min-h-screen bg-background relative">
      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-[image:var(--gradient-primary)] opacity-85 z-0"></div>
      <div className="relative z-10">
      {/* Header */}
      <header className="bg-transparent">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-end">
            <LanguageToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl text-left">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 font-fira">
              <span className="text-primary text-shadow-blue">arqui</span><span className="text-secondary text-shadow-pink">.dev</span>
            </h1>
            <div className="text-xl mb-8 max-w-3xl text-secondary font-ibm">
              <span className="text-primary font-bold">{t.heroTitle} </span>
              <span className="text-secondary font-bold font-fira">
                {language === 'pt' ? "Arquitetura de Plataformas DevOps / Engenharia de Produtos Digitais com IA" : "DevOps Platform Architecture / AI Digital Product Engineering"}
              </span>
              <h6 className="text-sm text-accent font-mono mt-6">{t.humbleOpinion}</h6>
            </div>
            

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary text-shadow-pink">
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary">
            {t.ctaDescription}
          </p>
          
          {/* Services Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-secondary">
              <CardContent className="p-8 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-black/30 w-16 h-16 rounded-lg flex items-center justify-center">
                    <Code className="text-pink-500" size={32} />
                  </div>
                  <h3 className="font-semibold text-pink-500 text-2xl text-shadow-blue">{t.digitalProductsTitle}</h3>
                </div>
                <p className="mb-6 text-accent">
                  {t.digitalProductsDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">{t.strategyDiscovery}</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.productManagement}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.designSprint}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.discoveryValidation}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.businessOpportunities}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">{t.developmentLaunch}</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.pocMvp}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.technicalArchitecture}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.projectManagement}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.goToMarket}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-secondary">
              <CardContent className="p-8 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-black/30 w-16 h-16 rounded-lg flex items-center justify-center">
                    <Cloud className="text-pink-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-semibold text-pink-500 text-shadow-blue">{t.devopsTitle}</h3>
                </div>
                <p className="text-accent mb-6">
                  {t.devopsDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">{t.infrastructureCloud}</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.cloudInfrastructure}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.cicdPipelines}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.kubernetesContainers}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.infrastructureAsCode}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">{t.operationsSre}</h5>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.releaseManagement}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.srePractices}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.monitoring247}</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-accent mr-2" size={16} />
                        <span className="text-accent">{t.securityCompliance}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary text-shadow-pink">{t.aboutTitle}</h2>
              <p className="text-lg mb-8 text-secondary">
                {t.aboutDescription}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary text-shadow-pink">{t.digitalProductsAI}</h3>
                    <p className="text-secondary">
                      {t.digitalProductsAIDesc}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary text-shadow-pink">{t.managedDevops}</h3>
                    <p className="text-secondary">
                      {t.managedDevopsDesc}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-secondary text-shadow-pink">{t.completeCycle}</h3>
                    <p className="text-secondary">
                      {t.completeCycleDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">{t.projectsDelivered}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">{t.uptimeGuaranteed}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">{t.support}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">{t.yearsExperience}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary text-shadow-pink">
              {t.latestPosts}
            </h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              {t.latestPostsDescription}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <Card key={post.id} className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString(language === 'pt' ? 'pt-BR' : 'en-US')}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary hover:text-primary transition-colors cursor-pointer mb-3">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-muted-foreground text-xs">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      {t.readMore}
                    </Button>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Por {post.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" className="hover:bg-primary/10">
                {t.seeAllPosts}
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-secondary">
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
                <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary" />
                  <span className="text-accent">contato@arqui.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary" />
                  <span className="text-accent">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-accent">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-accent text-shadow-yellow mb-4">{t.digitalProducts}</h3>
              <ul className="space-y-2 text-accent">
                <li>{t.discoveryValidation} & {t.designSprint}</li>
                <li>{t.productManagement}</li>
                <li>{t.pocMvp} Development</li>
                <li>Produtos com IA</li>
                <li>{t.goToMarket} Strategy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-accent text-shadow-yellow mb-4">{t.managedDevopsFooter}</h3>
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
    </div>;
};
export default Index;