package com.cardmarket.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Card.
 */
@Entity
@Table(name = "card")
public class Card implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "card_name")
    private String cardName;

    @Column(name = "rules_text")
    private String rulesText;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardName() {
        return cardName;
    }

    public Card cardName(String cardName) {
        this.cardName = cardName;
        return this;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getRulesText() {
        return rulesText;
    }

    public Card rulesText(String rulesText) {
        this.rulesText = rulesText;
        return this;
    }

    public void setRulesText(String rulesText) {
        this.rulesText = rulesText;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Card)) {
            return false;
        }
        return id != null && id.equals(((Card) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Card{" +
            "id=" + getId() +
            ", cardName='" + getCardName() + "'" +
            ", rulesText='" + getRulesText() + "'" +
            "}";
    }
}
