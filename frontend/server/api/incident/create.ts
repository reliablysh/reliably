import { Incident } from '@/types/incident';
import { sendEmail } from '@/server/utils/mail/resend';

export default defineEventHandler(async (event) => {
  const incident: Incident = await readBody(event);
  const user = getUserForEscalation(incident.assignTo);

  if (!user) {
    return { error: 'User not found' };
  }

  // Send an email to the user
  await sendEmail(
    'alert@getmoderator.com',
    user.email,
    `New Incident: ${incident.title}`,
    `
    Hello,

    A new incident has been reported:
    Title: ${incident.title}
    Description: ${incident.description}
    Priority: ${incident.priority}

    Please address this as soon as possible.
    `
  );

  return { success: true, message: 'Incident created and user notified' };
});

const getUserForEscalation = (escalationId: string) => {
    // Implement logic to find the user for the escalation ID
    return { userId: '1', email: 'abhishekray07@gmail.com' };
}
