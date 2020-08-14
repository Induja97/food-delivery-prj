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
@Table(name="DELIVERY_TBL")
public class DeliveryBoy {
    @Id
    @GeneratedValue
    private int delivery_id;
    private String deliveryBoyName;
    private int delContactNo;
}