import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbCiLaBokkDataSource} from '../datasources';
import {Investissement, InvestissementRelations} from '../models';

export class InvestissementRepository extends DefaultCrudRepository<
  Investissement,
  typeof Investissement.prototype.id,
  InvestissementRelations
> {
  constructor(
    @inject('datasources.dbCiLaBokk') dataSource: DbCiLaBokkDataSource,
  ) {
    super(Investissement, dataSource);
  }
}
