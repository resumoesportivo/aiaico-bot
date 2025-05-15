const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('new_chat_members', (msg) => {
  const chatId = msg.chat.id;
  const nome = msg.from.first_name || "Caótico";
  bot.sendMessage(chatId, `Seja bem-vindo, ${nome}! Você entrou no caos da $AIAICO. Pegue seu copo e prepare-se.`);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Salve, caótico! Eu sou o bot oficial da $AIAICO. Use /stickers ou /caos para se divertir.');
});

bot.onText(/\/stickers/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Toma um sticker aleatório da IA:');
  bot.sendSticker(msg.chat.id, 'https://tlgrm.eu/_/stickers/7f5/5b8/7f55b8f7-3bb3-4bc1-a476-36b011b45df7/6.webp');
});

bot.onText(/\/caos/, (msg) => {
  const frases = [
    'Bugou? Melhor assim.',
    'Explodiu? Talvez suba.',
    'AIAICO não erra, só delira.',
    'Nada faz sentido. E tá funcionando.',
  ];
  const frase = frases[Math.floor(Math.random() * frases.length)];
  bot.sendMessage(msg.chat.id, frase);
});

bot.on('message', (msg) => {
  const texto = msg.text.toLowerCase();
  if (texto.includes("bugou")) {
    bot.sendMessage(msg.chat.id, "Se não bugou, não é $AIAICO.");
  }
  if (texto.includes("explodiu")) {
    bot.sendMessage(msg.chat.id, "Explodiu? Então é hora de rir.");
  }
});
