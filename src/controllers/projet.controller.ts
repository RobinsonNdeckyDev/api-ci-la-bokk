import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Projet} from '../models';
import {ProjetRepository} from '../repositories';

export class ProjetController {
  constructor(
    @repository(ProjetRepository)
    public projetRepository : ProjetRepository,
  ) {}

  @post('/projets')
  @response(200, {
    description: 'Projet model instance',
    content: {'application/json': {schema: getModelSchemaRef(Projet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Projet, {
            title: 'NewProjet',
            exclude: ['id'],
          }),
        },
      },
    })
    projet: Omit<Projet, 'id'>,
  ): Promise<Projet> {
    return this.projetRepository.create(projet);
  }

  @get('/projets/count')
  @response(200, {
    description: 'Projet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Projet) where?: Where<Projet>,
  ): Promise<Count> {
    return this.projetRepository.count(where);
  }

  @get('/projets')
  @response(200, {
    description: 'Array of Projet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Projet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Projet) filter?: Filter<Projet>,
  ): Promise<Projet[]> {
    return this.projetRepository.find(filter);
  }

  @patch('/projets')
  @response(200, {
    description: 'Projet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Projet, {partial: true}),
        },
      },
    })
    projet: Projet,
    @param.where(Projet) where?: Where<Projet>,
  ): Promise<Count> {
    return this.projetRepository.updateAll(projet, where);
  }

  @get('/projets/{id}')
  @response(200, {
    description: 'Projet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Projet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Projet, {exclude: 'where'}) filter?: FilterExcludingWhere<Projet>
  ): Promise<Projet> {
    return this.projetRepository.findById(id, filter);
  }

  @patch('/projets/{id}')
  @response(204, {
    description: 'Projet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Projet, {partial: true}),
        },
      },
    })
    projet: Projet,
  ): Promise<void> {
    await this.projetRepository.updateById(id, projet);
  }

  @put('/projets/{id}')
  @response(204, {
    description: 'Projet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() projet: Projet,
  ): Promise<void> {
    await this.projetRepository.replaceById(id, projet);
  }

  @del('/projets/{id}')
  @response(204, {
    description: 'Projet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.projetRepository.deleteById(id);
  }
}
