import {Entity, model, property} from '@loopback/repository';

@model()
export class Projet extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
  })
  photo?: string;

  @property({
    type: 'string',
  })
  objectif?: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  echeance: string;

  @property({
    type: 'string',
    required: true,
  })
  budget: string;

  @property({
    type: 'string',
    required: true,
  })
  categorie: string;

  @property({
    type: 'string',
  })
  etat?: string;


  constructor(data?: Partial<Projet>) {
    super(data);
  }
}

export interface ProjetRelations {
  // describe navigational properties here
}

export type ProjetWithRelations = Projet & ProjetRelations;
