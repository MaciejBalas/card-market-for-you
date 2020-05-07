package com.cardmarket.service.mapper;


import com.cardmarket.domain.*;
import com.cardmarket.service.dto.CardDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Card} and its DTO {@link CardDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CardMapper extends EntityMapper<CardDTO, Card> {


    default Card fromId(Long id) {
        if (id == null) {
            return null;
        }
        Card card = new Card();
        card.setId(id);
        return card;
    }
}
