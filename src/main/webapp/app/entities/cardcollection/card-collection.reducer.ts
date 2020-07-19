import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ICard, defaultValue } from 'app/shared/model/card.model';
import { ICardCollection } from 'app/shared/model/card-collection.model';

export const ACTION_TYPES = {
  FETCH_CARD_COLLECTION: 'card/FETCH_CARD_COLLECTION',
  CREATE_CARD_COLLECTION: 'card/CREATE_CARD_COLLECTION',
  UPDATE_CARD_COLLECTION: 'card/UPDATE_CARD_COLLECTION',
  DELETE_CARD_COLLECTION: 'card/DELETE_CARD_COLLECTION',
  REMOVE_FROM_COLLECTION: 'card/REMOVE_FROM_COLLECTION',
  ADD_TO_COLLECTION: 'card/ADD_TO_COLLECTION',
  RESET: 'card/RESET'
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ICardCollection>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false
};

export type CardCollectionState = Readonly<typeof initialState>;

// Reducer

export default (state: CardCollectionState = initialState, action): CardCollectionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_CARD_COLLECTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true
      };
    case REQUEST(ACTION_TYPES.CREATE_CARD_COLLECTION):
    case REQUEST(ACTION_TYPES.UPDATE_CARD_COLLECTION):
    case REQUEST(ACTION_TYPES.DELETE_CARD_COLLECTION):
    case REQUEST(ACTION_TYPES.ADD_TO_COLLECTION):
    case REQUEST(ACTION_TYPES.REMOVE_FROM_COLLECTION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true
      };
    case FAILURE(ACTION_TYPES.FETCH_CARD_COLLECTION):
    case FAILURE(ACTION_TYPES.ADD_TO_COLLECTION):
    case FAILURE(ACTION_TYPES.CREATE_CARD_COLLECTION):
    case FAILURE(ACTION_TYPES.DELETE_CARD_COLLECTION):
    case FAILURE(ACTION_TYPES.REMOVE_FROM_COLLECTION):
    case FAILURE(ACTION_TYPES.UPDATE_CARD_COLLECTION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload
      };
    case SUCCESS(ACTION_TYPES.FETCH_CARD_COLLECTION):
      return {
        ...state,
        loading: false,
        entities: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.ADD_TO_COLLECTION):
    case SUCCESS(ACTION_TYPES.CREATE_CARD_COLLECTION):
    case SUCCESS(ACTION_TYPES.REMOVE_FROM_COLLECTION):
    case SUCCESS(ACTION_TYPES.UPDATE_CARD_COLLECTION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data
      };
    case SUCCESS(ACTION_TYPES.DELETE_CARD_COLLECTION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {}
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState
      };
    default:
      return state;
  }
};

const apiUrl = 'api/collections';

// Actions

export const getEntities: ICrudGetAllAction<ICardCollection> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_CARD_COLLECTION,
  payload: axios.get<ICardCollection>(`${apiUrl}?cacheBuster=${new Date().getTime()}`)
});

export const createEntity: ICrudPutAction<ICardCollection> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_CARD_COLLECTION,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ICardCollection> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_CARD_COLLECTION,
    payload: axios.put(apiUrl, cleanEntity(entity))
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ICardCollection> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_CARD_COLLECTION,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const deleteEntityFromCollection: ICrudDeleteAction<ICardCollection> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`; //TODO - URLS
  const result = await dispatch({
    type: ACTION_TYPES.REMOVE_FROM_COLLECTION,
    payload: axios.delete(requestUrl)
  });
  return result;
};

export const addEntityToCollection: ICrudPutAction<ICardCollection> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.ADD_TO_COLLECTION,
    payload: axios.post(apiUrl, cleanEntity(entity))
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET
});
