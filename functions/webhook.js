exports.handler = async (event, context) => {
  const webhookData = JSON.parse(event.body);

  console.log("✅ RealtorGPT Webhook Data:", webhookData);

  // You can later customize what happens here with the data
  
  return {
    statusCode: 200,
    body: JSON.stringify({ status: "success" }),
  };
};
