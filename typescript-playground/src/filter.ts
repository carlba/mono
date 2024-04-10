import lodash from 'lodash';

export enum AclAction {
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
  TRAVERSE = 'TRAVERSE',
}

const acls = [
  { actions: [AclAction.READ, AclAction.WRITE, AclAction.DELETE, AclAction.TRAVERSE] },
  { actions: [AclAction.TRAVERSE] },
];

const filteredAcls = acls
  .filter(acl => !lodash.isEqual(acl.actions, ['TRAVERSE']))
  .map(acl => acl.actions);

console.log(filteredAcls);

export interface Filter<K> {
  eq?: K;
  neq?: K;
  in?: K[];
  notIn?: K[];

  // this is always bool
  isNull?: boolean;
}

interface BaseEntity {
  id: string;
}

interface BaseEntityWithIndex extends BaseEntity {
  [key: string]: any;
}

export type WhereInput<T> = {
  [K in keyof T]: Filter<T[K]>;
};

const generateWhereInput = <E extends BaseEntity>(whereInput: WhereInput<BaseEntityWithIndex>) => {
  Object.entries(whereInput).forEach(([key, value]) => {
    console.log(key, value);
  });
};
