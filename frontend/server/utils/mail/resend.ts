
export const sendEmail = async (from, to, subject, html) => {
    const config = useRuntimeConfig();
    const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.resendApiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    throw new Error("Could not send email");
  }
};
