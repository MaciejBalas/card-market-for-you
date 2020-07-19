import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './card-collection.reducer';
import { ICard } from 'app/shared/model/card.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ICardCollectionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const CardCollection = (props: ICardCollectionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { cardCollection, match, loading } = props;
  return (
    <div>
      <h2 id="card-heading">
        <Translate contentKey="cardMarketForYouApp.card.home.title">Collections</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="cardMarketForYouApp.card.home.createLabel">Create new collection</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {cardCollection && cardCollection.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="cardMarketForYouApp.card.cardName">Card Name</Translate>
                </th>
                <th>
                  <Translate contentKey="cardMarketForYouApp.card.rulesText">Rules Text</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cardCollection.map((collection, x) => (
                collection.forEach((card, i) => (
                  <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${card.id}`} color="link" size="sm">
                      {card.id}
                    </Button>
                  </td>
                  <td>{card.cardName}</td>
                  <td>{card.rulesText}</td>
                  {/* <td className="text-right"> //removed for now - need to update it to 
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${card.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${card.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${card.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td> */}
                </tr>
                ))
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="cardMarketForYouApp.card.home.notFound">No Cards found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cardCollection }: IRootState) => ({
  cardCollection: cardCollection.entities,
  loading: cardCollection.loading
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);
