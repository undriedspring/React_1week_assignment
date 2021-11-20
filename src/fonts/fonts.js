import { createGlobalStyle } from "styled-components";
import LAB_digital from "./LAB_digital.woff";
import Cafe24Ohsquareair from "./Cafe24Ohsquareair.woff";

export default createGlobalStyle`
@font-face {
    font-family: 'LAB_digital';
    src: loceal('LAB_digital'),
    url(${LAB_digital}) format('woff');
    font-weight: normal;
    font-style: normal;
};

@font-face {
    font-family: 'Cafe24Ohsquareair';
    src: local('Cafe24Ohsquareair'),
    url(${Cafe24Ohsquareair}) Format('ttf');
};
`
