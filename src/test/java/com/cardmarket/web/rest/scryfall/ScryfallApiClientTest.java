package com.cardmarket.web.rest.scryfall;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import javax.transaction.Transactional;

import com.cardmarket.CardMarketForYouApp;
import com.cardmarket.web.rest.scryfall.client.ScryfallApiClient;
import com.cardmarket.web.rest.scryfall.dto.CardSearchResultApiDto;

import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(classes = CardMarketForYouApp.class)
@Transactional
public class ScryfallApiClientTest {
   
    
    @Autowired
    ScryfallApiClient client;
    @Mock
    ScryfallApiClient mockClient;
    
    @Test
    public void getCardAsObject(){
        Object result = client.findObjectByName("Char");
        assertTrue(result != null);
    }

    @Test
    public void getCardAsApiDTO(){
        CardSearchResultApiDto result = client.findCardApiDtoByName("Char");
        assertTrue(result != null);
    }

    @Test
    public void MockTest(){
        when(mockClient.findByCMC("3")).thenReturn(new CardSearchResultApiDto());
        CardSearchResultApiDto result = mockClient.findByCMC("3");
        assertTrue(result != null);
    }
}