import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
    useTitle('blog')
  return (
    <div className="max-w-7xl mx-auto pt-4">
      <div className="my-10">
        <h2 className="text-3xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p>
          <span className="text-xl font-bold">Access Token:</span>An access
          token is a credential that is issued to a client after successful
          authentication.It represents the authorization granted to the client
          to access protected resources on behalf of the authenticated
          user.Access tokens typically have a limited lifespan and are used to
          authenticate and authorize API requests <br />
          <span className="text-xl font-bold">Refresh Token:</span>A refresh
          token is a long-lived credential that is issued alongside an access
          token during the authentication process. Unlike access tokens, refresh
          tokens are not sent with each API request. Refresh tokens are
          typically stored securely by the client and are sent to the server to
          obtain a new access token when needed. <br />
          <span className="text-xl font-bold"> they work together:</span>The
          client initially authenticates with the server using their credentials
          Upon successful authentication, the server issues an access token and
          a refresh token to the client. The client stores the refresh token
          securely and uses the access token to make authorized API requests.
          When the access token expires, the client can send the refresh token
          to the server to obtain a new access token without requiring the user
          to reauthenticate. <br />
          <span className="text-xl font-bold">
            Where to store them on the client-side:
          </span>
          Access tokens should be stored in memory or in an appropriate
          client-side storage mechanism such as browser session storage or a
          secure HTTP-only cookie. It's important to store access tokens
          securely and avoid exposing them to client-side JavaScript code that
          may be vulnerable to cross-site scripting attacks.
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-bold">Compare SQL and NoSQL databases?</h2>
        <p>
          <span className="text-xl font-bold">SQL databases</span>follow a
          structured data model, organizing data into tables with predefined
          schemas. They are based on the relational model and use SQL for
          querying and manipulating data. SQL databases are ideal for
          applications that require complex querying, transactions, and strong
          data consistency. They excel in scenarios such as financial systems,
          e-commerce platforms, and applications with well-defined data
          structures. <br />
          <span className="text-xl font-bold">NoSQL databases</span>offer a more
          flexible approach to data storage. They employ various data models,
          including key-value, document, columnar, and graph, to handle
          unstructured or semi-structured data without a fixed schema. NoSQL
          databases prioritize scalability and performance by allowing
          horizontal scaling across multiple servers. They are well-suited for
          applications that deal with large volumes of data, real-time
          analytics, and distributed systems. Common use cases include social
          networks, IoT, content management, and recommendation engines. <br />
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-bold">
          What is express js? What is Nest JS?
        </h2>
        <p>
          <span className="text-xl font-bold">Express.js</span> is a web
          application framework for Node.js that allows developers to create
          server-side applications using JavaScript. It offers a minimalist
          approach with features for routing, middleware management, and
          handling HTTP requests and responses. <br />
          <span className="text-xl font-bold">Nest.js</span>is a progressive
          framework for building server-side applications with Node.js. It
          leverages TypeScript and takes inspiration from Angular, providing a
          modular and hierarchical architecture. It promotes code reusability,
          testability, and maintainability through features like dependency
          injection, decorators, middleware, and routing. <br />
        </p>
      </div>
      <div className="my-10">
        <h2 className="text-3xl font-bold ">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p>
          <span className="text-xl font-bold">MongoDB's aggregate </span> is a
          powerful framework for performing advanced data aggregation operations
          on collections of documents. It allows you to process and transform
          data using various aggregation stages, such as grouping, filtering,
          sorting, and projecting,The aggregation framework in MongoDB works by
          creating a pipeline of stages that are applied sequentially to the
          documents in a collection. Each stage performs a specific operation on
          the data and passes the results to the next stage in the pipeline. The
          output of the last stage in the pipeline is the final result of the
          aggregation <br />
          <span className="text-xl font-bold">Its worked by different field</span><br /> Match Stage: The
          match stage filters the documents in the collection based on specified
          criteria. It allows you to select only the documents that match
          specific conditions. Group Stage: The group stage groups the filtered
          documents based on a specified key and applies aggregation operations,
          such as summing, averaging, or counting, to the grouped data. Project
          Stage: The project stage reshapes the documents by including or
          excluding specific fields, renaming fields, or creating computed
          fields using expressions. Sort Stage: The sort stage sorts the
          documents based on one or more fields in ascending or descending
          order. Limit and Skip Stages: The limit stage restricts the number of
          documents returned, while the skip stage skips a specified number of
          documents in the result set. Additional Stages: MongoDB provides
          several other stages, such as unwind, lookup, and facet, that allow
          you to perform more complex operations like flattening arrays,
          performing joins, and facet-based aggregations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
