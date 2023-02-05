import * as dotenv from "dotenv"
import { Client } from "discord.js"
import ready from "./listeners/ready"
import interactionCreate from "./listeners/interactionCreate"

dotenv.config()

const client = new Client({
    intents: [],
})

client.login(process.env.TOKEN)

ready(client)
interactionCreate(client)

console.log(client)