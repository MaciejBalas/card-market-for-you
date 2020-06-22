package com.cardmarket.web.rest.scryfall.client;

import com.cardmarket.web.rest.scryfall.dto.CardSearchResultApiDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class ScryfallApiClient {

    public Object findObjectByName(String cardname) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://api.scryfall.com/cards/search?order=cmc&q=" + cardname;

        return restTemplate.getForObject(url, Object.class);
    }

    public CardSearchResultApiDto findCardApiDtoByName(String cardname) {
        RestTemplate restTemplate = new RestTemplate();
        String url = "https://api.scryfall.com/cards/search?order=cmc&q=" + cardname;

        return restTemplate.getForObject(url, CardSearchResultApiDto.class);
    }

    public CardSearchResultApiDto findByCMC(String cmc){

        return null;//TODO zrob jak przeczytasz dokumentacje
    }
}