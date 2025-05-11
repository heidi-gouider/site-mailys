// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' })
  }

  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs requis manquants' })
  }

  try {
    await sendgrid.send({
      to: 'gouider.heidi@gmail.com',
      from: 'gouider.heidi@gmail.com', // Adresse vérifiée sur SendGrid
      subject: `Nouveau message de ${name}`,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({ error: 'Erreur lors de l\'envoi' })
  }
}