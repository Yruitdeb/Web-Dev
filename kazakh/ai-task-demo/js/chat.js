async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const userText = input.value;

    if (userText === "") return;

    chatBox.innerHTML += `<div class="user">You: ${userText}</div>`;

    input.value = "";

    // Optional: loading message
    chatBox.innerHTML += `<div class="ai">AI: typing...</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;

    // ✅ WAIT for AI response
    const aiReply = await getAIResponse(userText);

    // remove "typing..."
    chatBox.lastChild.remove();

    // show real response
    chatBox.innerHTML += `<div class="ai">AI: ${aiReply}</div>`;

    chatBox.scrollTop = chatBox.scrollHeight;
}
