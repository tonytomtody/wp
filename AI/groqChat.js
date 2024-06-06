import Groq from "npm:groq-sdk"

let question;
let output = document.getElementById("output");

const groq = new Groq({
    apiKey: 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
});

async function getGroqChatCompletion() {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: question // "Explain the importance of fast language models"
            }
        ],
        model: "llama3-8b-8192"
    });
}

async function main() {
    question =  document.getElementById("question").value;
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    console.log(chatCompletion.choices[0]?.message?.content || "");
    output.innerHTML = chatCompletion.choices[0]?.message?.content || "";
}
function translate() {
    main();
}