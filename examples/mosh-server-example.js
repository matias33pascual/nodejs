const express = require("express");
const simpleExample = express();

const courses = [
    { id: 1, name: "course 1" },
    { id: 2, name: "course 2" },
    { id: 3, name: "course 3" },
];

simpleExample.get("/", (request, response) => {
    response.send("Hola mundo, desde simple example");
});

simpleExample.get("/api/courses", (request, response) => {
    response.send(JSON.stringify(courses));
});

simpleExample.get("/api/courses/:id", (request, response) => {
    const course = courses.find(
        (element) => element.id === parseInt(request.params.id)
    );

    if (!course) {
        response.status(404).send("The course with the given ID was not found");
    }

    const query = request.query;

    switch (query["get"]) {
        case "id":
            return response.send(course.id.toString());

        case "name":
            return response.send(course.name);

        default:
            return response.send(course);
    }
});

simpleExample.get("/api/developers/:id", (request, response) => {
    response.send(request.params.id);
});

simpleExample.get("/api/developers/:id/:name", (request, response) => {
    response.send(request.params);
});

simpleExample.get("/api/query", (request, response) => {
    response.send(request.query);
});

module.exports = simpleExample;
