import { Command } from "../command";

export const Hello: Command = {
    name: "hello",
    description: "Says hello!",
    run: async (_client, interaction) => {
        const content = "Hello there!"
        
        await interaction.followUp({ 
            ephemeral: true,
            content 
        });
    }
}
