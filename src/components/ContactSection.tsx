import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    gastoMensal: '',
    necessidade: ''
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

    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.empresa) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Formatar mensagem para WhatsApp
    const mensagem = `🏢 *NOVA SOLICITAÇÃO DE ANÁLISE ENERGÉTICA*

📋 *Dados do Cliente:*
• *Nome:* ${formData.nome}
• *Email:* ${formData.email}
• *Telefone:* ${formData.telefone}
• *Empresa:* ${formData.empresa}
${formData.gastoMensal ? `• *Gasto Mensal com Energia:* ${formData.gastoMensal}` : ''}

💡 *Necessidade:*
${formData.necessidade || 'Não informada'}

⚡ *Serviços Solicitados:*
• Análise do consumo atual
• Simulação de economia
• Cálculo de ROI detalhado  
• Proposta personalizada

📅 *Data da Solicitação:* ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`;

    // Número do WhatsApp da empresa
    const numeroWhatsApp = "5511981666019"; // ✅ número atualizado

    // Codificar mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Abrir WhatsApp Web ou app
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(urlWhatsApp, '_blank');

    // Mostrar toast de sucesso
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Sua mensagem foi formatada e você será redirecionado para o WhatsApp."
    });

    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      gastoMensal: '',
      necessidade: ''
    });
  };

  return (
    <section
      id="contato"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/5f2618e2-094e-4644-a524-958b491698d3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-[#0F2D3A] bg-opacity-85"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-libre-franklin font-bold text-white mb-6">
            Transforme sua Empresa <span className="text-henzai-terracota">Hoje Mesmo</span>
          </h2>
          <p className="text-lg font-gantari text-henzai-off-white max-w-3xl mx-auto">
            Solicite sua análise energética gratuita e descubra como economizar milhares de reais por mês
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border-0">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-libre-franklin font-bold text-henzai-blue mb-8">
                  Solicite sua Análise Gratuita
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-gantari font-medium text-henzai-blue mb-2">
                        Nome Completo *
                      </label>
                      <Input
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="bg-henzai-off-white border-0 text-henzai-black placeholder:text-henzai-black/50 rounded-full px-6 py-3 focus:ring-2 focus:ring-henzai-terracota apple-focus"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-gantari font-medium text-henzai-blue mb-2">
                        E-mail Corporativo *
                      </label>
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seuemail@empresa.com.br"
                        type="email"
                        className="bg-henzai-off-white border-0 text-henzai-black placeholder:text-henzai-black/50 rounded-full px-6 py-3 focus:ring-2 focus:ring-henzai-terracota apple-focus"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-gantari font-medium text-henzai-blue mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <Input
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        className="bg-henzai-off-white border-0 text-henzai-black placeholder:text-henzai-black/50 rounded-full px-6 py-3 focus:ring-2 focus:ring-henzai-terracota apple-focus"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-gantari font-medium text-henzai-blue mb-2">
                        Empresa *
                      </label>
                      <Input
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        placeholder="Nome da sua empresa"
                        className="bg-henzai-off-white border-0 text-henzai-black placeholder:text-henzai-black/50 rounded-full px-6 py-3 focus:ring-2 focus:ring-henzai-terracota apple-focus"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-gantari font-medium text-henzai-blue mb-2">
                      Gasto Mensal com Energia Elétrica
                    </label>
                    <Input
                      name="gastoMensal"
                      value={formData.gastoMensal}
                      onChange={handleInputChange}
                      placeholder="Ex: R$ 15.000,00"
                      className="bg-henzai-off-white border-0 text-henzai-black placeholder:text-henzai-black/50 rounded-full px-6 py-3 focus:ring-2 focus:ring-henzai-terracota apple-focus"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-gantari font-medium text-henzai-blue mb-2">
                      Conte-nos sobre sua necessidade
                    </label>
                    <Textarea
                      name="necessidade"
                      value={formData.necessidade}
                      onChange={handleInputChange}
                      placeholder="Descreva seu projeto, expectativas de economia, prazo desejado ou qualquer informação relevante..."
                      className="bg-henzai-off-white border-0 text-henzai-black placeholder:text-henzai-black/50 rounded-3xl px-6 py-4 min-h-32 focus:ring-2 focus:ring-henzai-terracota apple-focus"
                    />
                  </div>

                  <div className="bg-henzai-terracota/10 rounded-3xl p-6">
                    <h4 className="font-libre-franklin font-bold text-henzai-blue mb-3">
                      O que você receberá gratuitamente:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-henzai-terracota flex-shrink-0" />
                        <span className="text-sm font-gantari text-henzai-black">Análise do consumo atual</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-henzai-terracota flex-shrink-0" />
                        <span className="text-sm font-gantari text-henzai-black">Simulação de economia</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-henzai-terracota flex-shrink-0" />
                        <span className="text-sm font-gantari text-henzai-black">Cálculo de ROI detalhado</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-henzai-terracota flex-shrink-0" />
                        <span className="text-sm font-gantari text-henzai-black">Proposta personalizada</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-henzai-terracota/90 hover:bg-henzai-terracota text-white font-gantari font-medium py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 glass-button backdrop-blur-md"
                  >
                    Enviar para WhatsApp
                  </Button>

                  <p className="text-xs font-gantari text-henzai-black/60 text-center">
                    Seus dados estão protegidos. Não compartilhamos informações com terceiros.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl rounded-3xl border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-libre-franklin font-bold text-henzai-blue mb-6">
                  Fale Diretamente Conosco
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-henzai-terracota rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-libre-franklin font-bold text-henzai-blue">WhatsApp</div>
                      <div className="font-gantari text-henzai-black">+55 11 97961-9109</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-henzai-terracota rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-libre-franklin font-bold text-henzai-blue">E-mail</div>
                      <div className="font-gantari text-henzai-black">contato@henzaienergia.com.br</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-henzai-terracota rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-libre-franklin font-bold text-henzai-blue">Atendimento</div>
                      <div className="font-gantari text-henzai-black">Segunda a Sexta: 8h às 18h</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-henzai-off-white">
                  <Button
                    onClick={() => {
                      const numeroWhatsApp = "5511979619109"; // ✅ número atualizado
                      const mensagem = "Olá! Gostaria de saber mais sobre as soluções energéticas da Henzai.";
                      const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
                      window.open(urlWhatsApp, '_blank');
                    }}
                    size="lg"
                    className="w-full bg-henzai-blue/90 hover:bg-henzai-blue text-white font-gantari font-medium py-3 rounded-full transition-all duration-300 glass-button backdrop-blur-md"
                  >
                    Chamar no WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-henzai-terracota to-[#A34F2E] shadow-xl rounded-3xl border-0"></Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
