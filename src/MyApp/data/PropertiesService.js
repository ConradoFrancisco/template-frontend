export default class PropertiesService {
  constructor(service) {
    this.service = service;
  }

  getProperty() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }

  getProperties(limit, offset, filters,token) {
    return new Promise(async (resolve, reject) => {
      try {
        
          const datas = await fetch (`https://cabaprop.ar/api/v1/properties/shared?offset=${offset}&limit=${limit}`,{
              method:'POST',
              headers:{
                  Authorization: 'Bearer ' + token,
                  'accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify (filters)
          })
  
        if (datas.ok) {
          const data = await datas.json();
          resolve(data);
        } else {
          reject(`Error al obtener propiedades: ${datas.status}`);
        }
      } catch (error) {
        reject(`Error al obtener propiedades: ${error.message}`);
      }
    });
  }

  getPropertiesByUser(limit, offset, filters) {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }

  createProperties() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }

  updateProperties() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }

  deleteProperties() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
}
