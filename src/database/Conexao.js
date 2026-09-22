import notifier from "node-notifier"
import "dotenv/config"
import { initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"

let bancoDeDados
 
try {
  initializeApp()
 
  bancoDeDados = getFirestore()

    notifier.notify({
    title: "superflix",
    message: "BANCO DE DADOS CONECTADO!",
    icon: "/"
  })

} 
catch (erro) {
    console.log(erro.message)
}

export {bancoDeDados}

