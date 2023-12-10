import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbCiLaBokkDataSource} from '../datasources';
import {Projet, ProjetRelations} from '../models';

export class ProjetRepository extends DefaultCrudRepository<
  Projet,
  typeof Projet.prototype.id,
  ProjetRelations
> {
  constructor(
    @inject('datasources.dbCiLaBokk') dataSource: DbCiLaBokkDataSource,
  ) {
    super(Projet, dataSource);
  }
}
