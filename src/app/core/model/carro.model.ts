export class Carro {

  private _id: number;
  private _nome: string;
  private _marca: string;

  constructor(id: number, nome: string, marca: string) {
    this._id = id;
    this._nome = nome;
    this._marca = marca;
  }

  get nome(): string {
    return this._nome;
  }
  set nome(value: string) {
    this._nome = value;
  }

  get marca(): string {
    return this._marca;
  }
  set marca(value: string) {
    this._marca = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
