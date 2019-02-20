package com.carpool.connection;

import com.carpool.users.SimplifiedUser;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Document(collection = "Connections")
public class Connection {
    @Id
    private String id;
    private final SimplifiedUser user1;
    private final SimplifiedUser user2;
    private boolean user1Accept;
    private boolean user2Accept;
    private final double percent;
    private final double distance;
    private double miles;
    private boolean declined;
    private List<Date> dates;

    public Connection(@JsonProperty("user") SimplifiedUser user1,
                      @JsonProperty("user2") SimplifiedUser user2,
                      @JsonProperty("percent") double percent,
                      @JsonProperty("distance") double distance) {
        this.user1 = user1;
        this.user2 = user2;
        this.user1Accept = false;
        this.user2Accept = false;
        this.percent = percent;
        this.distance = distance;
        this.miles = 0;
        this.declined = false;
    }

    public String getId() {
        return id;
    }

    public SimplifiedUser getUser1() {
        return user1;
    }

    public SimplifiedUser getUser2() {
        return user2;
    }

    public boolean isUser1Accept() {
        return user1Accept;
    }

    public boolean isUser2Accept() {
        return user2Accept;
    }

    public double getPercent() {
        return percent;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setUser1Accept(boolean user1Accept) {
        this.user1Accept = user1Accept;
    }

    public void setUser2Accept(boolean user2Accept) {
        this.user2Accept = user2Accept;
    }

    public double getMiles() {
        return miles;
    }

    public double getDistance() {
        return distance;
    }

    public boolean isDeclined() {
        return declined;
    }

    public void setDeclined(boolean declined) {
        this.declined = declined;
    }

    public List<Date> getDates() {
        return dates;
    }

    public void setDates(List<Date> dates) {
        this.dates = dates;
    }

    public void addDate() {
        if(this.dates == null) {
            this.dates = new ArrayList<>();
            this.dates.add(new Date());
        } else {
            this.dates.add(new Date());
        }
    }

    public void addDistance() {
        DecimalFormat df = new DecimalFormat("#.00");
        Double temp = this.miles + this.distance;
        this.miles = Double.valueOf(df.format(temp));
    }
}
