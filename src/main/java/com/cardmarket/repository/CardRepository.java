package com.cardmarket.repository;

import com.cardmarket.domain.Card;

import com.cardmarket.service.dto.CardDTO;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data  repository for the Card entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CardRepository extends JpaRepository<Card, Long> {


    Optional<Card> findByCardName (String cardName);
}




