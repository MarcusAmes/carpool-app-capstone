package com.carpool.users;

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
    private final String password;
    private final String firstName;
    private final String lastName;
    private final String address;
    private String businessId;
    private List<SimplifiedUser> connections;

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

    public List<SimplifiedUser> getConnections() {
        return connections;
    }

    public void setConnections(List<SimplifiedUser> connections) {
        this.connections = connections;
    }

    public void addConnection(SimplifiedUser user) {
        if(this.connections == null) {
            ArrayList<SimplifiedUser> temp = new ArrayList<>();
            temp.add(user);
            this.setConnections(temp);
        } else {
            this.connections.add(user);
        }
    }

    @JsonIgnore
    public SimplifiedUser getSimplified(double percent) {
        return new SimplifiedUser(getId(), getEmail(), getFirstName(), getLastName(), getBusinessId(), percent);
    }

}
