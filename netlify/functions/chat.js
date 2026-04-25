exports.handler async function(event) {

const headers = {

Access-Control-Allow-Origin': '*'

'Access-Control-Allow-Headers': 'Content-Type',

Access-Control-Allow-Methods': 'POST, OPTIONS'

if (event.httpMethod 'PTIONS') return { statusCode: 200, headers, body: };

try {

const { system, user } JSON.parse (event.body);

const response await fetch('https://api.anthropic.com/v1/messages', {

method: 'POST',

headers: {

}

'Content-Type': 'application/json',

'x-api-key': process.env. ANTHROPIC_API_KEY,

'anthropic-version': '2023-06-01'

body: JSON.stringify({

model: 'claude-sonnet-4-20250514',

max tokens: 1800,

system,

↓

messages: [ role: 'user', content: user ]]
})

});

const data await response.json();

return { statusCode: 200, headers, body: JSON.stringify(data) };

} catch (err) {

} return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };

کا

};