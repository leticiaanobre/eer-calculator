interface UserData {
    idade: number;
    peso: number;
    altura: number;
    sexo: number; // 1 para Homem, 2 para Mulher
    NAF: number; // 1-Sedentário, 2-Pouco Ativo, 3-Ativo, 4-Muito Ativo
  }
  
  function calcularEER({ idade, peso, altura, sexo, NAF }: UserData): number {
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
  }
  
export { calcularEER };
    export type { UserData };
  