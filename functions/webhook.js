exports.handler = async function(event) {
  try {
    const data = JSON.parse(event.body);

    // log received data for debugging
    console.log("Received data:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Webhook received successfully", receivedData: data })
    };
  } catch (error) {
    console.error("❌ Error processing webhook:", error);

    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Webhook error: " + error.message })
    };
  }
};
