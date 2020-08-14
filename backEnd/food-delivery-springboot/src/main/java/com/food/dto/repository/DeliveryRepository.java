package com.food.dto.repository;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.food.dto.model.DeliveryBoy;

import java.util.List;

@Repository
public interface DeliveryRepository extends JpaRepository<DeliveryBoy,Integer> {
   //add custom methods if required
}