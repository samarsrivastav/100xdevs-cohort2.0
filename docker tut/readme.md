# ************************* COMMANDS ********************************************

### docker build -t <name> .                                                                   
        BUILD THE CONTAINER
### docker run -p port:port <name>                                                             
        RUN THE CONTAINER
### docker run -p port:port -e DATABASE_URL="" <name>                                          
        PASSING ENV VARIABLE
### docker exec -it <container id> /bin/bash                                                   
        SSH INTO THE CONTAINER

        
### docker volume create <volume name>                                                         
        CREATE VOLUME
### docker run -v volume_name:/data/db -p port:port container                                  
        RUN WITH VOLUME [/data/db is where the container stores the data]

        
### docker network create <network name>                                                       
        CREATE NETWORK
### docker run -v volume_name:/data/db -network <network name> -p port:port  container         
        RUN WITH NETWORK