import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Cloud, Zap, Users, CheckCircle, Mail, MapPin, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">arqui.dev</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">Sobre</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
            </nav>
            <Button>Fale Conosco</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Consultoria Especializada em DevOps
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Engenharia de Plataformas DevOps e Arquitetura Digital
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transformamos sua infraestrutura tecnológica com soluções modernas de DevOps, automação e arquitetura de produtos digitais escaláveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Começar Projeto
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Ver Cases
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para modernizar sua infraestrutura e acelerar seus produtos digitais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Engenharia de Plataformas</h3>
                <p className="text-muted-foreground mb-6">
                  Construção de plataformas robustas e escaláveis com foco em automação, observabilidade e eficiência operacional.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Infrastructure as Code
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    CI/CD Pipelines
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Kubernetes & Containers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Code className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Arquitetura de Produtos</h3>
                <p className="text-muted-foreground mb-6">
                  Design de arquiteturas modernas para produtos digitais com foco em performance, escalabilidade e experiência do usuário.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Microserviços
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    APIs & Integrações
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Cloud Native
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">DevOps & Automação</h3>
                <p className="text-muted-foreground mb-6">
                  Implementação de práticas DevOps para acelerar entregas, reduzir riscos e aumentar a confiabilidade dos sistemas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Monitoramento & Alertas
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Backup & Disaster Recovery
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    Security & Compliance
                  </li>
                </ul>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Por que escolher a arqui.dev?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Somos especialistas em transformar ideias em produtos digitais robustos e escaláveis. 
                Nossa experiência combina as melhores práticas de DevOps com arquiteturas modernas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Equipe Especializada</h3>
                    <p className="text-muted-foreground">
                      Profissionais com anos de experiência em grandes empresas de tecnologia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Metodologia Ágil</h3>
                    <p className="text-muted-foreground">
                      Entregamos valor rapidamente com iterações curtas e feedback contínuo
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Resultados Comprovados</h3>
                    <p className="text-muted-foreground">
                      Histórico de sucesso em projetos de diferentes portes e complexidades
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projetos Entregues</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Uptime Garantido</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Suporte</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Pronto para transformar sua infraestrutura?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos acelerar seus projetos e otimizar sua operação
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Agendar Consulta Gratuita
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-secondary-foreground mb-4">arqui.dev</div>
              <p className="text-muted-foreground mb-6">
                Consultoria especializada em DevOps e Arquitetura de Produtos Digitais
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary" />
                  <span className="text-secondary-foreground">contato@arqui.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary" />
                  <span className="text-secondary-foreground">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-secondary-foreground">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Serviços</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Engenharia de Plataformas</li>
                <li>Arquitetura de Produtos</li>
                <li>DevOps & Automação</li>
                <li>Cloud Migration</li>
                <li>Consultoria Técnica</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">Tecnologias</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AWS, Azure, GCP</li>
                <li>Kubernetes & Docker</li>
                <li>Terraform & Ansible</li>
                <li>GitLab CI/CD</li>
                <li>Prometheus & Grafana</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 arqui.dev. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
