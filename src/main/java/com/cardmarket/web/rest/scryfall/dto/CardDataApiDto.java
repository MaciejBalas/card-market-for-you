package com.cardmarket.web.rest.scryfall.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CardDataApiDto {
    
    String name;

    @JsonProperty("oracle_text")
    String oracleText;

    //normalnie nie potrzebny - Java z definicji robi pusty
    public CardDataApiDto() {
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOracleText() {
        return this.oracleText;
    }

    public void setOracleText(String oracleText) {
        this.oracleText = oracleText;
    }

    @Override
    public String toString() {
        return "{" +
            " name='" + name + "'" +
            ", oracleText='" + oracleText + "'" +
            "}";
    }

}
