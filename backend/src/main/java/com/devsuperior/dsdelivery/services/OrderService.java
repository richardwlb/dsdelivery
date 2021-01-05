package com.devsuperior.dsdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import com.devsuperior.dsdelivery.dto.OrderDTO;
import com.devsuperior.dsdelivery.entities.Order;
import com.devsuperior.dsdelivery.repositories.OrderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {

    @Autowired
    OrderRepository repository;

    // @Transactional(readOnly = true)
	// public List<OrderDTO> findAll() {
	// 	List<Order> list = repository.findOrdersWithProducts();
	// 	return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
    // }
    
    // @Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findAll();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}
