package com.carpool.controllers;

import com.carpool.connection.Connection;
import com.carpool.connection.ConnectionRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/connections")
public class ConnectionController {
    private final ConnectionRepository connectionRepository;

    public ConnectionController(ConnectionRepository connectionRepository) {
        this.connectionRepository = connectionRepository;
    }

    @PostMapping("/receive")
    public Iterable<Connection> getConnectionsOffIds(@RequestBody List<String> ids) {
        return this.connectionRepository.findAllById(ids);
    }
}
