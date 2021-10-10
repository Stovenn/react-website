import { createGlobalStyle } from "styled-components";

import RalewayRegular from './RalewayRegular.ttf'
import RalewayLight from './RalewayLight.ttf'
import RalewayBold from './RalewayBold.ttf'

import NotoSansJPRegular from './NotoSansJPRegular.otf'
import NotoSansJPThin from './NotoSansJPThin.otf'
import NotoSansJPBold from './NotoSansJPBold.otf'

export default createGlobalStyle`
 @font-face {
     font-family: 'NotoSansJP-regular';
     src: local('NotoSansJP-regular'),
     url(${NotoSansJPRegular}) format('opentype');
 }
 @font-face {
     font-family: 'NotoSansJP-thin';
     src: local('NotoSansJP-thin'),
     url(${NotoSansJPThin}) format('opentype');
 }
 @font-face {
     font-family: 'NotoSansJP-bold';
     src: local('NotoSansJP-bold'),
     url(${NotoSansJPBold}) format('opentype');
 }
 @font-face {
     font-family: 'Raleway-regular';
     src: local('Raleway-regular'),
     url(${RalewayRegular}) format('truetype');
 }
 @font-face {
     font-family: 'Raleway-light';
     src: local('Raleway-light'),
     url(${RalewayLight}) format('truetype');
 }
 @font-face {
     font-family: 'Raleway-bold';
     src: local('Raleway-bold'),
     url(${RalewayBold}) format('truetype');
 }
`