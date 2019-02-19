package com.carpool.controllers;

import com.carpool.business.Business;
import com.carpool.business.BusinessRepository;
import org.springframework.web.bind.annotation.*;

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
        return this.businessRepository.findBusinessesByCity(city.toLowerCase());
    }

    @PostMapping("/add")
    public Business addBuisness(@RequestBody Business business) {
        return this.businessRepository.save(business);
    }
}
