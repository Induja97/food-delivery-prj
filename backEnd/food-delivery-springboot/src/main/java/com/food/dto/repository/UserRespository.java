package com.food.dto.repository;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.food.dto.model.Customer;

import java.util.List;

@Repository
public interface UserRespository extends JpaRepository<Customer,Integer> {
   //add custom methods if required
}