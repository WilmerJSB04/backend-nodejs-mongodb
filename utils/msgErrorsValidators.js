async function resolveObj(data) {
    const errors = data
    if(errors.length != 0){
      const arrError_ = await forEachErrors(errors)
      return arrError_;
    }
    return []
  }

async function forEachErrors(errors){
    let arrError = []
    errors.forEach(element => {
        let objErrors = {}
        objErrors[element.path] = element.msg
        arrError.push(objErrors)
    });
    return await getAttributos(arrError)
}

async function getAttributos(arrayDeObjetos) {
    let atributosRepetidos = {};

    arrayDeObjetos.forEach(objeto => {
      for (let atributo in objeto) {
        if (atributosRepetidos.hasOwnProperty(atributo)) {
          atributosRepetidos[atributo].push(objeto[atributo]);
        } else {
          atributosRepetidos[atributo] = [objeto[atributo]];
        }
      }
    });
    return atributosRepetidos;
}

module.exports = {forEachErrors, resolveObj}