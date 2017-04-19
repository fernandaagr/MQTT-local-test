var mosca = require('mosca')  //importa o mosca

//configurações do broker
var settings = {
  port: 1883, //porta de operação do MQTT
  persistence: mosca.persistence.Memory
};

//cria um broker MQTT com base nas configurações e inicia
var server = new mosca.Server(settings, function() {
  console.log('Mosca server is up and running')
});

server.published = function(packet, client, cb) {
  if (packet.topic.indexOf('echo') === 0) {
    return cb();
  }
 
  var newPacket = {
    topic: 'echo/' + packet.topic,
    payload: packet.payload,
    retain: packet.retain,
    qos: packet.qos
  };
 
  console.log('newPacket', newPacket);
  
  server.publish(newPacket, cb);
}