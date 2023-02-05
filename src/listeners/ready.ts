import type { Client } from "discord.js"
import { Commands } from "../commands"

export default (client: Client) => {
    client.on("ready", async () => {
        const { user, application } = client
        
        if(!user || !application) return

        await application.commands.set(Commands)
    
        console.log(`Logged in as ${user.username}!`)
    })
}