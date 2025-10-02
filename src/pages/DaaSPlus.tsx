import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";

const DaaSPlus = () => {
  const { language } = useLanguage();

  const slides = [
    {
      id: 1,
      title: "DevOps as a Service+ (DaaS+)",
      subtitle: language === 'pt' 
        ? "Engenharia de Plataforma Gerenciada para Velocidade e Confiabilidade Previsíveis"
        : "Managed Platform Engineering for Predictable Velocity and Reliability",
      focus: [
        language === 'pt' ? "DevOps baseado em SRE" : "SRE-Grounded DevOps",
        language === 'pt' ? "Entrega Cloud-Agnostic" : "Cloud-Agnostic Delivery",
        language === 'pt' ? "Governança FinOps" : "FinOps Governance"
      ],
      model: language === 'pt' 
        ? "Taxa Mensal Fixa + Alocação Transparente de Créditos"
        : "Fixed Monthly Fee + Transparent Credit Allocation"
    },
    {
      id: 2,
      title: language === 'pt' ? "O Desafio da Entrega Moderna" : "The Modern Delivery Challenge",
      subtitle: language === 'pt' ? "Os Custos Ocultos do DevOps Não Gerenciado" : "The Hidden Costs of Unmanaged DevOps",
      challenges: [
        {
          title: language === 'pt' ? "Gastos Imprevisíveis" : "Unpredictable Spends",
          desc: language === 'pt' 
            ? "Custos na nuvem fora de controle sem orientação contínua de FinOps"
            : "Cloud costs spiral out of control without continuous FinOps guidance"
        },
        {
          title: language === 'pt' ? "Fricção do Desenvolvedor" : "Developer Friction",
          desc: language === 'pt'
            ? "Falta de 'Golden Paths' - times perdem tempo configurando infraestrutura manualmente"
            : "Lack of 'Golden Paths' means product teams waste time manually configuring infrastructure"
        },
        {
          title: language === 'pt' ? "Instabilidade & Burnout" : "Instability & Burnout",
          desc: language === 'pt'
            ? "Deployments arriscados levam a MTTR alto e fadiga das equipes"
            : "Deployments are risky; failures lead to long MTTR and team fatigue"
        },
        {
          title: language === 'pt' ? "Risco de Lock-in" : "Vendor Lock-in Risk",
          desc: language === 'pt'
            ? "Arquitetura muito acoplada a um provedor, limitando flexibilidade futura"
            : "Architecture tied too tightly to a single cloud provider, limiting flexibility"
        }
      ]
    },
    {
      id: 3,
      title: language === 'pt' ? "Solução DaaS+ — 5 Pilares Core" : "The DaaS+ Solution — Our 5 Core Pillars",
      subtitle: language === 'pt' 
        ? "Engenharia do Seu Caminho para Excelência em Produção"
        : "Engineering Your Path to Production Excellence",
      pillars: [
        {
          name: language === 'pt' ? "Métricas DevOps (DORA)" : "DevOps Metrics (DORA)",
          desc: language === 'pt' 
            ? "Medimos o que importa: Lead Time, Frequência de Deploy, Taxa de Falha"
            : "We measure what matters: Lead Time, Deployment Frequency, Change Failure Rate"
        },
        {
          name: language === 'pt' ? "Observabilidade (SRE)" : "Observability (SRE)",
          desc: language === 'pt'
            ? "Confiabilidade orientada por dados (SLIs/SLOs), não intuição"
            : "Reliability driven by data (SLIs/SLOs), not intuition"
        },
        {
          name: language === 'pt' ? "Gestão de Infraestrutura Cloud" : "Cloud Infrastructure Management",
          desc: language === 'pt'
            ? "Governança estruturada, IAM, SSO e FinOps contínuo"
            : "Structured governance, IAM, SSO, and continuous FinOps"
        },
        {
          name: language === 'pt' ? "Arquitetura Ágil" : "Agile Architecture",
          desc: language === 'pt'
            ? "Design para escalabilidade e portabilidade multi-cloud (foco CNCF)"
            : "Design for scalability and multi-cloud portability (CNCF focus)"
        },
        {
          name: language === 'pt' ? "Baixo Lock-in de Vendor" : "Low Vendor Lock-in",
          desc: language === 'pt'
            ? "Uso de ferramentas open-source (Kubernetes, Argo CD, OTel)"
            : "Use open-source tools (Kubernetes, Argo CD, OTel) for flexibility"
        }
      ]
    },
    {
      id: 4,
      title: language === 'pt' ? "Modelo de Créditos & Transparência de Preços" : "Credit Model & Pricing Transparency",
      subtitle: language === 'pt' 
        ? "Previsibilidade de Orçamento com Capacidade Flexível"
        : "Budget Predictability with Flexible Capacity",
      creditModel: {
        title: language === 'pt' ? "Modelo de Créditos de Engenharia" : "Engineering Credit Model",
        desc: language === 'pt' 
          ? "Todo trabalho é quantificado. 1 Crédito = 1 Hora de Engenheiro"
          : "All work is quantified. 1 Credit = 1 Engineer Hour",
        roles: [
          {
            role: language === 'pt' ? "Engenheiro" : "Engineer",
            multiplier: "1 Credit / hour",
            focus: language === 'pt' 
              ? "Execução, Operações, IaC, CI/CD, Correções"
              : "Execution, Operations, IaC, CI/CD, Bug Fixes"
          },
          {
            role: language === 'pt' ? "Arquiteto" : "Architect",
            multiplier: "3 Credits / hour",
            focus: language === 'pt'
              ? "Design Estratégico, Governança SRE, Planejamento de Alto Nível"
              : "Strategic Design, SRE Governance, High-Level Planning"
          }
        ]
      },
      pricing: [
        {
          tier: "Basic",
          credits: "22/week",
          price: "$2,500.00",
          sla: language === 'pt' ? "4 Horas Úteis" : "4 Business Hours"
        },
        {
          tier: "Standard",
          credits: "50/week",
          price: "$5,000.00",
          sla: language === 'pt' ? "2 Horas Úteis" : "2 Business Hours"
        },
        {
          tier: "Premium",
          credits: "100/week",
          price: "$7,990.00",
          sla: language === 'pt' ? "1 Hora Útil" : "1 Business Hour"
        }
      ]
    },
    {
      id: 5,
      title: language === 'pt' ? "Detalhamento por Tier" : "Tier Breakdown",
      subtitle: language === 'pt' 
        ? "Escolha Sua Velocidade: Entregas-Chave por Tier"
        : "Choose Your Velocity: Key Deliverables by Tier",
      tiers: [
        {
          name: "Basic",
          outcome: language === 'pt' 
            ? "Entrega Fundamental: Estabelece primeiro caminho seguro e repetível para não-produção"
            : "Foundational Delivery: Establishes first secure, repeatable path to non-production",
          cloud: language === 'pt'
            ? "IAM simples e dashboards de Gestão de Custos"
            : "Simple IAM and Cost Management dashboards",
          tech: "CI/CD, Argo CD, Docker, SAST/SCA"
        },
        {
          name: "Standard",
          outcome: language === 'pt'
            ? "Fluxo Orientado por SLO: Automatiza promoção entre ambientes e implementa confiabilidade mensurável"
            : "SLO-Led Flow: Automates cross-environment promotion and implements measurable reliability",
          cloud: language === 'pt'
            ? "VPN/SSO completo, recomendações FinOps avançadas, Suporte a Créditos Cloud"
            : "Full VPN/SSO implementation, advanced FinOps recommendations, Cloud Credit Support",
          tech: "Argo Rollouts (Canary), Service SLOs, Policy-as-Code (OPA)"
        },
        {
          name: "Premium",
          outcome: language === 'pt'
            ? "Plataforma de Desenvolvedores (IDP): Maximiza DX e alcança resiliência empresarial"
            : "Developer Platform (IDP): Maximizes Developer Experience (DX) and achieves enterprise resilience",
          cloud: language === 'pt'
            ? "Programa FinOps Contínuo e decisões automatizadas de custo"
            : "Continuous FinOps Program and automated cost-aware decisions",
          tech: "Backstage/Port, SRE Embarcado, SLO-Gated Rollback, Chaos Engineering"
        }
      ]
    },
    {
      id: 6,
      title: language === 'pt' ? "Premium Plus & Escalonamento" : "Premium Plus & Scaling",
      subtitle: language === 'pt'
        ? "Escalando de Forma Previsível com Add-ons Premium Plus"
        : "Scaling Predictably with Premium Plus Add-ons",
      addons: [
        {
          name: language === 'pt' ? "+1 Engenheiro (FTE)" : "+1 Engineer (FTE)",
          desc: language === 'pt'
            ? "+40 Créditos/semana para capacidade dedicada"
            : "+40 Credits/week for dedicated capacity",
          price: "$6,990.90/mo"
        },
        {
          name: language === 'pt' ? "Gestão Contínua de Releases" : "Continuous Release Management",
          desc: language === 'pt'
            ? "Suporte dedicado para execução de CI/CD e entrega"
            : "Dedicated support for CI/CD execution and delivery",
          price: "$1,599.00/mo"
        },
        {
          name: language === 'pt' ? "Suporte Agendado de Fim de Semana" : "Scheduled Weekend Support",
          desc: language === 'pt'
            ? "Até 16 horas de trabalho síncrono planejado aos fins de semana"
            : "Up to 16 hours of planned, synchronous weekend work",
          price: "$2,449.00/mo"
        }
      ],
      policy: language === 'pt'
        ? "Qualquer consumo mensal excedendo os créditos alocados é cobrado à taxa padrão do contrato"
        : "Any monthly consumption exceeding allocated credits is billed at the standard contract rate"
    },
    {
      id: 7,
      title: language === 'pt' ? "Próximos Passos" : "Next Steps",
      subtitle: language === 'pt' 
        ? "Comece com a Fase de Assessment"
        : "Start with the Assessment Phase",
      assessment: [
        {
          title: language === 'pt' ? "Diagnóstico Técnico" : "Technical Diagnosis",
          desc: language === 'pt'
            ? "Auditoria do processo de entrega atual, arquitetura e configuração cloud"
            : "Audit current delivery process, architecture, and cloud configuration"
        },
        {
          title: language === 'pt' ? "Mapeamento de Value Stream" : "Value Stream Mapping",
          desc: language === 'pt'
            ? "Identifica gargalos-chave e quantifica métricas DORA atuais"
            : "Identify key bottlenecks and quantify current DORA metrics"
        },
        {
          title: language === 'pt' ? "Entrega de Roadmap" : "Roadmap Delivery",
          desc: language === 'pt'
            ? "Receba um plano priorizado de 90 dias e visão de plataforma de 12 meses"
            : "Receive a prioritized 90-day plan and 12-month platform vision"
        },
        {
          title: language === 'pt' ? "Seleção de Tier" : "Tier Selection",
          desc: language === 'pt'
            ? "Selecione o tier DaaS+ que melhor combina com suas necessidades imediatas"
            : "Select the DaaS+ tier that best matches your immediate needs"
        }
      ],
      cta: language === 'pt'
        ? "Pronto para garantir sua confiabilidade e desbloquear velocidade de desenvolvedor?"
        : "Ready to guarantee your reliability and unlock developer velocity?"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold font-fira">
            <span className="text-primary">arqui</span><span className="text-secondary">.dev</span>
          </a>
          <LanguageToggle />
        </div>
      </header>

      {/* Content */}
      <main className="pt-20">
        {/* Slide 1 - Title */}
        <section className="min-h-screen flex items-center justify-center bg-[image:var(--gradient-hero)] relative">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="secondary" className="mb-8 text-lg">
                {language === 'pt' ? 'SLIDE 1' : 'SLIDE 1'}
              </Badge>
              <h1 className="text-6xl lg:text-8xl font-bold mb-8 font-fira">
                <span className="text-primary text-shadow-blue">DaaS</span>
                <span className="text-secondary text-shadow-pink">+</span>
              </h1>
              <p className="text-3xl lg:text-4xl mb-12 text-secondary font-ibm font-bold">
                {slides[0].subtitle}
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {slides[0].focus.map((item, idx) => (
                  <Card key={idx} className="bg-background/50">
                    <CardContent className="p-6">
                      <CheckCircle2 className="w-8 h-8 text-accent mb-3 mx-auto" />
                      <p className="font-bold text-secondary">{item}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-xl text-accent font-mono">
                {slides[0].model}
              </p>
            </div>
          </div>
        </section>

        {/* Slide 2 - Challenge */}
        <section className="min-h-screen flex items-center justify-center py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Badge variant="outline" className="mb-8">
                {language === 'pt' ? 'SLIDE 2' : 'SLIDE 2'}
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary font-fira">
                {slides[1].title}
              </h2>
              <h3 className="text-2xl lg:text-3xl mb-12 text-secondary font-ibm">
                {slides[1].subtitle}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {slides[1].challenges.map((challenge, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-primary">{challenge.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-secondary">{challenge.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3 - 5 Pillars */}
        <section className="min-h-screen flex items-center justify-center py-20 bg-[image:var(--gradient-section)]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-8">
                {language === 'pt' ? 'SLIDE 3' : 'SLIDE 3'}
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary font-fira">
                {slides[2].title}
              </h2>
              <h3 className="text-2xl lg:text-3xl mb-12 text-secondary font-ibm">
                {slides[2].subtitle}
              </h3>
              <div className="space-y-6">
                {slides[2].pillars.map((pillar, idx) => (
                  <Card key={idx} className="bg-background/80">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Badge variant="default" className="shrink-0">
                          {idx + 1}
                        </Badge>
                        <div>
                          <h4 className="text-xl font-bold text-primary mb-2">{pillar.name}</h4>
                          <p className="text-secondary">{pillar.desc}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4 - Pricing */}
        <section className="min-h-screen flex items-center justify-center py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Badge variant="outline" className="mb-8">
                {language === 'pt' ? 'SLIDE 4' : 'SLIDE 4'}
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary font-fira">
                {slides[3].title}
              </h2>
              <h3 className="text-2xl lg:text-3xl mb-12 text-secondary font-ibm">
                {slides[3].subtitle}
              </h3>
              
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-primary text-3xl">{slides[3].creditModel.title}</CardTitle>
                  <p className="text-secondary text-lg mt-2">{slides[3].creditModel.desc}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {slides[3].creditModel.roles.map((role, idx) => (
                      <div key={idx} className="border-2 border-primary p-6 bg-background/50">
                        <h4 className="text-2xl font-bold text-secondary mb-2">{role.role}</h4>
                        <p className="text-accent text-xl font-mono mb-3">{role.multiplier}</p>
                        <p className="text-secondary">{role.focus}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                {slides[3].pricing.map((tier, idx) => (
                  <Card key={idx} className={idx === 2 ? "border-accent border-4" : ""}>
                    <CardHeader>
                      <CardTitle className="text-primary text-3xl">{tier.tier}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-secondary font-mono text-sm">{language === 'pt' ? 'Créditos/Semana' : 'Credits/Week'}</p>
                        <p className="text-accent text-2xl font-bold">{tier.credits}</p>
                      </div>
                      <div>
                        <p className="text-secondary font-mono text-sm">{language === 'pt' ? 'Preço/Mês' : 'Price/Month'}</p>
                        <p className="text-primary text-3xl font-bold">{tier.price}</p>
                      </div>
                      <div>
                        <p className="text-secondary font-mono text-sm">P1 SLA</p>
                        <p className="text-secondary text-lg font-bold">{tier.sla}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5 - Tier Breakdown */}
        <section className="min-h-screen flex items-center justify-center py-20 bg-[image:var(--gradient-primary)]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Badge variant="secondary" className="mb-8">
                {language === 'pt' ? 'SLIDE 5' : 'SLIDE 5'}
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary font-fira">
                {slides[4].title}
              </h2>
              <h3 className="text-2xl lg:text-3xl mb-12 text-secondary font-ibm">
                {slides[4].subtitle}
              </h3>
              <div className="space-y-8">
                {slides[4].tiers.map((tier, idx) => (
                  <Card key={idx} className="bg-background/90">
                    <CardHeader>
                      <CardTitle className="text-primary text-3xl">{tier.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-secondary font-bold text-sm mb-2">
                          {language === 'pt' ? 'RESULTADO PRIMÁRIO' : 'PRIMARY OUTCOME'}
                        </p>
                        <p className="text-secondary text-lg">{tier.outcome}</p>
                      </div>
                      <div>
                        <p className="text-accent font-bold text-sm mb-2">
                          {language === 'pt' ? 'FOCO CLOUD & FINOPS' : 'CLOUD & FINOPS FOCUS'}
                        </p>
                        <p className="text-secondary">{tier.cloud}</p>
                      </div>
                      <div>
                        <p className="text-primary font-bold text-sm mb-2">
                          {language === 'pt' ? 'TECNOLOGIA CHAVE' : 'KEY TECHNOLOGY'}
                        </p>
                        <p className="text-secondary font-mono text-sm">{tier.tech}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6 - Premium Plus */}
        <section className="min-h-screen flex items-center justify-center py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <Badge variant="outline" className="mb-8">
                {language === 'pt' ? 'SLIDE 6' : 'SLIDE 6'}
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary font-fira">
                {slides[5].title}
              </h2>
              <h3 className="text-2xl lg:text-3xl mb-12 text-secondary font-ibm">
                {slides[5].subtitle}
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {slides[5].addons.map((addon, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-primary text-xl">{addon.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-secondary">{addon.desc}</p>
                      <p className="text-accent text-2xl font-bold font-mono">{addon.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="bg-accent/10 border-accent">
                <CardContent className="p-6">
                  <p className="text-secondary text-lg">
                    <span className="font-bold text-accent">
                      {language === 'pt' ? 'POLÍTICA: ' : 'POLICY: '}
                    </span>
                    {slides[5].policy}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Slide 7 - Next Steps */}
        <section className="min-h-screen flex items-center justify-center py-20 bg-[image:var(--gradient-hero)]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <Badge variant="secondary" className="mb-8">
                {language === 'pt' ? 'SLIDE 7' : 'SLIDE 7'}
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-primary font-fira">
                {slides[6].title}
              </h2>
              <h3 className="text-2xl lg:text-3xl mb-12 text-secondary font-ibm">
                {slides[6].subtitle}
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {slides[6].assessment.map((item, idx) => (
                  <Card key={idx} className="bg-background/80 text-left">
                    <CardHeader>
                      <CardTitle className="text-primary flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6" />
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-secondary">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-background/90 border-4 border-primary p-8 mb-8">
                <p className="text-2xl lg:text-3xl text-secondary font-bold mb-6">
                  {slides[6].cta}
                </p>
                <Button size="lg" className="text-xl px-8 py-6">
                  {language === 'pt' ? 'Agende Seu Assessment' : 'Schedule Your Assessment'}
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-primary bg-background py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-secondary font-mono">
            <span className="text-primary font-bold">arqui.dev</span> — {language === 'pt' ? 'Acelerando Sua Entrega. Garantindo Sua Confiabilidade.' : 'Accelerate Your Delivery. Guarantee Your Reliability.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DaaSPlus;
