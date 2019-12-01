import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Name from "./Name";


export default function ElephantItem({ elephant }) {
    const {name, sex, species} = elephant;

    return (
        <Card sex={sex} species={species} >
            <Name>{name}</Name>
        </Card>
    );
}

ElephantItem.propTypes = {
    elephant: PropTypes.object.isRequired,
};