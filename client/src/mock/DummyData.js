const john = {
    id: 1,
    name: "John Smith",
    dob: "1990-09-16",
    email: "johnsmith@email.com",
    role: "Worker",
    image: "src\mock\data-not-found.png"
};

const sue = {
    id: 2,
    name: "Sue Doe",
    dob: "1986-04-02",
    email: "johnsmith@email.com",
    role: "HR",
    image: "src\mock\data-not-found.png"
};

const brad = {
    id: 3,
    name: "Brad Pitty",
    dob: "1963-12-18",
    email: "johnsmith@email.com",
    role: "Admin",
    image: "src\mock\data-not-found.png"
};

export function DummyUserData() {
    return [john, sue, brad];
}