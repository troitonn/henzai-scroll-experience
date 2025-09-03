import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui seria implementada a lógica de envio do formulário
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "+55 00 0900-0900",
      subtitle: "Seg - Sex, 8h às 18h"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "henzaienergia.com.br",
      subtitle: "Resposta em até 24h"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Escritório",
      content: "São Paulo, SP",
      subtitle: "Atendimento nacional"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      content: "08:00 - 18:00",
      subtitle: "Segunda a Sexta"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-henzai-off-white to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-libre-franklin text-4xl md:text-5xl font-bold text-henzai-blue mb-6">
            Fale com Nossos Especialistas
          </h2>
          <p className="font-gantari text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar eficiência energética em crescimento para sua empresa? 
            Entre em contato e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <Card className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-slide-in">
            <CardContent className="p-8">
              <h3 className="font-libre-franklin text-2xl font-bold text-henzai-blue mb-6">
                Solicite uma Consultoria
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-gantari text-sm font-medium text-henzai-blue mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      className="rounded-xl border-border focus:ring-henzai-terracota focus:border-henzai-terracota"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-gantari text-sm font-medium text-henzai-blue mb-2">
                      E-mail *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="rounded-xl border-border focus:ring-henzai-terracota focus:border-henzai-terracota"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-gantari text-sm font-medium text-henzai-blue mb-2">
                      Empresa
                    </label>
                    <Input
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nome da empresa"
                      className="rounded-xl border-border focus:ring-henzai-terracota focus:border-henzai-terracota"
                    />
                  </div>
                  <div>
                    <label className="block font-gantari text-sm font-medium text-henzai-blue mb-2">
                      Telefone
                    </label>
                    <Input
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                      className="rounded-xl border-border focus:ring-henzai-terracota focus:border-henzai-terracota"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-gantari text-sm font-medium text-henzai-blue mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto e como podemos ajudar..."
                    rows={6}
                    className="rounded-xl border-border focus:ring-henzai-terracota focus:border-henzai-terracota resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full font-gantari font-semibold text-lg py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Solicitar Consultoria Gratuita
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h3 className="font-libre-franklin text-2xl font-bold text-henzai-blue mb-4">
                Informações de Contato
              </h3>
              <p className="font-gantari text-muted-foreground">
                Nossa equipe está pronta para atender você e desenvolver soluções 
                personalizadas para sua empresa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-henzai-terracota to-henzai-terracota/80 flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-libre-franklin font-semibold text-henzai-blue mb-1">
                          {info.title}
                        </h4>
                        <p className="font-gantari text-sm text-henzai-blue font-medium">
                          {info.content}
                        </p>
                        <p className="font-gantari text-xs text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-[var(--shadow-card)] bg-gradient-to-br from-henzai-blue to-henzai-blue/90">
              <CardContent className="p-8 text-white text-center">
                <h4 className="font-libre-franklin text-xl font-bold mb-4">
                  Consultoria Gratuita
                </h4>
                <p className="font-gantari mb-6 opacity-90">
                  Agende uma análise gratuita do seu perfil energético e descubra 
                  o potencial de economia da sua empresa.
                </p>
                <Button 
                  variant="secondary"
                  className="font-gantari font-semibold px-6 py-3 rounded-full"
                >
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;