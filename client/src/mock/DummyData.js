const image = "../mock/data-not-found.png";

const john = {
    id: 1,
    name: "John Smith",
    dob: "1990-09-16",
    email: "johnsmith@email.com",
    role: "Worker",
    image: image,
};

const sue = {
    id: 2,
    name: "Sue Doe",
    dob: "1986-04-02",
    email: "johnsmith@email.com",
    role: "HR",
    image: image,
};

export const brad = {
    id: 3,
    name: "Brad Pitty with a very long name",
    dob: "1963-12-18",
    email: "johnsmith@email.com",
    role: "Admin",
    image: image,
};

export const DummyUserData = [john, sue, brad];
export const DummyJobsData = [
    {
        id: 1,
        jobType: "Cutout knife template",
        materials: ["Steel"],
        duration: "1hr",
        workers: [john],
        location: "Building 1, Area 2",
        status: "To Do",
    },
    {
        id: 2,
        jobType: "Cleaning",
        materials: ["Mop", "Broom", "Bucket"],
        duration: "2hr",
        workers: [john],
        location: "Building 4, Area 1",
        status: "In Progress",
    },
    {
        id: 3,
        jobType: "CNC Machine bolts",
        materials: ["Steel"],
        duration: "30min",
        workers: [john],
        location: "Building 1, Area 2",
        status: "Completed",
    },
];
