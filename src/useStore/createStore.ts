import { IMap } from 'anux-common';
import { IProvider, createProvider } from './provider';
import { ConstructorOfStore } from './models';

export interface IStoreCreate<TData extends IMap, TActionsType extends ConstructorOfStore<TData>, TOnLoad> {
  create(): IProvider<TData, InstanceType<TActionsType>, TOnLoad>;
}

export function createCreateStore<TData extends IMap, TActionsType extends ConstructorOfStore<TData>, TOnLoad extends any>(data: TData, actionsType?: TActionsType) {
  return {
    create() {
      return createProvider<TData, TActionsType, TOnLoad>(data, actionsType);
    },
  };
}
