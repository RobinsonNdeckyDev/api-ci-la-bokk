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
import {Investissement} from '../models';
import {InvestissementRepository} from '../repositories';

export class InvestissementControllerController {
  constructor(
    @repository(InvestissementRepository)
    public investissementRepository : InvestissementRepository,
  ) {}

  @post('/investissements')
  @response(200, {
    description: 'Investissement model instance',
    content: {'application/json': {schema: getModelSchemaRef(Investissement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Investissement, {
            title: 'NewInvestissement',
            exclude: ['id'],
          }),
        },
      },
    })
    investissement: Omit<Investissement, 'id'>,
  ): Promise<Investissement> {
    return this.investissementRepository.create(investissement);
  }

  @get('/investissements/count')
  @response(200, {
    description: 'Investissement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Investissement) where?: Where<Investissement>,
  ): Promise<Count> {
    return this.investissementRepository.count(where);
  }

  @get('/investissements')
  @response(200, {
    description: 'Array of Investissement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Investissement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Investissement) filter?: Filter<Investissement>,
  ): Promise<Investissement[]> {
    return this.investissementRepository.find(filter);
  }

  @patch('/investissements')
  @response(200, {
    description: 'Investissement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Investissement, {partial: true}),
        },
      },
    })
    investissement: Investissement,
    @param.where(Investissement) where?: Where<Investissement>,
  ): Promise<Count> {
    return this.investissementRepository.updateAll(investissement, where);
  }

  @get('/investissements/{id}')
  @response(200, {
    description: 'Investissement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Investissement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Investissement, {exclude: 'where'}) filter?: FilterExcludingWhere<Investissement>
  ): Promise<Investissement> {
    return this.investissementRepository.findById(id, filter);
  }

  @patch('/investissements/{id}')
  @response(204, {
    description: 'Investissement PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Investissement, {partial: true}),
        },
      },
    })
    investissement: Investissement,
  ): Promise<void> {
    await this.investissementRepository.updateById(id, investissement);
  }

  @put('/investissements/{id}')
  @response(204, {
    description: 'Investissement PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() investissement: Investissement,
  ): Promise<void> {
    await this.investissementRepository.replaceById(id, investissement);
  }

  @del('/investissements/{id}')
  @response(204, {
    description: 'Investissement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.investissementRepository.deleteById(id);
  }
}
