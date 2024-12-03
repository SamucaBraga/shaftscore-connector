import mqtt from 'mqtt';
import dotenv from 'dotenv';

dotenv.config();

const footballTopic = '';
const basketballTopic = '';
const tennisTopic = '';

enum ConnectionStatus {
  CONNECTED = 0,
  REFUSED = 1,
  INVALID_CLIENT_IDENTIFIER = 2,
  SERVER_UNAVAILABLE = 3,
  BAD_USERNAME_OR_PASSWORD = 4,
  NOT_AUTHORIZED = 5
}

const onConnect = (client: mqtt.MqttClient, userdata: any, flags: mqtt.ClientOptions, rc: number) => {
  // The value of rc indicates success or not:
  // 0: Connection successful
  // 1: Connection refused - incorrect protocol version
  // 2: Connection refused - invalid client identifier
  // 3: Connection refused - server unavailable
  // 4: Connection refused - bad username or password
  // 5: Connection refused - not authorised
  // 6-255: Currently unused.

  console.log('Connected to MQTT');

  if (rc === ConnectionStatus.CONNECTED) {
    // Subscribe to related topics
    client.subscribe(footballTopic, (err) => {
      if (err) {
        console.error(`Failed to subscribe to ${footballTopic}: ${err}`);
      }
    });
    client.subscribe(basketballTopic, (err) => {
      if (err) {
        console.error(`Failed to subscribe to ${basketballTopic}: ${err}`);
      }
    });
    client.subscribe(tennisTopic, (err) => {
      if (err) {
        console.error(`Failed to subscribe to ${tennisTopic}: ${err}`);
      }
    });
  } else if (rc === ConnectionStatus.BAD_USERNAME_OR_PASSWORD || rc === ConnectionStatus.NOT_AUTHORIZED) {
    console.log('If the verification fails, please confirm whether the username, password, and authorized IP are correct.');
  } else {
    console.error(`Connection failed with status code: ${rc}`);
  }
};

const onMessage = (topic: string, message: Buffer) => {
  console.log('Topic:', topic);
  try {
    const parsedMessage = JSON.parse(message.toString());
    console.log(parsedMessage);
  } catch (error) {
    console.error('Error parsing message payload:', error);
  }
};

export const connectMqtt = () => {

  const username = process.env.API_USERNAME;

  const password = process.env.API_KEY;

  const client = mqtt.connect(`mqtt://${process.env.API_WS_DOMAIN}:8883`, {
    username: username,
    password: password,
    protocol: 'mqtts',
    reconnectPeriod: 1000,
    rejectUnauthorized: false
  });

  console.log('Attempting to connect to MQTT...');

  client.on('connect', () => {
    console.log('Connected to MQTT');
    onConnect(client, {}, {}, 0);
  });

  client.on('error', (error) => {
    console.error('MQTT connection error:', error);
  });

  client.on('message', onMessage);

  client.on('disconnect', () => {
    console.log('MQTT client disconnected.');
  });
};

// connectMqtt();
