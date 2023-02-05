import { BaseInteraction, Client, CommandInteraction } from "discord.js"
import { Commands } from "../commands"

export default (client: Client) => {
    client.on("interactionCreate", async (interaction) => {
        if(interaction.isCommand())
            await handleSlashCommand(client, interaction)
    })
}

const handleSlashCommand = async (client: Client, interaction: CommandInteraction) => {
    const slashCommand = Commands.find(command => command.name === interaction.commandName)

    if(!slashCommand) {
        await interaction.followUp({ content: "An error occurred.", ephemeral: true })
        return
    }

    await interaction.deferReply()

    slashCommand.run(client, interaction)
}
