package com.carpool.users;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findUserById(String id);
    List<User> findUsersByBusinessId(String BusinessId);
}
