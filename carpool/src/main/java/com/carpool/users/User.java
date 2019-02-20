package com.carpool.users;

import com.carpool.google.LatAndLng;
import com.carpool.google.SimplifiedRoute;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Users")
public class User {
    @Id
    private String id;
    private final String email;
    private String password;
    private final String firstName;
    private final String lastName;
    private final String address;
    private String businessId;
    private List<String> connections;
    private SimplifiedRoute simplifiedRoute;

    @JsonCreator
    User(@JsonProperty("email") String email,
                @JsonProperty("password") String password,
                @JsonProperty("firstName") String firstName,
                @JsonProperty("lastName") String lastName,
                @JsonProperty("address") String address) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    public SimplifiedRoute getSimplifiedRoute() {
        return simplifiedRoute;
    }

    public void setSimplifiedRoute(SimplifiedRoute simplifiedRoute) {
        this.simplifiedRoute = simplifiedRoute;
    }

    public void setBusinessId(String businessId) {
        this.businessId = businessId;
    }

    public String getBusinessId() {
        return businessId;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAddress() {
        return address;
    }

    public String getId() {
        return id;
    }

    public List<String> getConnections() {
        return connections;
    }

    public void setConnections(List<String> connections) {
        this.connections = connections;
    }

    public void addConnection(String connectionId) {
        if(this.connections == null) {
            ArrayList<String> temp = new ArrayList<>();
            temp.add(connectionId);
            this.setConnections(temp);
        } else {
            this.connections.add(connectionId);
        }
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @JsonIgnore
    public SimplifiedUser getSimplified() {
        LatAndLng start = getSimplifiedRoute().getStart_location();
        return new SimplifiedUser(getId(), getEmail(), getFirstName(), getLastName(), getBusinessId(), start.getLat(), start.getLng());
    }

}
