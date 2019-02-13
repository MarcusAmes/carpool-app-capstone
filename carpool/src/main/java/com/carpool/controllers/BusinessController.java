package com.carpool.controllers;

import com.carpool.business.Business;
import com.carpool.business.BusinessRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/business")
public class BusinessController {
    private final BusinessRepository businessRepository;

    public BusinessController(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }

    @GetMapping("/{city}")
    public List<Business> getBusinessesByCity(@PathVariable String city) {
        return this.businessRepository.findBusinessesByCity(city);
    }
}
