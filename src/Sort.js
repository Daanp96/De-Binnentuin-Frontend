import React from "react";

const Sort = (props) => {
    return(
        <section className="menulist_sort">
            <form onSubmit={props.getSort} method="get">
                <select name="sort">
                    <option value="default">Niet gesorteerd</option>
                    <option value="alphabetical">Alfabet: van A naar Z</option>
                    <option value="reverse">Alfabet: van Z naar A</option>
                    <option value="high_to_low">Prijs: Hoog naar Laag</option>
                    <option value="low_to_high">Prijs: Laag naar Hoog</option>
                </select>
                <button type="submit" name="sort">Sorteer</button>
            </form>
        </section>
    );
}

export default Sort;