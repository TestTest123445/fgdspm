// Using require statements to include necessary modules
const http = require('http');

const port = process.env.PORT || 3000;

const { Telegraf } = require('telegraf');

// Using an environment variable for the token
const TOKEN = process.env.TOKEN;

const bot = new Telegraf(TOKEN);

// Creating the server
const server = http.createServer(app);

// Server listens on the specified port
server.listen(port, () => {
    console.log(`Started on port ${port}`); // Corrected to use template literals
});

// Web link for the web app
const web_link = "https://dreamy-haupia-0f980c.netlify.app/";

// Setting up the bot's start command
bot.start((ctx) => 
    ctx.reply('Welcome 1234', {
        reply_markup: {
            keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
        },
    })
);

// Launching the bot
bot.launch().catch((err) => {
    console.error('Error launching bot:', err);
});
