import { IMap, DeepPartial, PromiseMaybe } from 'anux-common';
import { FunctionComponent, ReactNode } from 'react';

export type StoreCallback<TData extends IMap = IMap> = (data: TData) => void;

export interface IProviderProps<TData extends IMap, TActions extends IMap> {
  initialData?: TData | ((initialData: TData) => TData);
  onChanged?(data: TData): void;
  onLoad?(actions: TActions, data: TData): PromiseMaybe;
  onLoading?(): ReactNode;
  onError?(error: Error): ReactNode;
}

export interface IStore<TData extends IMap, TActions extends IMap> extends FunctionComponent<IProviderProps<TData, TActions>> {
  dataType: TData;
  actionsType: TActions;
  storeTypeId: string;
}

export interface IInternalStore<TData extends IMap, TActions extends IMap> extends IStore<TData, TActions> {
  registerCallback(callback: StoreCallback<TData>): () => void;
}

export type StoreActionsDelegate<TData, TActions> = (upsert: (data: DeepPartial<TData>) => void, getData: () => TData) => TActions;

export const StoreTypeId = Symbol('storeTypeId');