package com.carpool.controllers;

import com.carpool.connection.Connection;
import com.carpool.connection.ConnectionRepository;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/add/{id}")
    public Connection addDistance(@PathVariable String id) {
        Connection connection = this.connectionRepository.findConnectionById(id);
        connection.addDistance();
        return this.connectionRepository.save(connection);
    }

    @GetMapping("/remove/{id}")
    public Connection removeConnection(@PathVariable String id) {
        Connection connection = this.connectionRepository.findConnectionById(id);
        connection.setDeclined(true);
        return this.connectionRepository.save(connection);
    }
}
