import React from 'react';
import Title from '../../atoms/Title';
import Wrapper from '../../atoms/Wrapper';
import { calculateYearsToToday } from '../../../utils/date';
import * as styles from './aboutProyect.styles.module.css';
import exampleInputSearchGIF from 'url:../../../../public/assets/images/example_input_search.gif';

const age = calculateYearsToToday('07/19/1993');
const yearsWorking = calculateYearsToToday('01/15/2018');

const AboutProjectComponent = () => (
    <Wrapper withMaxWidth>
        <Title type='h2'>🤔 De que vamos a hablar</Title>
        <p>
            La idea es mostrar como utilizar Redux y Sagas. Explicando sus principios, como podriamos utilizarlo y
            cuando nos convendría utilizarlos.
        </p>
        <p>
            Voy a mostrar como configurarlo y mostrar como es el flujo y como interactua el componente, tu reducer y
            sagas.
        </p>
        <p>
            Para esto he montado un proyecto en el cual veremos como realizar un input para buscar ciertos resultados y
            que se guarden en nuestro reducer las busquedas recientes
        </p>
        <Title type='h3'> Ejemplo 😱 </Title>

        <div className={styles.image_example}>
            <img src={exampleInputSearchGIF} alt='Ejemplo de un input serch' />
        </div>

        <Title type='h2'>🛠 Librerias</Title>
        <ul className={styles.list}>
            <li>
                <a href='https://reactjs.org' target='_blank'>
                    React
                </a>{' '}
                es una biblioteca de JavaScript para crear interfaces de usuario.
            </li>
            <li>
                <a href='https://redux.js.org/introduction/getting-started' target='_blank'>
                    Redux
                </a>{' '}
                es un contenedor de estado para aplicaciones JavaScript.
            </li>
            <li>
                <a href='https://redux-saga.js.org' target='_blank'>
                    Saga
                </a>{' '}
                es una libreria que tiene como objetivo hacer que los efectos secundarios de las aplicaciones sean más
                fáciles de administrar, más eficientes de ejecutar, fácil de probar y mejor en el manejo de fallas.
            </li>
        </ul>
    </Wrapper>
);

export default AboutProjectComponent;
