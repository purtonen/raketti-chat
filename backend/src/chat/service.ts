import { WebPubSubServiceClient } from "@azure/web-pubsub";
import { DefaultAzureCredential } from "@azure/identity";

const connectionString = process.env.WPS_CONNECTION_STRING ?? "";

export async function getAccessToken(username: string, group: string) {
  // This is the hub name we used on Azure portal when generating the Client Access URL.
  // It ensures this server can push messages to clients in the hub named "chat".
  const hub = "chat";

  // Use DefaultAzureCredential to create a WebPubSubServiceClient
  // Reference: https://learn.microsoft.com/azure/azure-web-pubsub/howto-create-serviceclient-with-javascript-and-azure-identity
  let serviceClient = new WebPubSubServiceClient(connectionString, hub);

  // Generate Client Access Token
  const token = await serviceClient
    .getClientAccessToken(
      { userId: username, roles: ["webpubsub.sendToGroup", "webpubsub.joinLeaveGroup"], groups: [group], expirationTimeInMinutes: 15 }
    )
  return token;
}