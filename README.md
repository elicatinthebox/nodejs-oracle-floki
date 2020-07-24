# nodejs-oracle-floki
A nodejs oracle capable to read and send data from/to a Devoleum smart contract


## Installation

In the root directory, run:

### `npm i`

Create and config the .env file

```
PORT=8080
INFURA_API="https://rinkeby.infura.io/v3/contract/YOURKEY"
NETWORK_ID=4
```
## Start the server

In the root directory, run:

### `npm start`

The development uses nodemon can be started using:

### `npm run dev`


## API


### Contract

**GET (cached in memory for 1 day)**

* "v3/contract/merchant/:id" get Merchant info by the merchant ID (address)
* "v3/contract/merchant/:id/histories" get all the merchant histories by the merchant ID (address)
* "v3/contract/history/:historyid" get the history info by the history ID (number)
* "v3/contract/allhistories" get all the histories
* "v3/contract/allhistories/:category" get all the histories by the history category (string)
* "v3/contract/step/:stepid" get the step info by the step ID (number)
* "v3/contract/history-steps/:historyid" get all the steps by the history ID (number)

### Utils

**GET**

* "v3/utils/test" simple get to see if the server is responding

**POST**

* "v3/utils/headers" requires a "url" property, get the headers of an URL request for example `{"url": "https://raw.githubusercontent.com/Devoleum/templates-json/master/steps/harvest.json"}`, especially used to get the content length.


## Contributors ✨
Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://it.linkedin.com/in/lorenzo-zaccagnini"><img src="https://avatars2.githubusercontent.com/u/18169376?s=400&u=697698bf9973ab54be5b8eadbf7d1c7c083d23e6&v=4" width="100px;" alt=""/><br /><sub><b>Lorenzo Zaccagnini</b></sub></a><br /><a href="https://it.linkedin.com/in/lorenzo-zaccagnini" title="LinkedIn">💬</a> <a href="https://github.com/LorenzoZaccagnini" title="GitHub">📖</a></td>
   </tr>
    <td align="center"><a href=" "><img src="https://avatars1.githubusercontent.com/u/22495052?s=400&u=bfa41aa3de72d097e172add801860178358e9362&v=4" width="100px;" alt=""/><br /><sub><b>Elisa Romondia</b></sub></a><br /><a href="https://fr.linkedin.com/in/elisa-romondia" title="LinkedIn">💬</a> <a href="https://github.com/elisaromondia" title="GitHub">📖</a></td>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## LICENSE

[MOZILLA](LICENSE.md)

