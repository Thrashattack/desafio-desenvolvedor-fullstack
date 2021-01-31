
# Running the backend 

```shell
    docker-compose up --build -d
```


# Routes

- prefix: `/api/v1`

- `/signin`
    - POST
        - body:

        - fields:
            - login: String
            - password: String
        - response:
            ```json
                {
                    "token": "xyz",
                    "expires": "1d"   
                }
            ```

- `/signup`
    - PUT
        - body:

        - fields:
            - email: String
            - password: String
            - phone: String
            - name: String
        - response:
            ```json
                {
                    "token": "xyz",
                    "expires": "1d"   
                }
            ```

- `/verify/:login`
    - GET
        - params:
            - login: String
        - response:
            ```json
                true
            ```

- `/simulation`
    - POST
        - body:
            ```json
                {
                    "intialAmount": 10500,
                    "months": 24
                }
            ```
        - fields:
            - intialAmount: number
            - months: number
        - response
            ```json
                {
                    "months": "24",
                    "initialAmount": "10500",
                    "cdbRentability": "0,38 A.M",
                    "savingsRentability": "0.27 A_M",
                    "cdiOverCdb": "R$ 0.0095",
                    "cdbFinalAmount": "10.900",
                    "savingsFinalAmount": "number",
                    "simulationDate": "string"
                }
                    
            ```
    - GET
        - response
            ```json
                [
                    {
                        "months": "24",
                        "initialAmount": "10500",
                        "cdbRentability": "0,38 A.M",
                        "savingsRentability": "0.27 A_M",
                        "cdiOverCdb": "R$ 0.0095",
                        "cdbFinalAmount": "10.900",
                        "savingsFinalAmount": "number",
                        "simulationDate": "string"
                        }
                ]
            ```
