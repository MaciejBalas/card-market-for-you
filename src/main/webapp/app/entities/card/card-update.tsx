import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './card.reducer';
import { ICard } from 'app/shared/model/card.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ICardUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const CardUpdate = (props: ICardUpdateProps) => {
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { cardEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/card');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...cardEntity,
        ...values
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="cardMarketForYouApp.card.home.createOrEditLabel">
            <Translate contentKey="cardMarketForYouApp.card.home.createOrEditLabel">Create or edit a Card</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : cardEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="card-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="card-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="cardNameLabel" for="card-cardName">
                  <Translate contentKey="cardMarketForYouApp.card.cardName">Card Name</Translate>
                </Label>
                <AvField id="card-cardName" type="text" name="cardName" />
              </AvGroup>
              <AvGroup>
                <Label id="rulesTextLabel" for="card-rulesText">
                  <Translate contentKey="cardMarketForYouApp.card.rulesText">Rules Text</Translate>
                </Label>
                <AvField id="card-rulesText" type="text" name="rulesText" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/card" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  cardEntity: storeState.card.entity,
  loading: storeState.card.loading,
  updating: storeState.card.updating,
  updateSuccess: storeState.card.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CardUpdate);
