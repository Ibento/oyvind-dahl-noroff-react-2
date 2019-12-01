import styled from "styled-components";

const Card = styled.div`
    width: 500px;
    margin: 20px  auto;
    padding: 1em;
    color: ${props => (props.sex === "Female" ? "white" : "black")};
    box-shadow ${props => (props.species === "Asian" ? "5px 5px 4px #000;" : "none")};
    background: ${props => (props.sex === "Female" ? "red" : "green")};
    border-radius:  ${props => (props.theme.border.primary)};
`;

export default Card;