import {Entity, model, property} from '@loopback/repository';

@model()
export class ProjetTest extends Entity {
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
  nomProjet: string;

  @property({
    type: 'string',
    required: true,
  })
  categorieProjet: string;


  constructor(data?: Partial<ProjetTest>) {
    super(data);
  }
}

export interface ProjetTestRelations {
  // describe navigational properties here
}

export type ProjetTestWithRelations = ProjetTest & ProjetTestRelations;
