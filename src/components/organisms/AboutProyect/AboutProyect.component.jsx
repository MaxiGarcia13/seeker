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
        <section className={styles.header}>
            <img
                className={styles.header_image}
                alt='Mi foto'
                src='https://pbs.twimg.com/profile_images/1298388623298048001/L2eZz7TF_400x400.jpg'
            />
            <div className={styles.header_content}>
                <Title type='h2'>👨🏼‍💻 Quien soy? </Title>
                <p>
                    Hola soy <b>Maximiliano Garcia</b>, tengo {age} años.
                </p>
                <p>Llevo {yearsWorking} años trabajando como programador front-end.</p>
                <p>
                    Me gusta programar es algo que me divierte mucho y me gusta investigar sobre temas nuevos o buenas
                    practicas.
                </p>

                <Title type='h3'> Mis redes: </Title>
                <p>
                    <a href='https://www.linkedin.com/in/maximilianogarcia13/' target='_blank' className={styles.link}>
                        💼 Linkeding
                    </a>

                    <a href='https://twitter.com/Maxigarcia__' target='_blank' className={styles.link}>
                        🐦 Twitter
                    </a>
                </p>
            </div>
        </section>

        <Title type='h2'>🤔 De que vamos a hablar</Title>
        <p>
            La idea es mostrar como utilizar Redux y Sagas. Explicando sus principios, como podriamos utilizarlo y
            cuando nos combendria utilizarlos.
        </p>
        <p>
            Voy a mostrar como configurarlo y mostrar como es el flujo y como interactua el componente, tu reducer y
            sagas.
        </p>
        <p>
            Para esto he montado un proyecto en el cual veremos como realizar un input para buscar ciertos resutados y
            que se guarden en nuestro reducer las busquedas recientes
        </p>
        <Title type='h3'> Ejemplo 😱 </Title>

        <div className={styles.image_example}>
            <img src={exampleInputSearchGIF} alt='Ejemplo de un input serch' />
        </div>

        <Title type='h2'>🛠 Tecnologias</Title>
        <ul className={styles.list}>
            <li>
                <a href='https://reactjs.org' target='_blank'>
                    React
                </a>{' '}
                is a A JavaScript library for building user interfaces.
            </li>
            <li>
                <a href='https://redux.js.org/introduction/getting-started' target='_blank'>
                    Redux
                </a>{' '}
                Redux is a predictable state container for JavaScript apps.
            </li>
            <li>
                <a href='https://redux-saga.js.org' target='_blank'>
                    Saga
                </a>{' '}
                is a library that aims to make application side effects easier to manage, more efficient to execute,
                easy to test, and better at handling failures.
            </li>
        </ul>
    </Wrapper>
);

export default AboutProjectComponent;
