package com.food.front;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.food.dto.model.Customer;
import com.food.dto.model.DeliveryBoy;
import com.food.dto.model.MenuItem;
import com.food.dto.model.Restaurant;
import com.food.dto.repository.DeliveryRepository;
import com.food.dto.repository.MenuRepository;
import com.food.dto.repository.RestaurantRepository;
import com.food.dto.repository.UserRespository;


@RestController
@CrossOrigin(origins = "*")
@ComponentScan(basePackages = "com.food.*")
@EnableJpaRepositories("com.food.dto.repository")
@EntityScan("com.food.dto.model")
public class UserController { 
	
	@Autowired
    private UserRespository repository;
	
	@Autowired
    private RestaurantRepository restaurantRepository;
	
	@Autowired
    private DeliveryRepository deliveryRepository;
	
	@Autowired
	private MenuRepository menuItemRepository;


	@PostMapping("/registerRest")
    public Restaurant registerRest(@RequestBody Restaurant restaurant) {
		return restaurantRepository.save(restaurant);
//        return "Hi " + restaurant.getRestaurantName() + " your Registration process successfully completed";
    }
	
	@PostMapping("/registerCust")
    public Customer register(@RequestBody Customer customer) {
    return repository.save(customer);
       // return "Hi " + customer.getCustomerName() + " your Registration process successfully completed";
    }
		
	@PostMapping("/registerDeliveryBoy")
    public DeliveryBoy registerDeliveryBoy(@RequestBody DeliveryBoy deliveryBoy) {
		return deliveryRepository.save(deliveryBoy);
      //  return "Hi " + deliveryBoy.getDeliveryBoyName() + " your Registration process successfully completed";
    }
	
	@PostMapping("/addMenuItem")
	public MenuItem addMenuItem(@RequestBody MenuItem menuItem)
	{
		return menuItemRepository.save(menuItem);
	}

	@GetMapping("/getAllRestaurantUsers")
	public List<MenuItem> getAllRestaurantUsers()
	{
		return menuItemRepository.findAll();
	}
	
	@GetMapping("/getAllRestaurants")
	public List<Restaurant> getAllRestaurants()
	{
		return restaurantRepository.findAll();
	}
	
	@DeleteMapping("/deleteMenuItem/{id}")
    public List<MenuItem> deleteMenuItem(@PathVariable int id) {
		menuItemRepository.deleteById(id);
        return menuItemRepository.findAll();
    }
	
}
