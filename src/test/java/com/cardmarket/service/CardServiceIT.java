package com.cardmarket.service;

import static org.junit.jupiter.api.Assertions.assertTrue;

import com.cardmarket.CardMarketForYouApp;
import com.cardmarket.domain.Card;
import com.cardmarket.service.dto.CardDTO;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest(classes = CardMarketForYouApp.class)
@Transactional
public class CardServiceIT {
   
    
    @Autowired
    CardService cardService;

    private static Card cardFixture(){
        Card card = new Card()
            .cardName("cardName")
            .rulesText("rules");
        return card;    
    }

    
    private static CardDTO cardDtoFixture(){
        CardDTO card = new CardDTO();
        card.setId(1L);
        card.setCardName("cardName");
        card.setRulesText("rules");
        return card;    
    }


    @Test
    public void createCard(){
        CardDTO card = cardDtoFixture();
        cardService.save(card);
        assertTrue(cardService.findAll().size() == 1);
    }
}