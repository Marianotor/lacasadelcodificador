const express = require('express')

class Contenedor {
    constructor () {
        this.data = []
    }    

    calculaindice (arreglo, i){
        let indice = false
//        console.log('arreglo', arreglo);
//        console.log("i", i);
        arreglo.forEach((element, ind) => {
//            console.log('element.id', element.id);
            if(element.id == i)
            indice = ind;
        });
//        console.log('calcula indice, indice', indice);
        return indice 
    }
    calculamax (arreglo) {
        var indice = 0
        arreglo.forEach(element => {
            if (element.id > indice)
            indice = element.id;
        });
        return indice 
    }
    getall () {
//        console.log(this.data);
        return this.data
    }
    getbyid (id) {
        let inter = this.getall()
//        console.log(id);
//        console.log(inter);
        let i = this.calculaindice(inter, id)
//        console.log(i);
        if (!i) {
            return { error : 'producto no encontrado' }
//            return mull
        }
        return inter[i]
    }

/*    deletebyid (id) {
       let inter = this.getall()
       let i = this.calculaindice(inter, id)
       this.data.splice(i, 1)
    }*/

    deletebyid (id) {
       let inter = this.getall()
       let i = this.calculaindice(inter, id)
       if (!i){
        return { error : 'producto no encontrado' }
       }{
        this.data.splice(i, 1)
       }
    }

    save (nuevaData) {
        let i = 1
        let inter = this.getall()
        if (inter.length > 0){
            this.data = inter; 
            i = this.calculamax(inter) + 1;}
        
        nuevaData.id = i
        this.data.push(nuevaData)
        return i
    }
    update (nuevaData, id) {
        console.log('clases');
        console.log(nuevaData);
        console.log(id);
        let inter = this.getall()
        let i = this.calculaindice(inter, id)
        nuevaData.id = id
        this.data[i]=nuevaData
             console.log(this.data)
    }
        deleteAll () {
            this.data = []
//                await this.getall()
    }
}

module.exports = {
     Contenedor
}

/*const fs = require ('fs')

class Producto {
    constructor (title, price, thumbnail) {
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
    }
}

class Contenedor {
    constructor (archivo) {
        this.archivo = archivo
        this.data = []

    }    

    calculaindice (arreglo, i){
        let indice = false
        arreglo.forEach((element, ind) => {
            if(element.id === i)
            indice = ind;
        });
        return indice 
    }
    calculamax (arreglo) {
        var indice = 0
        arreglo.forEach(element => {
            if (element.id > indice)
            indice = element.id;
        });
        return indice 
    }
     async getall () {
        try {
        let arrayJson = ''
        let arrayString = await fs.promises.readFile(this.archivo,'ascii')        
        if (arrayString.length > 0) { 
            arrayJson = JSON.parse(arrayString)}
        return arrayJson 
        }
        catch {
            await (fs.promises.writeFile(this.archivo, ''))
            let array1 =  []
            return array1
        }
    }
    async getbyid (id) {
        let inter = this.getall()
        let i = this.calculaindice(inter, id)
        if (!i) {
            return null
        }
        return inter[i]
    }

    async deletebyid (id) {
       let inter = await this.getall()
       let i = this.calculaindice(inter, id)
       inter.splice(i, 1)
       await (fs.promises.writeFile(this.archivo, JSON.stringify(inter)))
    }

    async save (nuevaData) {
        try {
        let i = 1
        let inter = await this.getall()
        if (inter.length > 0){
            this.data = inter; 
            i = this.calculamax(inter) + 1;}
        
        nuevaData.id = i
        this.data.push(nuevaData)
        await (fs.promises.writeFile(this.archivo, JSON.stringify(this.data)))
        return i
        }
        catch {
            console.log('error saving')
        }
        }
        async deleteAll () {
            try {
                this.data = []
                await (fs.promises.writeFile(this.archivo, '[]'))
//                await this.getall()
            }
            catch {
                console.log('error deleteAll')
            }
        }    
    }


module.exports = {
    Producto, Contenedor
}*/