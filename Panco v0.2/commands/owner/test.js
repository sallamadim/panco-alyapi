const Discord = require('discord.js')

const { mongo } = require('../../config/config.json')
const { Database } = require('g9db')
const db = new Database(mongo,"pancodb")

module.exports = {
name: "test",
aliases: [],
/**
* @param {Discord.Message} message
* @param {Discord.Client} client
* @param {String[]} args
*/
run: async (client, message, args) => {


  },
}