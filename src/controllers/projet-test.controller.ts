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
import {ProjetTest} from '../models';
import {ProjetTestRepository} from '../repositories';

export class ProjetTestController {
  constructor(
    @repository(ProjetTestRepository)
    public projetTestRepository : ProjetTestRepository,
  ) {}

  @post('/projet-tests')
  @response(200, {
    description: 'ProjetTest model instance',
    content: {'application/json': {schema: getModelSchemaRef(ProjetTest)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjetTest, {
            title: 'NewProjetTest',
            exclude: ['id'],
          }),
        },
      },
    })
    projetTest: Omit<ProjetTest, 'id'>,
  ): Promise<ProjetTest> {
    return this.projetTestRepository.create(projetTest);
  }

  @get('/projet-tests/count')
  @response(200, {
    description: 'ProjetTest model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ProjetTest) where?: Where<ProjetTest>,
  ): Promise<Count> {
    return this.projetTestRepository.count(where);
  }

  @get('/projet-tests')
  @response(200, {
    description: 'Array of ProjetTest model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ProjetTest, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ProjetTest) filter?: Filter<ProjetTest>,
  ): Promise<ProjetTest[]> {
    return this.projetTestRepository.find(filter);
  }

  @patch('/projet-tests')
  @response(200, {
    description: 'ProjetTest PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjetTest, {partial: true}),
        },
      },
    })
    projetTest: ProjetTest,
    @param.where(ProjetTest) where?: Where<ProjetTest>,
  ): Promise<Count> {
    return this.projetTestRepository.updateAll(projetTest, where);
  }

  @get('/projet-tests/{id}')
  @response(200, {
    description: 'ProjetTest model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ProjetTest, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ProjetTest, {exclude: 'where'}) filter?: FilterExcludingWhere<ProjetTest>
  ): Promise<ProjetTest> {
    return this.projetTestRepository.findById(id, filter);
  }

  @patch('/projet-tests/{id}')
  @response(204, {
    description: 'ProjetTest PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ProjetTest, {partial: true}),
        },
      },
    })
    projetTest: ProjetTest,
  ): Promise<void> {
    await this.projetTestRepository.updateById(id, projetTest);
  }

  @put('/projet-tests/{id}')
  @response(204, {
    description: 'ProjetTest PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() projetTest: ProjetTest,
  ): Promise<void> {
    await this.projetTestRepository.replaceById(id, projetTest);
  }

  @del('/projet-tests/{id}')
  @response(204, {
    description: 'ProjetTest DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.projetTestRepository.deleteById(id);
  }
}
