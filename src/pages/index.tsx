import { useState } from "react";
import { Activity, HeartPulse } from 'lucide-react';
import { UserData } from "./utils/UserData";

const Home = () => {
  const [formData, setFormData] = useState({
    idade: "",
    peso: "",
    altura: "",
    sexo: "1",
    NAF: "1"
  });
  const [result, setResult] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { idade, peso, altura, sexo, NAF } = formData;

    const eer = calcularEER({
      idade: parseInt(idade),
      peso: parseFloat(peso),
      altura: parseFloat(altura),
      sexo: parseInt(sexo),
      NAF: parseInt(NAF),
    });

    setResult(eer);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full min-h-screen flex flex-col justify-center">
        <div className='flex flec-row gap-4'>
          <h1 className="text-2xl text-secondary font-semibold mb-6">
            Calcule seu <strong className='font-bold text-primary'> Gasto Calórico Diário (EER)</strong>
          </h1>
          <div className="flex justify-center mb-6">
            <Activity className="text-primary" strokeWidth={1.5} size={80} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-row justify-between gap-6'>
            <div className="mb-4">
              <label className="block mb-2 text-gray">Idade</label>
              <input
                type="number"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-secondary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray">Peso (kg)</label>
              <input
                type="number"
                name="peso"
                value={formData.peso}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-secondary"
                required
              />
            </div>
          </div>
          <div className='flex flex-row justify-between gap-6'>
            <div className="mb-4 w-full">
              <label className="block mb-2 text-gray">Altura (m)</label>
              <input
                type="number"
                name="altura"
                value={formData.altura}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-secondary"
                required
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-2 text-gray">Sexo</label>
              <select
                name="sexo"
                value={formData.sexo}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded text-secondary"
                required
              >
                <option value="1">Homem</option>
                <option value="2">Mulher</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray">Nível de Atividade Física</label>
            <select
              name="NAF"
              value={formData.NAF}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-secondary"
              required
            >
              <option value="1">Sedentário</option>
              <option value="2">Pouco Ativo</option>
              <option value="3">Ativo</option>
              <option value="4">Muito Ativo</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-green-600 transition duration-200"
          >
            Calcular
          </button>
        </form>
        {result !== null && (
          <div className="mt-6 text-center flex flex-col gap-4 justify-center items-center">
            <h2 className="text-xl font-normal text-gray">Sua necessidade energética diária (EER) é:</h2>
            <div className='bg-greenColor rounded-xl p-4 w-3/5 flex flex-col align-center'>
              <p className="text-2xl text-textColor font-semibold">{result.toFixed(2)} kcal</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const calcularEER = ({ idade, peso, altura, sexo, NAF }: UserData): number => {
  let PA: number;
  let EER: number;

  if (sexo === 1) {
    PA = NAF === 1 ? 1 : NAF === 2 ? 1.11 : NAF === 3 ? 1.25 : 1.48;
  } else {
    PA = NAF === 1 ? 1 : NAF === 2 ? 1.12 : NAF === 3 ? 1.27 : 1.45;
  }

  if (sexo === 1) {
    EER = 662 - 9.53 * idade + PA * (15.91 * peso + 539.6 * altura);
  } else {
    EER = 354 - 6.91 * idade + PA * (9.36 * peso + 726 * altura);
  }

  return EER;
};

export default Home;
