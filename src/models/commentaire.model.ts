import {Entity, model, property} from '@loopback/repository';

@model()
export class Commentaire extends Entity {
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
  titre: string;

  
  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  contenu: string;


  constructor(data?: Partial<Commentaire>) {
    super(data);
  }
}

export interface CommentaireRelations {
  // describe navigational properties here
}

export type CommentaireWithRelations = Commentaire & CommentaireRelations;
