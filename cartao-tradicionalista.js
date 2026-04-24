import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CreditCard, Printer } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { FichaCartaoTradicionalistaData } from '../types/cartaoTradicionalistsa';

export function CartaoTradicionalistaFicha() {
  const [showPreview, setShowPreview] = useState(false);
  const [dados, setDados] = useState<FichaCartaoTradicionalistaData>({
    nomeAssociado: '',
    rt: '',
    endereco: {
      rua: '',
      bairro: '',
      cep: '',
      cidade: '',
      uf: 'RS',
    },
    rgOuCertidao: '',
    cpf: '',
    dataNascimento: '',
    telefone: '',
    nomeEntidadeFiliada: 'CTG Raízes da Tradição',
    nomePiqueteDependente: '',
    matricula: '',
    categoriaOuFuncao: '',
    validade: '',
    nomePatrao: 'Elisandra A. Silveira',
  });

  const fichaRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => fichaRef.current,
  });

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
            Imprimir Ficha
          </Button>
        </div>

        {/* Ficha para impressão */}
        <div ref={fichaRef} className="bg-white p-12 max-w-4xl mx-auto shadow-lg print:shadow-none">
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
          <div className="print-area space-y-4">
            <h1 className="text-center text-xl font-bold mb-6 uppercase">
              Ficha de Pedido do Cartão Tradicionalista
            </h1>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="col-span-1">
                <p>
                  <strong>Nome do Associado:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[300px]">
                    {dados.nomeAssociado || '______________________________'}
                  </span>
                </p>
              </div>
              <div className="col-span-1">
                <p>
                  <strong>RT:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[200px]">
                    {dados.rt || '______________________'}
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div className="col-span-1">
                <p>
                  <strong>Endereço:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[250px]">
                    {dados.endereco.rua || '______________________________'}
                  </span>
                </p>
              </div>
              <div className="col-span-1">
                <p>
                  <strong>Bairro:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[200px]">
                    {dados.endereco.bairro || '______________________'}
                  </span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
              <div>
                <p>
                  <strong>CEP:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[120px]">
                    {dados.endereco.cep || '______________'}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <strong>Cidade:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[150px]">
                    {dados.endereco.cidade || '________________'}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <strong>UF:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[60px]">
                    {dados.endereco.uf || '______'}
                  </span>
                </p>
              </div>
            </div>

            <div>
              <p>
                <strong>Nº RG ou Certidão de Nascimento:</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[300px]">
                  {dados.rgOuCertidao || '______________________________'}
                </span>
              </p>
            </div>

            <div>
              <p>
                <strong>Nº CPF (obrigatório, independente da idade):</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[250px]">
                  {dados.cpf || '______________________________'}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <p>
                  <strong>Data de Nascimento:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[150px]">
                    {dados.dataNascimento ? new Date(dados.dataNascimento).toLocaleDateString('pt-BR') : '____ / ____ / ________'}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <strong>Fone de Contato:</strong>{' '}
                  <span className="border-b border-gray-400 inline-block min-w-[180px]">
                    {dados.telefone || '______________________'}
                  </span>
                </p>
              </div>
            </div>

            <div>
              <p>
                <strong>Nome da Entidade Filiada:</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[350px]">
                  {dados.nomeEntidadeFiliada || '______________________________'}
                </span>
              </p>
            </div>

            <div>
              <p>
                <strong>Nome do Piquete Dependente: (se for o caso):</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[300px]">
                  {dados.nomePiqueteDependente || '______________________________'}
                </span>
              </p>
            </div>

            <div>
              <p>
                <strong>Matrícula: (Número de ordem dentro do CTG):</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[250px]">
                  {dados.matricula || '______________________________'}
                </span>
              </p>
            </div>

            <div>
              <p>
                <strong>Categoria (Titular ou Dependente) ou Função (Patrão ou Capataz):</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[250px]">
                  {dados.categoriaOuFuncao || '______________________________'}
                </span>
              </p>
            </div>

            <div>
              <p className="mb-2">
                <strong>Validade:</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[200px]">
                  {dados.validade || '______________________________'}
                </span>
              </p>
              <p className="text-sm text-gray-600 italic">
                (quando a pessoa exercer uma função, a validade deverá coincidir com o término da gestão / Sócio coincide com o fim do mandato do Patrão ou será com validade máxima de dois anos, fica a critério do Patrão)
              </p>
            </div>

            <div className="mt-8">
              <p>
                <strong>Nome do Patrão:</strong>{' '}
                <span className="border-b border-gray-400 inline-block min-w-[350px]">
                  {dados.nomePatrao || '______________________________'}
                </span>
              </p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="border-t border-black pt-2 mt-12">
                  <p className="text-sm">Assinatura do Patrão</p>
                </div>
              </div>
              <div className="text-center">
                <div className="border-t border-black pt-2 mt-12">
                  <p className="text-sm">Assinatura do Sócio</p>
                </div>
              </div>
              <div className="text-center">
                <div className="border-t border-black pt-2 mt-12">
                  <p className="text-sm">Visto do Coordenador Regional</p>
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
        <h1 className="text-3xl font-semibold text-gray-900">Ficha do Cartão Tradicionalista</h1>
        <p className="text-gray-600 mt-1">Preencha os dados para solicitar o cartão tradicionalista MTG</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6 max-w-4xl">
          {/* Dados Pessoais */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard size={24} />
                Dados Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nomeAssociado">Nome do Associado *</Label>
                  <Input
                    id="nomeAssociado"
                    value={dados.nomeAssociado}
                    onChange={(e) => setDados({ ...dados, nomeAssociado: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="rt">RT (Registro Tradicionalista)</Label>
                  <Input
                    id="rt"
                    value={dados.rt}
                    onChange={(e) => setDados({ ...dados, rt: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="rgOuCertidao">RG ou Certidão de Nascimento *</Label>
                  <Input
                    id="rgOuCertidao"
                    value={dados.rgOuCertidao}
                    onChange={(e) => setDados({ ...dados, rgOuCertidao: e.target.value })}
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
                  <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                  <Input
                    id="dataNascimento"
                    type="date"
                    value={dados.dataNascimento}
                    onChange={(e) => setDados({ ...dados, dataNascimento: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone de Contato *</Label>
                  <Input
                    id="telefone"
                    value={dados.telefone}
                    onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
                    placeholder="(00) 00000-0000"
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
                  <Label htmlFor="rua">Endereço *</Label>
                  <Input
                    id="rua"
                    value={dados.endereco.rua}
                    onChange={(e) =>
                      setDados({ ...dados, endereco: { ...dados.endereco, rua: e.target.value } })
                    }
                    placeholder="Rua, Avenida, número"
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
                  <Label htmlFor="cep">CEP *</Label>
                  <Input
                    id="cep"
                    value={dados.endereco.cep}
                    onChange={(e) =>
                      setDados({ ...dados, endereco: { ...dados.endereco, cep: e.target.value } })
                    }
                    placeholder="00000-000"
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
                <div>
                  <Label htmlFor="uf">UF *</Label>
                  <Input
                    id="uf"
                    value={dados.endereco.uf}
                    onChange={(e) =>
                      setDados({ ...dados, endereco: { ...dados.endereco, uf: e.target.value.toUpperCase() } })
                    }
                    maxLength={2}
                    placeholder="RS"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dados da Associação */}
          <Card>
            <CardHeader>
              <CardTitle>Dados da Associação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="nomeEntidadeFiliada">Nome da Entidade Filiada *</Label>
                  <Input
                    id="nomeEntidadeFiliada"
                    value={dados.nomeEntidadeFiliada}
                    onChange={(e) => setDados({ ...dados, nomeEntidadeFiliada: e.target.value })}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="nomePiqueteDependente">Nome do Piquete Dependente (se for o caso)</Label>
                  <Input
                    id="nomePiqueteDependente"
                    value={dados.nomePiqueteDependente}
                    onChange={(e) => setDados({ ...dados, nomePiqueteDependente: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="matricula">Matrícula (Número de ordem dentro do CTG) *</Label>
                  <Input
                    id="matricula"
                    value={dados.matricula}
                    onChange={(e) => setDados({ ...dados, matricula: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="categoriaOuFuncao">Categoria ou Função *</Label>
                  <Select 
                    value={dados.categoriaOuFuncao} 
                    onValueChange={(value) => setDados({ ...dados, categoriaOuFuncao: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Titular">Titular</SelectItem>
                      <SelectItem value="Dependente">Dependente</SelectItem>
                      <SelectItem value="Patrão">Patrão</SelectItem>
                      <SelectItem value="Capataz">Capataz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="validade">Validade *</Label>
                  <Input
                    id="validade"
                    type="date"
                    value={dados.validade}
                    onChange={(e) => setDados({ ...dados, validade: e.target.value })}
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Máximo de 2 anos ou fim da gestão
                  </p>
                </div>
                <div>
                  <Label htmlFor="nomePatrao">Nome do Patrão *</Label>
                  <Input
                    id="nomePatrao"
                    value={dados.nomePatrao}
                    onChange={(e) => setDados({ ...dados, nomePatrao: e.target.value })}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-end">
            <Button type="submit" size="lg" className="gap-2">
              <CreditCard size={20} />
              Gerar Prévia da Ficha
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
