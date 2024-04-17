document.addEventListener('DOMContentLoaded', function () {
    const messageContainer = document.getElementById('messageContainer');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const chatWindow = document.getElementById('chatWindow');

    // Function to add a message to the chat window
    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.className = sender === 'user' ? 'flex items-end justify-end space-x-2' : 'flex items-start justify-start space-x-2';
        messageElement.innerHTML = `
            <div class="${sender === 'user' ? 'bg-green-100' : 'bg-blue-100'} p-2 rounded-lg">
                <p class="text-sm ${sender === 'user' ? 'text-green-900' : 'text-blue-900'}">${message}</p>
            </div>
            ${sender === 'user' ? '<img src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="User Avatar" class="w-8 h-8 rounded-full">' : '<img src="https://i.pinimg.com/originals/02/c5/a8/02c5a82909a225411008d772ee6b7d62.png" alt="Bot Avatar" class="w-8 h-8 rounded-full">'}
        `;
        messageContainer.appendChild(messageElement);
        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Function to send a message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== '') {
            addMessage(message, 'user');
            messageInput.value = ''; // Clear the input field

            // Simulate bot response (replace this with actual API call)
            setTimeout(() => {
                addMessage('This is a bot response.', 'bot');
            }, 500);
        }
    }

    // Event listener for sending message button click
    sendMessageBtn.addEventListener('click', sendMessage);

    // Event listener for pressing Enter key in the message input field
    messageInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
