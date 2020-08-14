package com.food.dto.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="MENU_ITEM_TBL")
public class MenuItem {
    @Id
    @GeneratedValue
    private int id;
    private String itemName;
    private String itemDesc;
    private int itemPrice;
}