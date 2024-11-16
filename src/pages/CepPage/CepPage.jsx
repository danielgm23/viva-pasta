import React from "react";
import CepFormComponent from "../../components/CEP/CepFormComponent";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "../../components/Header";

export function CepPage(){
    return (
        <>
            <Container>               
                <CepFormComponent />
            </Container>
            
        </>
    );
}

export default CepPage;