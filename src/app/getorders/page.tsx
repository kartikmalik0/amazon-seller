import axios from 'axios';

const page = async () => {

    const clientId = "amzn1.application-oa2-client.08cfd2a1525c487e95ded6e76b5f929b"
    const clientSecret = "amzn1.oa2-cs.v1.cda1b610e8786f346ef3aa2a203c6b32853fd29e852fae570bca9b5b391cb5a2"
    const refreshToken = "Atzr|IwEBIN2nqXSpng5UjxCxz-Z1X0Nf3CSzs6a7BISQ_Lj8BzD4hxTgUB2nVWruDySGyDjaiLZwBSLi_3c8sOQa9k7juU62k9vuq6aq_t0tMrn4Ve0vjPSCwDMVGQOZOF2ucL0s2egtDPgwiyrRBdeJQyjM0TwbGsrBDYob2Kej0VnDWsbKBc6vS_qVgOvU675T23Rv6bYIHyiXYG5YYL8iUTIxfLBmx7cLVIlOCCeD_GQbYvKxehold_QX0EKxMSvGL2QgI-Ax4FFBgYEowq1VL_uRMKqZUyzNCZWq9HoukSkqaFxvEQ5kngzEwAtJ8gUeilHdDD4RfiR6oF0FW6W5_CctGSnF"

    const endpoint = 'https://sellingpartnerapi-eu.amazon.com';
    const marketplaceId = 'A21TJRUUN4KGV';

    async function getOrders() {
        try {
            // Access token retrieval (might be a separate API call depending on your setup)
            const tokenResponse = await axios.post('https://api.amazon.com/auth/o2/token', {
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id: clientId,
                client_secret: clientSecret,
            });
            const accessToken = tokenResponse.data.access_token;

            // Build request parameters
            const createdAfter = (new Date(Date.now() - 10 * 24 * 60 * 60 * 1000)).toISOString(); // Orders created since 30 days ago
            const requestParams = {
                MarketplaceIds: marketplaceId,
                CreatedAfter: createdAfter,
            };

            // Make request to get orders (GET request)
            const response = await axios.get(`${endpoint}/orders/v0/orders?${marketplaceId}`, {
                params: requestParams,
                headers: {
                    'x-amz-access-token': accessToken,
                },
            });

            return JSON.stringify(response.data); // Return the data for further use
        } catch (error) {
            // console.error(error);
            return null; // Handle errors and potentially return null
        }
    }

    const orderData = await getOrders()
    console.log(orderData, "Order Data ------================================")

    return (
        <div>

        </div>
    )
}

export default page
