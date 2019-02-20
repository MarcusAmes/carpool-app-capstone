package com.carpool.connection;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;
import java.util.Objects;

public class Message {
    private final String userId;
    private final String message;
    private final Date date;

    @JsonCreator
    public Message(@JsonProperty("userId") String userId,
                   @JsonProperty("message") String message,
                   @JsonProperty("date") Date date) {
        this.userId = userId;
        this.message = message;
        this.date = date;
    }

    public String getUserId() {
        return userId;
    }

    public String getMessage() {
        return message;
    }

    public Date getDate() {
        return date;
    }
}
