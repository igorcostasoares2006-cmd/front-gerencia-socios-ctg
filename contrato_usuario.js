import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { FileText, Plus, Trash2, Printer } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { DadosContrato, DependenteDancarino } from '../types/contrato';

export function ContratoSocio() {
  const [showPreview, setShowPreview] = useState(false);
  const [dados, setDados] = useState<DadosContrato>({
    nome: '',
    telefone: '',
    cpf: '',
    rg: '',
    endereco: {
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
    },
    dependentes: [],
    dataContrato: new Date().toLocaleDateString('pt-BR'),
  });

  const contratoRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => contratoRef.current,
  });

  const addDependente = () => {
    setDados({
      ...dados,
      dependentes: [
        ...dados.dependentes,
        { nome: '', cpf: '', rg: '', dataNascimento: '' },
      ],
    });
  };

  const removeDependente = (index: number) => {
    setDados({
      ...dados,
      dependentes: dados.dependentes.filter((_, i) => i !== index),
    });
  };

  const updateDependente = (index: number, field: keyof DependenteDancarino, value: string) => {
    const newDependentes = [...dados.dependentes];
    newDependentes[index] = { ...newDependentes[index], [field]: value };
    setDados({ ...dados, dependentes: newDependentes });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPreview(true);
  };

  if (showPreview) {
    return (
      <div className="p-8">
        <div className="mb-6 flex gap-3">
          <Button onClick={() => setShowPreview(false)} variant="outline">
            Voltar ao Formulário
          </Button>
          <Button onClick={handlePrint} className="gap-2">
            <Printer size={20} />
            Imprimir Contrato
          </Button>
        </div>

        {/* Contrato para impressão */}
        <div ref={contratoRef} className="bg-white p-12 max-w-4xl mx-auto shadow-lg print:shadow-none">
          <style>
            {`
              @media print {
                body * {
                  visibility: hidden;
                }
                .print-area, .print-area * {
                  visibility: visible;
                }
                .print-area {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                }
                @page {
                  margin: 2cm;
                }
              }
            `}
          </style>
          <div className="print-area">
            <h1 className="text-center text-2xl font-bold mb-8">CONTRATO DE SOCIEDADE</h1>

            <p className="text-justify mb-6 leading-relaxed">
              Pelo presente instrumento particular, <strong>{dados.nome || '____________________'}</strong>{' '}
              Fone: <strong>{dados.telefone || '____________________'}</strong>{' '}
              CPF: <strong>{dados.cpf || '____________________'}</strong>,{' '}
              RG: <strong>{dados.rg || '____________________'}</strong> residente e domiciliado na{' '}
              Rua: <strong>{dados.endereco.rua || '____________________'}</strong>{' '}
              Nº <strong>{dados.endereco.numero || '____'}</strong>{' '}
              Bairro: <strong>{dados.endereco.bairro || '____________________'}</strong>,{' '}
              cidade <strong>{dados.endereco.cidade || '____________________'}</strong>/RS,{' '}
              associa-se ao <strong>CENTRO DE TRADIÇÕES RAÍZES DA TRADIÇÃO</strong>,{' '}
              inscrito no CNPJ 74.870.676/0001-72 Endereço: Rua Júlio Rosa, 361,{' '}
              Bairro: Centro de Charqueadas/RS- CEP 96745-000.
            </p>

            {dados.dependentes.length > 0 && (
              <div className="mb-6">
                {dados.dependentes.map((dep, idx) => (
                  <p key={idx} className="mb-2">
                    <strong>Dependente dançarino:</strong> {dep.nome || '____________________'},{' '}
                    CPF: {dep.cpf || '____________________'}{' '}
                    ID: {dep.rg || '____________________'}{' '}
                    DN: {dep.dataNascimento ? new Date(dep.dataNascimento).toLocaleDateString('pt-BR') : '____________________'}
                  </p>
                ))}
              </div>
            )}

            <h2 className="text-lg font-bold mt-8 mb-4">Cláusulas</h2>

            <div className="space-y-4 text-justify leading-relaxed">
              <p>
                <strong>Cláusula 1ª</strong> - O objetivo desta sociedade é a utilização dos serviços do CTG Raízes da Tradição,
                que inclui aluguel do salão, participação nas invernadas, desconto nos valores dos ingressos dos bailes,
                participação em Rodeios, entre outros.
              </p>

              <p>
                <strong>Cláusula 2ª</strong> - Os valores de Capital são mensais. Mensalidade dos Sócios R$25,00 e mensalidade de
                instrutor de invernada R$40,00 por dançarino e poderão sofrer reajuste anual, caso necessário. Para novos
                associados será cobrado um adiantamento de 4 meses, totalizando ($100,00), e no quinto mês valor mensal a
                somar com a mensalidade do instrutor $65,00.
              </p>

              <div className="ml-6 space-y-2">
                <p>
                  <strong>I</strong> – Dependentes completando a maior idade, automaticamente deve preencher o contrato da sociedade.
                </p>
                <p>
                  <strong>II</strong> – <strong>Inadimplência</strong> Com 2(dois) meses consecutivos de inadimplência, o sócio e
                  seus dependentes ficam automaticamente impedidos de participar dos ensaios e rodeios, atividades das invernadas
                  e demais serviços disponibilizados pela entidade, até a regularização total dos débitos.
                </p>
                <p>
                  <strong>III</strong> – Com 8 (oito) meses consecutivos, conforme estatuto, o sócio será automaticamente excluído
                  da sociedade, sem necessidade de notificação prévia perdendo todos os direitos de associados. A reintegração
                  somente será possível mediante o pagamento dos débitos existentes.
                </p>
                <p>
                  <strong>IV</strong> – Liberação do cartão Tradicionalista. Após a comunicação do sócio de seu desligamento da
                  sociedade, o patrão assinará uma carta de liberação do mesmo. Essa carta só poderá ser entregue ao sócio mediante
                  a quitação de seus débitos na entidade (sociedade, instrutor, invernada).
                </p>
              </div>

              <p>
                Aluguel de Salão será cobrado para Sócios R$350,00 e não sócios R$ 660,00 esses valores já estão incluídos a taxa
                de limpeza e gás. Esses valores são cobrados para a utilização de toda a estrutura do galpão com exceção do bolicho.
                Para aluguéis como: chá de fraudas, reuniões de terceiros o valor deverá ser analisado pelo patrão da entidade.
                As regras estarão no contrato de locação no ato da assinatura.
              </p>

              <p>
                As idas aos Rodeios serão de inteira responsabilidade dos pais e responsáveis pelos dançarinos e a instituição se
                reserva o direito de escolher e alugar os ônibus, alojamentos para este fim, repassando os valores individuais de
                cada dançarino e acompanhante.
              </p>

              <p>
                <strong>Cláusula 3ª</strong> – Cada integrante deverá ser portador da carteira tradicionalista – MTG, para poder
                participar de eventos dentro do estado, o valor do cartão tradicionalista é pago pelo dançarino atualmente o valor
                é $60,00, podendo ter reajustes, a informação vem do coordenador da região. Caberá ao coordenador da invernada,
                informar a secretaria e/ou patrão da entidade a necessidade de realizar o pedido do mesmo.
              </p>

              <p>
                <strong>Cláusula 4ª</strong> – O prazo de duração da sociedade será por tempo indeterminado.
              </p>

              <p>
                <strong>Cláusula 5ª</strong> - No caso do sócio desejar retirar-se da Sociedade, deverá estar em dia com as
                mensalidades e notificar a instituição, no papel de Patrão(a), com antecedência de 30 dias.
              </p>

              <p>
                <strong>Cláusula 6ª</strong> - O sócio responsável pelos dançarinos informado acima, autoriza o uso de imagem para
                compor materiais como apresentações em rodeios, eventos internos da entidade, destinadas ao público em geral e/ou
                apenas para uso interno da CTG Raízes da Tradição, desde que não haja desvirtuamento da sua finalidade.
              </p>

              <p>
                <strong>Parágrafo Único:</strong> Os valores mencionados na cláusula 2ª poderão ser reajustados de acordo com a
                vontade vigente da atual patronagem. Os reajustes de mensalidades, será comunicado com antecedência em reunião de sócios.
              </p>
            </div>

            <div className="mt-12">
              <p className="mb-16">
                Charqueadas/RS, {dados.dataContrato}
              </p>

              <div className="flex justify-between items-end mt-20">
                <div className="text-center">
                  <div className="border-t border-black w-64 mb-2"></div>
                  <p className="font-semibold">Elisandra A. Silveira</p>
                  <p>Patroa</p>
                </div>
                <div className="text-center">
                  <div className="border-t border-black w-64 mb-2"></div>
                  <p>Sócio(a)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">Gerar Contrato de Sociedade</h1>
        <p className="text-gray-600 mt-1">Preencha os dados para gerar o contrato</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6 max-w-4xl">
          {/* Dados do Sócio */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText size={24} />
                Dados do Sócio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome Completo *</Label>
                  <Input
                    id="nome"
                    value={dados.nome}
                    onChange={(e) => setDados({ ...dados, nome: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone *</Label>
                  <Input
                    id="telefone"
                    value={dados.telefone}
                    onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cpf">CPF *</Label>
                  <Input
                    id="cpf"
                    value={dados.cpf}
                    onChange={(e) => setDados({ ...dados, cpf: e.target.value })}
                    placeholder="000.000.000-00"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="rg">RG *</Label>
                  <Input
                    id="rg"
                    value={dados.rg}
                    onChange={(e) => setDados({ ...dados, rg: e.target.value })}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Endereço */}
          <Card>
            <CardHeader>
              <CardTitle>Endereço</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="rua">Rua *</Label>
                  <Input
                    id="rua"
                    value={dados.endereco.rua}
                    onChange={(e) =>
                      setDados({ ...dados, endereco: { ...dados.endereco, rua: e.target.value } })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="numero">Número *</Label>
                  <Input
                    id="numero"
                    value={dados.endereco.numero}
                    onChange={(e) =>
                      setDados({ ...dados, endereco: { ...dados.endereco, numero: e.target.value } })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="bairro">Bairro *</Label>
                  <Input
                    id="bairro"
                    value={dados.endereco.bairro}
                    onChange={(e) =>
                      setDados({ ...dados, endereco: { ...dados.endereco, bairro: e.target.value } })
                    }
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cidade">Cidade *</Label>
                  <Input
                    id="cidade"
                    value={dados.endereco.cidade}
                    onChange={(e) =>
                      setDados({ ...dados, endereco: { ...dados.endereco, cidade: e.target.value } })
                    }
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dependentes Dançarinos */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Dependentes Dançarinos</CardTitle>
                <Button type="button" onClick={addDependente} size="sm" className="gap-2">
                  <Plus size={16} />
                  Adicionar Dependente
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {dados.dependentes.length === 0 ? (
                <p className="text-gray-500 text-center py-4">
                  Nenhum dependente adicionado. Clique em "Adicionar Dependente" para incluir.
                </p>
              ) : (
                dados.dependentes.map((dep, index) => (
                  <div key={index} className="border rounded-lg p-4 relative">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeDependente(index)}
                      className="absolute top-2 right-2 text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={16} />
                    </Button>
                    <h4 className="font-semibold mb-4">Dependente {index + 1}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor={`dep-nome-${index}`}>Nome Completo</Label>
                        <Input
                          id={`dep-nome-${index}`}
                          value={dep.nome}
                          onChange={(e) => updateDependente(index, 'nome', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`dep-cpf-${index}`}>CPF</Label>
                        <Input
                          id={`dep-cpf-${index}`}
                          value={dep.cpf}
                          onChange={(e) => updateDependente(index, 'cpf', e.target.value)}
                          placeholder="000.000.000-00"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`dep-rg-${index}`}>RG/ID</Label>
                        <Input
                          id={`dep-rg-${index}`}
                          value={dep.rg}
                          onChange={(e) => updateDependente(index, 'rg', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`dep-dn-${index}`}>Data de Nascimento</Label>
                        <Input
                          id={`dep-dn-${index}`}
                          type="date"
                          value={dep.dataNascimento}
                          onChange={(e) => updateDependente(index, 'dataNascimento', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>

          {/* Data do Contrato */}
          <Card>
            <CardHeader>
              <CardTitle>Data do Contrato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-w-xs">
                <Label htmlFor="dataContrato">Data</Label>
                <Input
                  id="dataContrato"
                  value={dados.dataContrato}
                  onChange={(e) => setDados({ ...dados, dataContrato: e.target.value })}
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end">
            <Button type="submit" size="lg" className="gap-2">
              <FileText size={20} />
              Gerar Prévia do Contrato
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
