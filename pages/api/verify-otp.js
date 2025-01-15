import fetch from 'node-fetch';



// Default export of handler function
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { phoneNumber, otp } = req.body;

    if (!phoneNumber || !otp) {
      return res.status(400).json({ success: false, message: 'Phone number and OTP are required' });
    }

    try {
      const twilioResponse = await verifyOtp(phoneNumber, otp);

      if (twilioResponse.status === 'approved') {
        return res.status(200).json({ success: true, message: 'OTP verified successfully' });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid OTP' });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return res.status(500).json({ success: false, message: 'Error verifying OTP' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

async function verifyOtp(phoneNumber, otp) {
  const response = await fetch(`https://verify.twilio.com/v2/Services/${process.env.VERIFY_SERVICE_SID}/VerificationCheck`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      To: phoneNumber,
      Code: otp,
    }),
  });

  const data = await response.json();
  return data;
}
