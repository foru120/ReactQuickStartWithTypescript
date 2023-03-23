import React from "react";
import { CountryType } from "./Data";
import CountryItem from "./CountryItem";

const CountryList = (props: Array<CountryType>) => {
    const list = props.countries;

    let countries = list.map((item, index) => {
        return (
            <CountryItem no={item.no} country={item.country} visited={item.visited} />
        );
    });

    return <ul className="list-group">{countries}</ul>;
}

export default CountryList;