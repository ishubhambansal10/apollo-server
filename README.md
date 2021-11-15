# apollo-server
What is GraphQL?

Stands for Graph query language, designed by facebook, its query languange designed to build client applications by providing flexible syntax for asking the data requirements by the client.
It is used to load data from a server to a client.
Often endpoints without IDs just return everything and end points with ID returns full information about 1 resource. The biggest issue is you are either under fetching or over fetching information. Imagine you are over fetching 100s of IDs and making 100 API calls and then filtering just 5 values form it. It is expensive on servers. Servers like cricket information and Facebook.
In GQL we can make selective endpoint, can fetch selective info from that endpoint using GQL. It can dig a little bit deeper into your api endpoints and can fetch selective info from it.
A GQL is a smarter Rest api.

Basic Query in GQL
{
    user(id: 5){
        name,
        website
    }
}

Response in GQL
{
    "data": {
        "user": {
            "name":"shubham",
            "website":"abc.in"
        }
    }
}


REST API VS GQL

Rest Api - 
1. It embraces the concept of having multiple endpoints which means multiple url's are exposed by our web service. (GET /users, POST/products,....)
2. Json data is exchanged
3. Can use any server side language, or any frontend framework
4. Stateless

GQL - 
1. One Endpoint only (Post/graphql)
2. Json data is exchanged
3. Can use any server side language, or any frontend framework
4. Stateless



Write down about Schema and Resolvers?
Schema - The GraphQL schema is at the center of every GraphQL server. It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language (also called schema definition language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows.

The root types are the query type, mutation type, and subscription type, which are the three types of operations you can run request from a GraphQL server. The query type is compulsory for any GraphQL schema, while the other two are optional. While we can define custom types in the schema, the GraphQL specification also defines a set of built-in scalar types. They are Int, Float, Boolean, String, and ID.

Resolvers - A resolver is a function that's responsible for populating the data for a single field in your schema. Whenever a client queries for a particular field, the resolver for that field fetches the requested data from the appropriate data source.

A resolver function returns one of the following:

Data of the type required by the resolver's corresponding schema field (string, integer, object, etc.)
A promise that fulfills with data of the required type