import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Luciana",
    role: "Franqueada – OGGI Sorvetes",
    text: "Recebi projeção mensal e anual antes de fechar. Hoje economizo 80% na conta de luz e já comprei uma segunda franquia com o dinheiro que sobrou.",
    rating: 5,
  },
  {
    name: "Alberto",
    role: "Proprietário – Posto Shell",
    text: "Me mostraram na planilha quanto eu ia economizar e como esse dinheiro voltaria para o posto. Resultado: economia real todos os meses, sem surpresas.",
    rating: 5,
  },
  {
    name: "Eraldo",
    role: "Proprietário – Vó Nena Cocadas",
    text: "A Mariana acompanhou do projeto ao pós-venda. Hoje a fábrica economiza e tenho previsibilidade financeira para os próximos 5 anos.",
    rating: 5,
  },
  {
    name: "Armando Bessa",
    role: "Proprietário – Studio Bessa",
    text: "Não foi só instalar painéis — foi ter um plano de retorno desenhado para o meu tipo de negócio. Economia mensal comprovada.",
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-gradient-to-br from-white to-henzai-blue/5">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-14">
          <h2
            className={`font-libre-franklin text-3xl md:text-4xl font-bold text-henzai-blue mb-4 transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Quem fez as contas <span className="text-henzai-terracota">com a gente</span>
          </h2>
          <p
            className={`font-gantari text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Empresários que trocaram conta de luz alta por capital de giro.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2">
                  <Card className="h-full border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 bg-card/90 backdrop-blur-sm">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="w-8 h-8 text-henzai-terracota/30 mb-4" />
                      <p className="font-gantari text-muted-foreground leading-relaxed mb-6 flex-1 italic">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-1 mb-3">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-henzai-terracota text-henzai-terracota" />
                        ))}
                      </div>
                      <div>
                        <p className="font-libre-franklin font-bold text-foreground">{t.name}</p>
                        <p className="font-gantari text-sm text-muted-foreground">{t.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-henzai-blue text-henzai-blue hover:bg-henzai-blue hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 border-henzai-blue text-henzai-blue hover:bg-henzai-blue hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
