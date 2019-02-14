package com.carpool.connection;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConnectionRepository extends MongoRepository<Connection, String> {
    Connection findConnectionById(String id);
    List<Connection> findAllConnectionsById(List<String> id);
}
