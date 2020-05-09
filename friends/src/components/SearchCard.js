import React from "react";
import styled from "styled-components";

import {axiosWithAuth} from "../utils/axiosWithAuth"

const Container = styled.div`
    background: #9ACD32;
    width: 500px;
    height: 175px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    margin-top: 90px;
      button {
    background:#FF6347;
    height: 40px;
    width: 160px;
    border: none;
    border-radius: 20px;
    color: white;
    font-size: 16px;
    font-family: "FredokaOne-Regular";
    transition: background 0.5s;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      background: orange;
      transition: background 0.5s;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 5px;
  h2 {
    margin: 0;
  }
`;

const SearchCard = ({ name, email, id, setFriends, age }) => {
    const handleOnClick = () => {
        axiosWithAuth().post("http://localhost:5000/api/friends", { name, email, age })
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log(err))
    }
  return (
    <Container>
      <InfoContainer>
        <h2>{name}</h2>
        <p>{email}</p>
      </InfoContainer>
      <button onClick={handleOnClick}>Add friend</button>
    </Container>
  );
};

export default SearchCard;