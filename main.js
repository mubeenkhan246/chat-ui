 $(document).ready(function() {
  // Demo Users
  const users = [
    { name: "Mubeen", image: "assets/user.png" },
    { name: "Ali", image: "assets/user.png" },
    { name: "Mansoor", image: "assets/user.png" },
    { name: "Shahbaz", image: "assets/user.png" },
    { name: "Umair", image: "assets/user.png" },
    { name: "Saqib", image: "assets/user.png" }
  ];

  // Display users in the contact list
  function displayUsers() {
    const contactList = $("#contact-list");
    contactList.empty();

    users.forEach(user => {
      const listItem = $("<li>")
        .addClass("list-group-item")
        .html(`<img src="${user.image}" alt="${user.name}" class="profile-image">${user.name}`);
      listItem.data("user", user); // Attach user object to the list item
      contactList.append(listItem);
    });
  }

  // Display chat messages
  function displayChatMessages(user) {
    const chatMessages = $("#chat-messages");
    chatMessages.empty();

    // You can add logic here to load chat messages for the selected user from a database

    // Sample code to display a welcome message
    const welcomeMessage = $("<p>")
      .addClass("text-center")
      .text(`Welcome to the chat with ${user.name}`);
    chatMessages.append(welcomeMessage);
  }

  // Handle contact selection
  function handleContactSelection() {
    const selectedUser = $(this).data("user");
    displayChatMessages(selectedUser);

    // Add active class to the selected contact
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");
  }

  // Handle search input
  $("#search-input").on("input", function() {
    const searchValue = $(this).val().toLowerCase();

    users.forEach(user => {
      const listItem = $(`#contact-list li:contains(${user.name})`);
      if (user.name.toLowerCase().includes(searchValue)) {
        listItem.show();
      } else {
        listItem.hide();
      }
    });
  });

  // Handle send button click
  $("#send-btn").click(function() {
    const messageInput = $("#message-input");
    const message = messageInput.val().trim();

    if (message !== "") {
      // Add logic here to send the message to the selected user
      // and update the chat messages in the database

      const chatMessages = $("#chat-messages");
      const messageElement = $("<p>").text(message);
      chatMessages.append(messageElement);

      messageInput.val("");
      messageInput.focus();
    }
  });

  // Attach event handlers
  $("#contact-list").on("click", "li", handleContactSelection);

  // Display initial contact list
  displayUsers();
});