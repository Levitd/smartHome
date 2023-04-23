const devices = [
    { name: "Отопление", _id: 1 },
    { name: "4 реле (Насос, Освещение бассейн, Освещение ночь слева", _id: 2 },
    { name: "Освещение справа", _id: 3 },
    { name: "Освещение гараж", _id: 4 },
    { name: "Вода, 2 емкости", _id: 5 }
];

const fetchAll = () =>
    new Promise((resolve) => {
        console.log(devices, typeof devices);
        window.setTimeout(function () {
            resolve(devices);
        }, 500);
    });

const getById = (id_device) =>
    new Promise((resolve) => {
        console.log('id_device', id_device, typeof Number(id_device), devices, typeof devices);
        window.setTimeout(function () {
            const answer = resolve(devices.find((el) => toString(el._id) === toString(id_device)));
            console.log('answer', answer);
            return answer;
        }, 500);
    });

export default {
    fetchAll,
    getById
};
