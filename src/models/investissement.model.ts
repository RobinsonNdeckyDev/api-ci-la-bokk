import {Entity, model, property} from '@loopback/repository';

@model()
export class Investissement extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  montant: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
  })
  statut?: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;


  constructor(data?: Partial<Investissement>) {
    super(data);
  }
}

export interface InvestissementRelations {
  // describe navigational properties here
}

export type InvestissementWithRelations = Investissement & InvestissementRelations;
