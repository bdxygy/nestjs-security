export interface UniversalService<T, K, ID> {
  findAll(): Promise<T[]>;
  findById(id: ID): Promise<T>;
  create(createDto: K): Promise<T>;
  update(updateDto: Partial<K>): Promise<T>;
  delete(id: ID): Promise<void>;
}
