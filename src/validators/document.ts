import { cpf, cnpj } from 'cpf-cnpj-validator';

class DocumentValidator {
  public isValid(document: string) {
    try {
      if (document.length === 14) return cnpj.isValid(document);
      if (document.length === 11) return cpf.isValid(document);
      return false;
    } catch {
      return false;
    }
  }
}

export default new DocumentValidator();
