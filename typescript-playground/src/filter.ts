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

type BaseEntityWithIndex = BaseEntity & Record<string, unknown>;

export type WhereInput<T> = {
  [K in keyof T]: Filter<T[K]>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateWhereInput = (whereInput: WhereInput<BaseEntityWithIndex>) => {
  Object.entries(whereInput).forEach(([key, value]) => {
    console.log(key, value);
  });
};
