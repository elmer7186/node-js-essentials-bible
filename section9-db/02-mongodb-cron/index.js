/**
 * Mongo db project
 * 
 * Extract news from page for save in mongo db
 * 
 * -----installations-----
 * mongoose   -> mongodb cliente conect library
 * node-cron  -> node js cron utility
 * axios      -> http client
 * cheerio    -> process html library
 * dotenv     -> enviromentals variables with node js
 * -----------------------
 */
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const axios = require('axios').default;
const cheerio = require('cheerio');
const cron = require('node-cron');
const { BreakingNew } = require('./models');

mongoose.connect(MONGO_URI, { useNewUrlParser: true });

cron.schedule('0 */4 * * *', async () => {
    console.log('Cron Job Executed!');
    const html = await axios.get('https://cnnespanol.cnn.com');
    const $ = cheerio.load(html.data);
    const titles = $('.news__title');
    titles.each((index, element) => {
        const breakingNew = {
            title: $(element)
                .text()
                .toString(),
            link: $(element)
                .children()
                .attr('href')
        }

        BreakingNew.create([breakingNew]).then(console.log);
    });
});

