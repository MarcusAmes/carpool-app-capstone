package com.carpool.users;

import com.carpool.business.Business;
import com.carpool.business.BusinessRepository;
import com.carpool.google.SimplifiedRoute;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class UserSeeder implements CommandLineRunner {
    private UserRepository userRepository;
    private BusinessRepository businessRepository;

    public UserSeeder(UserRepository userRepository, BusinessRepository businessRepository) {
        this.userRepository = userRepository;
        this.businessRepository = businessRepository;
    }
    private String dennisJson = "{\n" +
            "    \"start_location\": {\n" +
            "        \"lat\": 33.8631316,\n" +
            "        \"lng\": -112.1368155\n" +
            "    },\n" +
            "    \"end_location\": {\n" +
            "        \"lat\": 33.4399802,\n" +
            "        \"lng\": -112.0674151\n" +
            "    },\n" +
            "    \"distance\": {\n" +
            "        \"text\": \"32.7 mi\",\n" +
            "        \"value\": 52649\n" +
            "    },\n" +
            "    \"duration\": {\n" +
            "        \"text\": \"37 mins\",\n" +
            "        \"value\": 2190\n" +
            "    },\n" +
            "    \"simplifiedStep\": [\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"236 ft\",\n" +
            "                \"value\": 72\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 16\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.8632882,\n" +
            "                \"lng\": -112.1375435\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.8631316,\n" +
            "                \"lng\": -112.1368155\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"1.5 mi\",\n" +
            "                \"value\": 2363\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"3 mins\",\n" +
            "                \"value\": 193\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.8430581,\n" +
            "                \"lng\": -112.1352932\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.8632882,\n" +
            "                \"lng\": -112.1375435\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"1.0 mi\",\n" +
            "                \"value\": 1605\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"2 mins\",\n" +
            "                \"value\": 112\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.8350487,\n" +
            "                \"lng\": -112.1450116\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.8430581,\n" +
            "                \"lng\": -112.1352932\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"25.8 mi\",\n" +
            "                \"value\": 41479\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"23 mins\",\n" +
            "                \"value\": 1362\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4659608,\n" +
            "                \"lng\": -112.1099988\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.8350487,\n" +
            "                \"lng\": -112.1450116\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"397 ft\",\n" +
            "                \"value\": 121\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 5\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4648832,\n" +
            "                \"lng\": -112.1098609\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4659608,\n" +
            "                \"lng\": -112.1099988\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"2.5 mi\",\n" +
            "                \"value\": 3998\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"2 mins\",\n" +
            "                \"value\": 147\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4621312,\n" +
            "                \"lng\": -112.0699622\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4648832,\n" +
            "                \"lng\": -112.1098609\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.2 mi\",\n" +
            "                \"value\": 304\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 18\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.46165020000001,\n" +
            "                \"lng\": -112.0667454\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4621312,\n" +
            "                \"lng\": -112.0699622\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"1.5 mi\",\n" +
            "                \"value\": 2409\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"5 mins\",\n" +
            "                \"value\": 286\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4409293,\n" +
            "                \"lng\": -112.0653491\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.46165020000001,\n" +
            "                \"lng\": -112.0667454\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.1 mi\",\n" +
            "                \"value\": 193\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 26\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4409273,\n" +
            "                \"lng\": -112.0674273\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4409293,\n" +
            "                \"lng\": -112.0653491\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"344 ft\",\n" +
            "                \"value\": 105\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 25\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4399802,\n" +
            "                \"lng\": -112.0674151\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4409273,\n" +
            "                \"lng\": -112.0674273\n" +
            "            }\n" +
            "        }\n" +
            "    ]\n" +
            "}";
    private String oscarJson = "{\n" +
            "    \"start_location\": {\n" +
            "        \"lat\": 33.7158062,\n" +
            "        \"lng\": -112.1148791\n" +
            "    },\n" +
            "    \"end_location\": {\n" +
            "        \"lat\": 33.4399802,\n" +
            "        \"lng\": -112.0674151\n" +
            "    },\n" +
            "    \"distance\": {\n" +
            "        \"text\": \"23.5 mi\",\n" +
            "        \"value\": 37808\n" +
            "    },\n" +
            "    \"duration\": {\n" +
            "        \"text\": \"27 mins\",\n" +
            "        \"value\": 1641\n" +
            "    },\n" +
            "    \"simplifiedStep\": [\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.1 mi\",\n" +
            "                \"value\": 165\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 32\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.7148909,\n" +
            "                \"lng\": -112.1162798\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.7158062,\n" +
            "                \"lng\": -112.1148791\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.8 mi\",\n" +
            "                \"value\": 1263\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 79\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.7255865,\n" +
            "                \"lng\": -112.1194356\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.7148909,\n" +
            "                \"lng\": -112.1162798\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"479 ft\",\n" +
            "                \"value\": 146\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 29\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.7256719,\n" +
            "                \"lng\": -112.1208679\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.7255865,\n" +
            "                \"lng\": -112.1194356\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.1 mi\",\n" +
            "                \"value\": 214\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 17\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.7237991,\n" +
            "                \"lng\": -112.1203571\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.7256719,\n" +
            "                \"lng\": -112.1208679\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.2 mi\",\n" +
            "                \"value\": 264\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 11\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.7215888,\n" +
            "                \"lng\": -112.1194449\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.7237991,\n" +
            "                \"lng\": -112.1203571\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"17.8 mi\",\n" +
            "                \"value\": 28626\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"16 mins\",\n" +
            "                \"value\": 966\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4659608,\n" +
            "                \"lng\": -112.1099988\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.7215888,\n" +
            "                \"lng\": -112.1194449\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"397 ft\",\n" +
            "                \"value\": 121\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 5\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4648832,\n" +
            "                \"lng\": -112.1098609\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4659608,\n" +
            "                \"lng\": -112.1099988\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"2.5 mi\",\n" +
            "                \"value\": 3998\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"2 mins\",\n" +
            "                \"value\": 147\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4621312,\n" +
            "                \"lng\": -112.0699622\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4648832,\n" +
            "                \"lng\": -112.1098609\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.2 mi\",\n" +
            "                \"value\": 304\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 18\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.46165020000001,\n" +
            "                \"lng\": -112.0667454\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4621312,\n" +
            "                \"lng\": -112.0699622\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"1.5 mi\",\n" +
            "                \"value\": 2409\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"5 mins\",\n" +
            "                \"value\": 286\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4409293,\n" +
            "                \"lng\": -112.0653491\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.46165020000001,\n" +
            "                \"lng\": -112.0667454\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.1 mi\",\n" +
            "                \"value\": 193\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 26\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4409273,\n" +
            "                \"lng\": -112.0674273\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4409293,\n" +
            "                \"lng\": -112.0653491\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"344 ft\",\n" +
            "                \"value\": 105\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 25\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4399802,\n" +
            "                \"lng\": -112.0674151\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4409273,\n" +
            "                \"lng\": -112.0674273\n" +
            "            }\n" +
            "        }\n" +
            "    ]\n" +
            "}";

    private String harrisonJson = "{\n" +
            "    \"start_location\": {\n" +
            "        \"lat\": 33.5264276,\n" +
            "        \"lng\": -112.2619433\n" +
            "    },\n" +
            "    \"end_location\": {\n" +
            "        \"lat\": 33.4399802,\n" +
            "        \"lng\": -112.0674151\n" +
            "    },\n" +
            "    \"distance\": {\n" +
            "        \"text\": \"18.5 mi\",\n" +
            "        \"value\": 29813\n" +
            "    },\n" +
            "    \"duration\": {\n" +
            "        \"text\": \"24 mins\",\n" +
            "        \"value\": 1456\n" +
            "    },\n" +
            "    \"simplifiedStep\": [\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.2 mi\",\n" +
            "                \"value\": 246\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 52\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.5254978,\n" +
            "                \"lng\": -112.25999\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.5264276,\n" +
            "                \"lng\": -112.2619433\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.2 mi\",\n" +
            "                \"value\": 374\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 74\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.5248332,\n" +
            "                \"lng\": -112.2636661\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.5254978,\n" +
            "                \"lng\": -112.25999\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.1 mi\",\n" +
            "                \"value\": 218\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 29\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.5229945,\n" +
            "                \"lng\": -112.2637474\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.5248332,\n" +
            "                \"lng\": -112.2636661\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.3 mi\",\n" +
            "                \"value\": 547\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 51\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.5227353,\n" +
            "                \"lng\": -112.2696172\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.5229945,\n" +
            "                \"lng\": -112.2637474\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.3 mi\",\n" +
            "                \"value\": 452\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 33\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.5186977,\n" +
            "                \"lng\": -112.269242\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.5227353,\n" +
            "                \"lng\": -112.2696172\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"3.7 mi\",\n" +
            "                \"value\": 6009\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"3 mins\",\n" +
            "                \"value\": 200\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4663157,\n" +
            "                \"lng\": -112.2688285\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.5186977,\n" +
            "                \"lng\": -112.269242\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"11.8 mi\",\n" +
            "                \"value\": 18956\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"11 mins\",\n" +
            "                \"value\": 662\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4621312,\n" +
            "                \"lng\": -112.0699622\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4663157,\n" +
            "                \"lng\": -112.2688285\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.2 mi\",\n" +
            "                \"value\": 304\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 18\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.46165020000001,\n" +
            "                \"lng\": -112.0667454\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4621312,\n" +
            "                \"lng\": -112.0699622\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"1.5 mi\",\n" +
            "                \"value\": 2409\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"5 mins\",\n" +
            "                \"value\": 286\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4409293,\n" +
            "                \"lng\": -112.0653491\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.46165020000001,\n" +
            "                \"lng\": -112.0667454\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"0.1 mi\",\n" +
            "                \"value\": 193\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 26\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4409273,\n" +
            "                \"lng\": -112.0674273\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4409293,\n" +
            "                \"lng\": -112.0653491\n" +
            "            }\n" +
            "        },\n" +
            "        {\n" +
            "            \"distance\": {\n" +
            "                \"text\": \"344 ft\",\n" +
            "                \"value\": 105\n" +
            "            },\n" +
            "            \"duration\": {\n" +
            "                \"text\": \"1 min\",\n" +
            "                \"value\": 25\n" +
            "            },\n" +
            "            \"end_location\": {\n" +
            "                \"lat\": 33.4399802,\n" +
            "                \"lng\": -112.0674151\n" +
            "            },\n" +
            "            \"start_location\": {\n" +
            "                \"lat\": 33.4409273,\n" +
            "                \"lng\": -112.0674273\n" +
            "            }\n" +
            "        }\n" +
            "    ]\n" +
            "}";

    @Override
    public void run(String... args) throws Exception {
        ObjectMapper objectMapper = new ObjectMapper();
        //Drops all
        this.userRepository.deleteAll();
        this.businessRepository.deleteAll();

        Business galvanize = new Business("Galvanize", "515 E Grant St, Phoenix, AZ 85004", "Phoenix");
        this.businessRepository.save(galvanize);
        List<Business> businesses = this.businessRepository.findAll();

        User marcus = new User(
                "dennis@gmail.com",
                "12345",
                "Dennis",
                "Enwiya",
                "41703 N Gavilan Peak Pkwy, Anthem, AZ 85086");
        marcus.setSimplifiedRoute(objectMapper.readValue(dennisJson, SimplifiedRoute.class));
        marcus.setBusinessId(businesses.get(0).getId());
        User oscar = new User(
                "oscar@gmail.com",
                "12345",
                "Oscar",
                "Sandoval",
                "2550 W Happy Valley Rd, Phoenix, AZ 85085");
        oscar.setSimplifiedRoute(objectMapper.readValue(oscarJson, SimplifiedRoute.class));
        oscar.setBusinessId(businesses.get(0).getId());
        User harrison = new User(
                "harrison@gmail.com",
                "12345",
                "Harrison",
                "Van Nort",
                "1 Cardinals Dr, Glendale, AZ 85305");
        harrison.setSimplifiedRoute(objectMapper.readValue(harrisonJson, SimplifiedRoute.class));
        harrison.setBusinessId(businesses.get(0).getId());


        //Add Users
        List<User> users = Arrays.asList(marcus, oscar, harrison);
        this.userRepository.saveAll(users);
    }
}
