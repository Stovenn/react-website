import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../components/Container/Container";
import { CardRow } from "../../components/CardRow/CardRow";

export const Hiraganas = ({ list }) => {
  let history = useHistory();

  return (
    <Container>
        {list.map((r) => {
                return <CardRow key={r} row={r.row} />;
            })
        }
    </Container>
  );
};
