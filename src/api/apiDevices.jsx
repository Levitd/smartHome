const apiDevices = () => [
    { name: "Отопление", id: 1 },
    { name: "4 реле", id: 2 },
    { name: "Освещение справа", id: 3 },
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(apiDevices);
        }, 500);
    });

export default {
    fetchAll
};
