const mongoose = require('mongoose')

async function main() {
    try {
        await mongoose.connect(
            "mongodb+srv://DanielGPO:EZ4r7SSTXhOOTt9S@cluster0.q3kakrf.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log('Conectado ao banco');
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;
