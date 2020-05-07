package com.cardmarket.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link com.cardmarket.domain.Card} entity.
 */
public class CardDTO implements Serializable {
    
    private Long id;

    private String cardName;

    private String rulesText;

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getRulesText() {
        return rulesText;
    }

    public void setRulesText(String rulesText) {
        this.rulesText = rulesText;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        CardDTO cardDTO = (CardDTO) o;
        if (cardDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), cardDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "CardDTO{" +
            "id=" + getId() +
            ", cardName='" + getCardName() + "'" +
            ", rulesText='" + getRulesText() + "'" +
            "}";
    }
}
