import React, { useState, useMemo } from 'react';
import axios from 'axios';
import Cabecalho from '../../components/Cabecalho/cabecalho';
import Rodape from '../../components/Rodape/rodape';
import Card from '../../components/Card/card';
import { Container, Title, Slogan, Eventos, EventosLista } from './homepage.styles';

function Homepage({ eventos }) {
    const [filtroTitulo, setFiltroTitulo] = useState('');

    const eventosFiltrados = useMemo(() => {
        return eventos.filter(evento =>
            evento.titulo.toLowerCase().includes(filtroTitulo.toLowerCase())
        );
    }, [eventos, filtroTitulo]);

    const handleInputChange = (e) => {
        setFiltroTitulo(e.target.value);
    };

    return (
        <>
            <Cabecalho />
            <Container>
                <Title>Bem vindo a Casa de eventos!</Title>
                <Slogan>Essa é a casa de festas que realiza sonhos.</Slogan>
                <input
                    type="text"
                    placeholder="Procure por eventos"
                    value={filtroTitulo}
                    onChange={handleInputChange}
                />
                <Eventos>
                    <EventosLista>
                        {eventosFiltrados.map((evento, index) => (
                            <Card
                                key={index}
                                titulo={evento.titulo}
                                urlImagem={evento.url_da_imagem}
                                data={evento.data}
                                horario={evento.horario}
                                id={evento.id}
                            />
                        ))}
                    </EventosLista>
                </Eventos>
            </Container>
            <Rodape />
        </>
    );
}

export default Homepage;