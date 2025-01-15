import twilio from 'twilio';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      return res.status(400).json({ success: false, message: 'Phone number is required' });
    }

    try {
      // Twilio credentials from environment variables
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const serviceSid = process.env.TWILIO_SERVICE_SID; // Verify service SID

      // Initialize Twilio client
      const client = twilio(accountSid, authToken);

      // Send verification request
      const verification = await client.verify.services(serviceSid)
        .verifications
        .create({ to: phoneNumber, channel: 'sms' });

      return res.status(200).json({ success: true, message: 'OTP sent successfully', verification });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Failed to send OTP', error: error.message });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
