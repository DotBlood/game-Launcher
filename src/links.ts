export interface IRouter {
    to: string;
    img: string;
    key: string;
    plaseholder: string;
}

export const linkArr: IRouter[] = [
    {
        to: "/shop",
        img: "./asd",
        key: "shop",
        plaseholder: "Магазин",
    },
    {
        to: "/library",
        img: "./asd",
        key: "lib",
        plaseholder: "Библиотека",
    },
    {
        to: "/download",
        img: "./asd",
        key: "download",
        plaseholder: "Загрузки",
    },
    {
        to: "/support",
        img: "./asd",
        key: "support",
        plaseholder: "Поддержка",
    },
];
