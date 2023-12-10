import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbCiLaBokkDataSource} from '../datasources';
import {ProjetTest, ProjetTestRelations} from '../models';

export class ProjetTestRepository extends DefaultCrudRepository<
  ProjetTest,
  typeof ProjetTest.prototype.id,
  ProjetTestRelations
> {
  constructor(
    @inject('datasources.dbCiLaBokk') dataSource: DbCiLaBokkDataSource,
  ) {
    super(ProjetTest, dataSource);
  }
}
