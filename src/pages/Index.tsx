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
            <div className="text-2xl font-bold text-primary">
              arqui.dev the best option in: <span className="animate-pulse">Product Architecture</span>*
            </div>
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
              Da Ideação ao Lançamento de Produtos Digitais e DevOps como Serviço
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Especializados em produtos digitais com IA e serviços gerenciados de DevOps. 
              Trabalhamos em duas frentes: criação completa de produtos inovadores e infraestrutura robusta para acelerar suas entregas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Criar Produto Digital
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                DevOps como Serviço
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Nossas Duas Frentes de Atuação</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para criação de produtos digitais inovadores e serviços gerenciados de DevOps
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Code className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Produtos Digitais com IA</h3>
                <p className="text-muted-foreground mb-6">
                  Da ideação ao lançamento de produtos digitais inovadores, especialmente no mercado de Inteligência Artificial. 
                  Acompanhamos todo o ciclo de vida do produto.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Strategy & Discovery</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Gestão de Produtos
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Design Sprint
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Discovery & Validação
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Oportunidades de Negócio
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Development & Launch</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        POC & MVP
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Arquitetura Técnica
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Gestão de Projetos
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Go-to-Market
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">DevOps como Serviço</h3>
                <p className="text-muted-foreground mb-6">
                  Serviço gerenciado completo para cuidar e criar soluções de infraestrutura em nuvem, 
                  permitindo que você foque no seu core business.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Infraestrutura & Cloud</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Infraestrutura em Nuvem
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        CI/CD Pipelines
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Kubernetes & Containers
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Infrastructure as Code
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Operations & SRE</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Gestão de Lançamentos
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Práticas de SRE
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Monitoramento 24/7
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        Security & Compliance
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Nossa Abordagem Completa</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Trabalhamos em duas frentes estratégicas: criamos produtos digitais inovadores do zero e oferecemos 
                DevOps gerenciado para otimizar suas operações. Nossa experiência no mercado de IA nos permite entregar soluções verdadeiramente disruptivas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Produtos Digitais com IA</h3>
                    <p className="text-muted-foreground">
                      Da ideação ao go-to-market, especializados em produtos que utilizam Inteligência Artificial
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">DevOps Gerenciado</h3>
                    <p className="text-muted-foreground">
                      Infraestrutura robusta e práticas de SRE para garantir alta disponibilidade e performance
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Ciclo Completo</h3>
                    <p className="text-muted-foreground">
                      Desde discovery e validação até arquitetura técnica e operação contínua
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
            <div className="text-2xl font-bold text-secondary-foreground mb-4">
              arqui.dev the best option in: <span className="animate-pulse">DevOps Platform Engineering</span>*
            </div>
            <p className="text-xs text-muted-foreground mb-4">* in our humble opinion</p>
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
              <h3 className="font-semibold text-secondary-foreground mb-4">Produtos Digitais</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Discovery & Design Sprint</li>
                <li>Gestão de Produtos</li>
                <li>POC & MVP Development</li>
                <li>Produtos com IA</li>
                <li>Go-to-Market Strategy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-secondary-foreground mb-4">DevOps Gerenciado</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Infraestrutura em Nuvem</li>
                <li>CI/CD & Automação</li>
                <li>Práticas de SRE</li>
                <li>Monitoramento 24/7</li>
                <li>Gestão de Lançamentos</li>
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
