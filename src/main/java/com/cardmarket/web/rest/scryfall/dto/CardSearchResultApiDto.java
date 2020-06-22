package com.cardmarket.web.rest.scryfall.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CardSearchResultApiDto {

    @JsonProperty("data")
    List<CardDataApiDto> results;
}
