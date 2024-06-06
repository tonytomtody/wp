let question;
let output = document.getElementById("output");

function ai()
{question =  document.getElementById("question").value;
  const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
{
    body: JSON.stringify({
        "model": "llama3-8b-8192",
        "messages": [{"role": "user", "content": question}],
        "temperature": 0.7
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Deno.env.get('GROQ_API_KEY')}`,
    }
})
const jsonData = await jsonResponse.json()
console.log(JSON.stringify(jsonData, null, 2))
output.innerHTML = chatCompletion.choices[0]?.message?.content || "";
}
