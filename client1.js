var mqtt = require('mqtt')
 
//conecta ao servidor
client = mqtt.createClient(1883, 'localhost');
 
///subscribe para o topico presence
client.subscribe('presence');
 
console.log('Client publishing.. ');
//publish mensagem em presence
client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date());
 client.end();