package com.carpool.business;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BusinessRepository extends MongoRepository<Business, String> {
    Business findBusinessById(String id);
    List<Business> findBusinessesByCity(String city);
}
