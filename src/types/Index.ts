export type City = {
    _id: number;
    city_code: string;
    city_name_he: string;
    city_name_en: string;
}

export type Weather = {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: number;
        wind_kph: number;
        condition: {
            text: string;
            icon: string;
        };
    };
}

export type HistoryItem = {
   date: string;
   name: string;
   country: string;
}
