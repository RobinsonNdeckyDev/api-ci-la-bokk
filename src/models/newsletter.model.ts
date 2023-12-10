import {Entity, model, property} from '@loopback/repository';

@model()
export class Newsletter extends Entity {
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
  email: string;


  constructor(data?: Partial<Newsletter>) {
    super(data);
  }
}

export interface NewsletterRelations {
  // describe navigational properties here
}

export type NewsletterWithRelations = Newsletter & NewsletterRelations;
