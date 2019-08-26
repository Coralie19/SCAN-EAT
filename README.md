# SCAN-EAT

Scan'Eat is an application that aims to reduce food waste by scanning your products' barcodes. 
It allows you to keep track of their expiration dates so that you know by what date to eat them. 

Let's start!

## Screenshots
<p align="center">
    <img src="./SCANEAT.PNG" width="600px" />
</p>

## Getting started

### Prerequesities
* MongoDB

### Installation

1. Begin by forking this repository, and cloning to your computer. 

 ```bash
   git clone https://github.com/Coralie19/SCAN-EAT.git
 ```
   
2.  Install the necessary dependencies. Run `npm i` in both the `client` and `server` folders.  


   ```bash
    npm i
  ```
  
### To Start

Begin by starting MongoDB.

To start the backend, navigate to the `server` folder and run:

   ```bash
    node index.js
  ```

If the server has successfully started, a console log will appear in the terminal stating "Listening on port...".

To start the frontend, navigate to the `client` folder and run:

   ```bash
    npm start
  ```
  
This will build the React app, and open it in the browser.


## Tech Stack

* React - frontend
* Express - backend framework
* MongoDb - database
* quaggaJS - Barcode scanner (https://serratus.github.io/quaggaJS/)
