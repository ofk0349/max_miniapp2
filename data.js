// Данные, аналогичные результатам запросов из вашей БД
const DB = {
    // get_contacts() -> admin_contacts
    adminContacts: {
        address: "368870, Республика Дагестан, Тарумовский район, село Тарумовка, ул. Шамиля Магомедова, д. 19",
        phone1: "8 (87261) 3-10-20",
        phone2: "8 (87261) 3-12-10",
        email: "tarumrayon@e-dag.ru",
        schedule: "График работы: в будние дни: с 9:00 по 18:00, обед с 13:00 по 14:00",
        max: "https://max.ru/id531000986_gos",
        vk: "https://vk.ru/tarumraion",
        site: "https://тарумовка.рф/"
    },

    // get_reception_info() -> reception_info
    receptionInfo: [
        {
            name: "Джамалов Василий Абдурашидович",
            job_title: "Глава района",
            phone: "8 (87261) 3-10-20",
            email: "tarumrayon@e-dag.ru",
            description: "Личный прием граждан главой района: каждый четверг с 10.00 до 14.00"
        },
    ],

    // get_villages_contacts() -> villages_contact
    villages: [
        { name: "село Александро-Невское", site: "https://aleksandronevskoe-r82.gosweb.gosuslugi.ru/"},
		{ name: "сельсовет Калиновский", site: "https://hanovap-01.gosuslugi.ru/"},
		{ name: "село Карабаглы", site: "https://karabagly-r82.gosweb.gosuslugi.ru/"},
		{ name: "село Коктюбей", site: "https://selo-koktyubej-r82.gosweb.gosuslugi.ru/"},
		{ name: "сельсовет Новогеоргиевский", site: "https://novogeorgievskiy.ru/"},
		{ name: "село Новодмитриевка", site: "https://novodmitrievka.ru/"},
		{ name: "село Новоромановка", site: "https://novoromanovka-r82.gosweb.gosuslugi.ru/"},
		{ name: "село Раздолье", site: "https://morazdolie.ru/"},
		{ name: "сельсовет Таловский", site: "https://s-s-talovskij-r82.gosweb.gosuslugi.ru/"},
		{ name: "село Тарумовка", site: "https://tarumovka-r82.gosweb.gosuslugi.ru/"},
		{ name: "сельсовет Уллубиевский", site: "https://s-s-ullubievskij.gosuslugi.ru/"}, 
		{ name: "сельсовет Юрковский", site: "https://s-s-yurkovskij.gosuslugi.ru/"},
		{ name: "село Кочубей", site: "https://kochubej-r82.gosweb.gosuslugi.ru/"}, 
		{ name: "село Кочубей", site: "https://kochubej-r82.gosweb.gosuslugi.ru/"},
    ],

    // get_school_contacts() -> school_contacts
    schools: [
        {
          name: "МКОУ 'Александро-Невская СОШ'",
            max: "https://max.ru/id531004902_gos"
        },
		{
            name: "МКОУ 'Иммунная ООШ'",
            max: "https://max.ru/id531004853_gos"
        },
        {
            name: "МКОУ 'Калиновская СОШ'",
            max: "https://max.ru/id531004885_gos"
        },
        {
            name: "МКОУ 'Карабаглинская СОШ'",
            max: "https://max.ru/id531004892_gos"
        },
        {
            name: "МКОУ 'Коктюбейская ООШ'",
            max: "https://max.ru/id531004839_gos"
        },
        {
            name: "МКОУ 'Кочубейская СОШ №1'",
            max: "https://max.ru/id531004797_gos"
        },
        {
            name: "МКОУ 'Кочубейская СОШ №2'",
            max: "https://max.ru/id531004807_gos"
        },
        {
            name: "МКОУ 'Кузнецовская ООШ'",
            max: "https://max.ru/id531004860_gos"
        },
        {
            name: "МКОУ 'Новоромановская СОШ'",
            max: "https://max.ru/id531004814_gos"
        },
        {
            name: "МКОУ 'Ново-Георгиевская СОШ'",
            max: "https://max.ru/id531004910_gos"
        },
        {
            name: "МКОУ 'Ново-Дмитриевская СОШ'",
            max: "https://max.ru/id531004772_gos"
        },
        {
            name: "МКОУ 'Привольненская СОШ'",
            max: "https://max.ru/id531004846_gos"
        },
        {
            name: "МКОУ 'Раздольевская СОШ'",
            max: "https://max.ru/id531004941_gos"
        },
        {
            name: "МКОУ 'Рассветовская СОШ'",
            max: "https://max.ru/id531010864_gos"
        },
        {
            name: "МКОУ 'Таловская СОШ'",
            max: "https://max.ru/id531009900_gos"
        },
        {
            name: "МКОУ 'Тарумовская СОШ'",
            max: "https://max.ru/id531004821_gos"
        },
        {
            name: "МКОУ 'Юрковская СОШ'",
            max: "https://max.ru/id531004765_gos"
        },
        {
            name: "МКДОУ 'Александро-Невский детский сад Колокольчик'",
            max: "https://max.ru/id531004927_gos"
        },
        {
            name: "МКДОУ 'Калиновский детский сад Теремок'",
            max: "https://max.ru/id531006314_gos"
        },
        {
            name: "МКДОУ 'Карабаглинский детский сад Радуга'",
            max: "https://max.ru/id531010293_gos"
        },
        {
            name: "МКДОУ 'Кочубейский детский сад Чебурашка'",
            max: "https://max.ru/id531004927_gos"
        },
        {
            name: "МКДОУ 'Кочубейский детский сад Солнышко'",
            max: "https://max.ru/id531004821_gos"
        },
        {
            name: "МКДОУ 'Ново-Георгиевский детский сад Аленка'",
            max: "https://max.ru/id531010487_gos"
        },
        {
            name: "МКДОУ 'Ново-Дмитриевский детский сад Солнышко'",
            max: "https://max.ru/id531009996_gos"
        },
        {
            name: "МКДОУ 'Раздольевский детский сад Аленушка'",
            max: "https://max.ru/id531004765_gos"
        },
        {
            name: "МКДОУ 'Рассветовский детский сад Гнездышко'",
            max: "https://max.ru/id531004927_gos"
        },
        {
            name: "МКДОУ 'Таловский десткий сад Ивушка'",
            max: "https://max.ru/id531004821_gos"
        },
        {
            name: "МКДОУ 'Тарумовский детский сад Тополек'",
            max: "https://max.ru/id531004765_gos"
        },
       {
            name: "МКДОУ 'Тарумовский детский сад Радуга'",
            max: "https://max.ru/id531004765_gos"
        }
    ]
};