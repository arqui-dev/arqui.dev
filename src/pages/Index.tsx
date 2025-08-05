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
      <header className="border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-primary">arqui</span><span className="text-secondary">.dev</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">{t.services}</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{t.about}</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t.contact}</a>
            </nav>
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <Button>{t.talkToUs}</Button>
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
            <h1 className="text-6xl lg:text-8xl font-bold mb-6">
              <span className="text-primary">arqui</span><span className="text-secondary">.dev</span>
            </h1>
            <div className="text-xl mb-8 max-w-3xl mx-auto text-white">
              <span className="text-primary">The best consulting for: </span>
              <ReactTyped
                strings={[
                  "Architect your DevOps Platform",
                  "Engineer your AI Digital Product"
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                showCursor={true}
                cursorChar="|"
                className="text-secondary font-semibold"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                {t.createDigitalProduct}
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                {t.devopsAsService}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-accent">
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-accent-foreground">{t.servicesTitle}</h2>
            <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto">
              {t.servicesDescription}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Code className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t.digitalProductsTitle}</h3>
                <p className="text-muted-foreground mb-6">
                  {t.digitalProductsDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">{t.strategyDiscovery}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.productManagement}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.designSprint}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.discoveryValidation}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.businessOpportunities}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">{t.developmentLaunch}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.pocMvp}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.technicalArchitecture}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.projectManagement}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.goToMarket}
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
                <h3 className="text-2xl font-semibold mb-4">{t.devopsTitle}</h3>
                <p className="text-muted-foreground mb-6">
                  {t.devopsDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">{t.infrastructureCloud}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.cloudInfrastructure}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.cicdPipelines}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.kubernetesContainers}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.infrastructureAsCode}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">{t.operationsSre}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.releaseManagement}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.srePractices}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.monitoring247}
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="text-primary mr-2" size={16} />
                        {t.securityCompliance}
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">{t.aboutTitle}</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.aboutDescription}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t.digitalProductsAI}</h3>
                    <p className="text-muted-foreground">
                      {t.digitalProductsAIDesc}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t.managedDevops}</h3>
                    <p className="text-muted-foreground">
                      {t.managedDevopsDesc}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckCircle className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{t.completeCycle}</h3>
                    <p className="text-muted-foreground">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            {t.ctaTitle}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
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
              <span className="text-primary">arqui</span><span className="text-accent-foreground">.dev</span>
            </div>
            <p className="text-xs text-accent-foreground mb-4">* in our humble opinion</p>
              <p className="text-accent-foreground mb-6">
                {t.footerDescription}
              </p>
                <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary" />
                  <span className="text-accent-foreground">contato@arqui.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary" />
                  <span className="text-accent-foreground">+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-accent-foreground">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-accent-foreground mb-4">{t.digitalProducts}</h3>
              <ul className="space-y-2 text-accent-foreground">
                <li>{t.discoveryValidation} & {t.designSprint}</li>
                <li>{t.productManagement}</li>
                <li>{t.pocMvp} Development</li>
                <li>Produtos com IA</li>
                <li>{t.goToMarket} Strategy</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-accent-foreground mb-4">{t.managedDevopsFooter}</h3>
              <ul className="space-y-2 text-accent-foreground">
                <li>{t.cloudInfrastructure}</li>
                <li>{t.cicdPipelines} & Automação</li>
                <li>{t.srePractices}</li>
                <li>{t.monitoring247}</li>
                <li>{t.releaseManagement}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-accent-foreground">
              {t.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;