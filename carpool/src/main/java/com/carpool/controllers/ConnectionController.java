package com.carpool.controllers;

import com.carpool.connection.Connection;
import com.carpool.connection.ConnectionRepository;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

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
        connection.addDate();
        return this.connectionRepository.save(connection);
    }

    @GetMapping("/remove/date/{id}/{date}")
    public Connection removeDate(@PathVariable String id, @PathVariable String date) throws ParseException {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        Date date1 = format.parse(date);
        Connection connection = this.connectionRepository.findConnectionById(id);
        connection.removeDate(date1);
        return this.connectionRepository.save(connection);
    }

    @PostMapping("/add/message/{id}")
    public Connection addMessage(@PathVariable String id, @RequestBody Map<String, String> body) {
        Connection connection = this.connectionRepository.findConnectionById(id);
        connection.addMessage(body.get("userId"), body.get("message"));
        return this.connectionRepository.save(connection);
    }

    @GetMapping("/remove/message/{id}/{date}")
    public Connection removeMessage(@PathVariable String id, @PathVariable String date) throws ParseException {
        Connection connection = this.connectionRepository.findConnectionById(id);
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
        Date date1 = format.parse(date);
        connection.removeMessage(date1);
        return this.connectionRepository.save(connection);
    }

    @GetMapping("/remove/{id}")
    public Connection removeConnection(@PathVariable String id) {
        Connection connection = this.connectionRepository.findConnectionById(id);
        connection.setDeclined(true);
        return this.connectionRepository.save(connection);
    }
}
