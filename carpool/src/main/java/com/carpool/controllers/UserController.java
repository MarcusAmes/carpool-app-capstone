package com.carpool.controllers;

import com.carpool.business.BusinessRepository;
import com.carpool.google.*;
import com.carpool.google.config.GoogleService;
import com.carpool.users.User;
import com.carpool.users.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository userRepository;
    private final BusinessRepository businessRepository;
    private final GoogleService googleService;

    public UserController(UserRepository userRepository, BusinessRepository businessRepository, GoogleService googleService) {
        this.userRepository = userRepository;
        this.businessRepository = businessRepository;
        this.googleService = googleService;
    }

    @PostMapping("/login")
    public User login(@RequestBody Login login) {
        String email = login.getEmail();
        String password = login.getPassword();
        User user = this.userRepository.findUserByEmail(email);
        if(user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    @PostMapping("/register")
    public User createUser(@RequestBody User user) {
        this.userRepository.insert(user);
        return user;
    }

    @GetMapping("/get/{id}")
    public User userGetById(@PathVariable String id) {
        return this.userRepository.findUserById(id);
    }

    @GetMapping("/all")
    public List<User> getUsers() {
        return this.userRepository.findAll();
    }

    @PostMapping("/add/route")
    public SimplifiedRoute addRoute(@RequestBody User user) {
        Leg leg = googleService.getRoute(user.getAddress(), this.businessRepository.findBusinessById(user.getBusinessId()).getAddress()).getRoutes().get(0).getLegs().get(0);
        List<SimplifiedStep> steps = new ArrayList<>();
        for(Step step : leg.getSteps()) {
            steps.add(new SimplifiedStep(step.getDistance(), step.getDuration(), step.getEnd_location(), step.getStart_location()));
        }
        SimplifiedRoute simplifiedRoute = new SimplifiedRoute(leg.getStart_location(), leg.getEnd_location(), leg.getDistance(), leg.getDuration(), steps);
        user.setSimplifiedRoute(simplifiedRoute);
        this.userRepository.save(user);
        List<User> sameBusinesses = this.userRepository.findUsersByBusinessId(user.getBusinessId());
        for(User compareUser : sameBusinesses) {
            if(!user.getId().equals(compareUser.getId()))  {
                if(getPercent(user.getSimplifiedRoute(), compareUser.getSimplifiedRoute())) {
                    user.addConnection(compareUser.getId());
                    compareUser.addConnection(user.getId());
                    this.userRepository.save(compareUser);
                    this.userRepository.save(user);
                }
            }
        }
        return simplifiedRoute;
    }

    private boolean getPercent(SimplifiedRoute user1, SimplifiedRoute user2) {
        //most number of steps not distance
        SimplifiedRoute big;
        //least number of steps not distance
        SimplifiedRoute small;
        //difference of steps
        int dif;

        //distance shared
        int distanceSimilar = 0;
        //number of steps in common
        int countSimilar = 0;

        //small distance to convergence
        double smallDTC = 0;
        //big distance to convergence
        double bigDTC = 0;

        //finds convergence point
        boolean convergence = false;

        if(user1.getSimplifiedStep().size() < user2.getSimplifiedStep().size()) {
            small = user1;
            big = user2;
        } else {
            small = user2;
            big = user1;
        }
        dif = big.getSimplifiedStep().size() - small.getSimplifiedStep().size();

        //adds distance before meets with small
        for (int i = 0; i < dif; i++) {
            bigDTC += big.getSimplifiedStep().get(i).getDistance().getValue();
        }

        for (int i = 1; i < small.getSimplifiedStep().size(); i++) {
            SimplifiedStep smallStep = small.getSimplifiedStep().get(i);
            SimplifiedStep bigStep = big.getSimplifiedStep().get(i + dif);

            if(!convergence) {
                smallDTC += smallStep.getDistance().getValue();
                bigDTC += bigStep.getDistance().getValue();
            }

            if(smallStep.getStart_location().equals(bigStep.getStart_location())) {
                countSimilar++;
                distanceSimilar += smallStep.getDistance().getValue();
                if(!convergence) {
                    //5 miles distance to convergence
                    if(smallDTC > 8000) {
                        //Don't add it
                    }
                    convergence = true;
                }
            } else if (smallStep.getEnd_location().equals(bigStep.getEnd_location())) {
                if(smallStep.getDistance().getValue() < bigStep.getDistance().getValue()) {
                    distanceSimilar += smallStep.getDistance().getValue();
                } else {
                    distanceSimilar += bigStep.getDistance().getValue();
                }
            }
        }

        double smallPercent = distanceSimilar / small.getDistance().getValue();
        double bigPercent = distanceSimilar / big.getDistance().getValue();
        System.out.println("connected distance:" + distanceSimilar);
        System.out.println("small percent same:" + smallPercent);
        System.out.println("small distance:" + small.getDistance().getValue());
        System.out.println("big percent same:" + bigPercent);
        System.out.println("big distance:" + big.getDistance().getValue());

        System.out.println("small distance to convergence" + smallDTC);
        System.out.println("big distance to convergence" + bigDTC);

        //useless need right weight
        double weight = smallPercent * smallDTC + bigPercent * bigDTC;
        System.out.println(weight);
        return smallPercent > 0.6 && bigPercent > 0.4;
    }

    @PutMapping("/update")
    public User updateUser(@RequestBody User user) {
        this.userRepository.save(user);
        return user;
    }

}
