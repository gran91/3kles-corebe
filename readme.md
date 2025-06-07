# 3KLES -COREBE

## Introduction

3KLES-CoreBE provides generic classes and interfaces to quickly bootstrap an Express backend.
This package exposes base implementations for applications, routers, controllers and services.

### Exemple minimal

```ts
import { GenericApp, GenericRouter } from '@3kles/3kles-corebe';

const router = new GenericRouter();
const app = new GenericApp();

app.setMainRouter(router);
app.startApp(3000);
```

## API

**IGenericAPI** is an interface with four methods:

- **buildRequest**: Method to build the request api from parameters and data
- **executeRequest**: Method to execute the request
- **processResponse**: Method called to manage response
- **processError**: Method called to manage error response
  
In this module there is a class **HttpApi** that implement **IGenericApi** to manage http/s request protocol.

## App

**IGenericApp** is an interface defined as below:

- **initAppVariable**: Method to init variable (Exemple from dotenv)
- **initModule**: Method to load module
- **initError**: Method to manage error
- **initRoute**: Method to set main router
- **startApp**: Start app with port number

## Router

**IGenericRouter** is an interface defined as below:

- **addController**:Method to add route from controller

## Controller

**IGenericController** is an interface defined as below:

- **execute**: Method to execute request from type
- **setService**:Method to set **IGenericService**
- **getServiceParams**:Method to get service parameters
- **updateParamFromRequest**:Method to update controller parameters from request

## Service

**IGenericService** is an interface defined as below:

- **execute**: Method to execute request from parameters
- **getServiceParams**: Method to get service parameters

## Installation

```bash
npm install
npm run build
npm run dev
```
