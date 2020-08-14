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
@Table(name="CUSTOMER_TBL")
public class Customer {
    @Id
    @GeneratedValue
    private int cust_id;
    private String customerName;
    private int customerTel;
}