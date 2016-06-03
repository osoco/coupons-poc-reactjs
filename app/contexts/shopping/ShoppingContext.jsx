/*
Presentational component that displays a context for shopping with coupons.
This component has been written in React's class style.
*/

import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './shopping.scss';

// import Swagger from 'swagger-client';


class ShoppingContext extends Component {
  render() {



// var client = new Swagger({
//   url: 'https://raw.githubusercontent.com/osoco/coupons-poc-contract/develop/coupons.yaml',
//   // Al poner la clave a este nivel se añade un header, pero también en la petición a coupons.yaml.
//   // Falla en ese punto y no sigue.
//   // authorizations : {
//   //   api_key: new Swagger.ApiKeyAuthorization('api_key', 'Test', 'header')
//   // },
//   usePromise: true})
//   .then(function(client) {
//     client.setHost('localhost:5050');
//     client.setBasePath('/api');
//     // Al poner la clave aquí, no añade el header
//     // client.clientAuthorizations.add("api_key", new Swagger.ApiKeyAuthorization('api_key', 'Test', 'header'));
//       console.log(client);
//     client.coupon.getAllCoupons({})//, {//responseContentType: 'application/json'
//         // y al ponerla aquí tampoco añade el header
//         // clientAuthorizations: {
//         //   api_key: new Swagger.ApiKeyAuthorization('api_key', 'Test', 'header')
//         // }
//     .then(function(coupons){
//         console.log(coupons);
//     })
//     .catch(function(error) {
//       console.log('Oops!  failed with message: ' + error.statusText);
//     });
// });

    return (
        <div>
            <h1>Shopping...</h1>
        </div>
    );
  }
}

// Apply the CSSModules decorator to the component. 
// Note that once the spec stabilizes Babel will support annotation style 
// syntax for this: @CSSModules(styles)
export default CSSModules(ShoppingContext, styles);