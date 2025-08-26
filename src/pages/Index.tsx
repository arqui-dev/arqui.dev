import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Cloud, Zap, Users, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage, translations } from "@/hooks/useLanguage";
import { LanguageToggle } from "@/components/LanguageToggle";
import { ReactTyped } from "react-typed";
import techBg from "@/assets/tech-terminal-bg.jpg";
const Index = () => {
  const {
    language
  } = useLanguage();
  const t = translations[language];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b-2 border-primary bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-fira">
              <span className="text-primary">arqui</span><span className="text-secondary">.dev</span>
            </div>
            
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <Button className="btn-brutalist bg-primary text-primary-foreground border-primary">{t.talkToUs}</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden" style={{
      backgroundImage: `url(${techBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* 80% black overlay */}
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 font-fira">
              <span className="text-primary text-shadow-blue">arqui</span><span className="text-secondary text-shadow-pink">.dev</span>
            </h1>
            <div className="text-xl mb-8 max-w-3xl mx-auto text-secondary font-ibm">
              <span className="text-primary font-bold">{t.heroTitle} </span>
              <h6 className="text-sm text-muted-foreground mb-2 italic">{t.humbleOpinion}</h6>
              <ReactTyped strings={language === 'pt' ? ["Arquitete sua Plataforma DevOps", "Engenharia de Produtos Digitais com IA"] : ["Architect your DevOps Platform", "Engineer your AI Digital Product"]} typeSpeed={50} backSpeed={30} backDelay={2000} loop showCursor={true} cursorChar="|" className="text-secondary font-bold font-fira" />
            </div>
            

            {/* Services Cards in Hero */}
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
                      <h4 className="font-semibold mb-3 text-primary text-shadow-blue">{t.strategyDiscovery}</h4>
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
                      <h4 className="font-semibold mb-3 text-primary text-shadow-blue">{t.developmentLaunch}</h4>
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
                      <h4 className="font-semibold mb-3 text-primary text-shadow-blue">{t.infrastructureCloud}</h4>
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
                      <h4 className="font-semibold mb-3 text-primary text-shadow-blue">{t.operationsSre}</h4>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-secondary text-shadow-pink">
            {t.ctaTitle}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-secondary">
            {t.ctaDescription}
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            {t.scheduleFreeConsultation}
            <ArrowRight className="ml-2" />
          </Button>
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
    </div>;
};
export default Index;