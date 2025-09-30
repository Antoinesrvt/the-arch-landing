import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const server = {
  // Lead Magnet Email Capture
  captureEmail: defineAction({
    accept: 'form',
    input: z.object({
      email: z.string().email({ message: 'Adresse email invalide / Invalid email address' }),
      name: z.string().min(2, { message: 'Nom requis / Name required' }).optional(),
      language: z.enum(['fr', 'en']).default('fr'),
    }),
    handler: async ({ email, name, language }) => {
      // Initialize Resend inside handler to avoid startup errors
      const apiKey = import.meta.env.RESEND_API_KEY;
      
      if (!apiKey || apiKey === 're_your_key_here') {
        throw new ActionError({
          code: 'UNAUTHORIZED',
          message: language === 'fr' 
            ? '⚠️ Configuration email manquante. Contactez-nous directement.'
            : '⚠️ Email configuration missing. Please contact us directly.',
        });
      }
      
      const resend = new Resend(apiKey);
      
      try {
        // Send welcome email with lead magnet
        const { data, error } = await resend.emails.send({
          from: 'The Arch <onboarding@resend.dev>', // Change to your verified domain
          to: [email],
          subject: language === 'fr' 
            ? '🎁 Votre Guide Web3 - The Arch Consulting'
            : '🎁 Your Web3 Guide - The Arch Consulting',
          html: language === 'fr' ? `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
                  .content { background: #ffffff; padding: 40px 20px; border: 1px solid #e5e7eb; }
                  .button { display: inline-block; background: #8B5CF6; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
                  .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0; font-size: 28px;">🚀 Bienvenue chez The Arch!</h1>
                  </div>
                  
                  <div class="content">
                    <p style="font-size: 16px;">Bonjour${name ? ` ${name}` : ''},</p>
                    
                    <p>Merci de votre intérêt pour The Arch Consulting ! Nous sommes ravis de vous accompagner dans votre aventure Web3.</p>
                    
                    <p><strong>Voici votre guide complet pour lancer votre projet Web3 :</strong></p>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">📋 Les 10 Étapes Essentielles</h2>
                    
                    <ol style="padding-left: 20px;">
                      <li><strong>Définir votre Vision</strong> - Clarifiez votre proposition de valeur unique</li>
                      <li><strong>Architecture Technique</strong> - Choisissez la blockchain adaptée (Ethereum, Polygon, etc.)</li>
                      <li><strong>Tokenomics</strong> - Créez un modèle économique durable</li>
                      <li><strong>Smart Contracts</strong> - Développez et auditez vos contrats</li>
                      <li><strong>Sécurité</strong> - Audit de sécurité complet (obligatoire!)</li>
                      <li><strong>Interface Utilisateur</strong> - Design UX/UI Web3-native</li>
                      <li><strong>Communauté</strong> - Construisez avant de lancer</li>
                      <li><strong>Marketing</strong> - Stratégie de lancement 360°</li>
                      <li><strong>Fundraising</strong> - Levée de fonds ou bootstrap</li>
                      <li><strong>Lancement</strong> - Go-to-market et croissance</li>
                    </ol>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">💡 Notre Approche Unique</h2>
                    
                    <p>Contrairement aux agences traditionnelles :</p>
                    <ul>
                      <li>✅ <strong>3 fondateurs experts</strong> coordonnent votre stratégie</li>
                      <li>✅ <strong>Réseau de spécialistes</strong> pour l'exécution</li>
                      <li>✅ <strong>Plateforme média</strong> pour amplifier votre projet</li>
                      <li>✅ <strong>Suivi transparent</strong> à chaque étape</li>
                    </ul>
                    
                    <div style="text-align: center; margin: 40px 0;">
                      <a href="https://cal.com/thearch/meet-the-arch" class="button">
                        📅 Réserver une Consultation Gratuite
                      </a>
                    </div>
                    
                    <p style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; margin: 30px 0;">
                      <strong>🎁 Bonus :</strong> Les 30 premiers inscrits bénéficient d'un audit gratuit de leur tokenomics (valeur: 1500€)
                    </p>
                    
                    <p>Questions ? Répondez simplement à cet email, nous sommes là pour vous aider !</p>
                    
                    <p style="margin-top: 40px;">
                      À très bientôt,<br>
                      <strong>L'équipe The Arch</strong><br>
                      <span style="color: #8B5CF6;">Antoine, Aaron & Samir</span>
                    </p>
                  </div>
                  
                  <div class="footer">
                    <p><strong>The Arch Consulting</strong> - Votre Partenaire Web3 Complet</p>
                    <p>
                      <a href="https://thearch.consulting" style="color: #8B5CF6; text-decoration: none;">Website</a> • 
                      <a href="https://x.com/jointhearch" style="color: #8B5CF6; text-decoration: none;">Twitter</a> • 
                      <a href="https://www.linkedin.com/company/jointhearch/" style="color: #8B5CF6; text-decoration: none;">LinkedIn</a>
                    </p>
                    <p style="margin-top: 10px;">
                      <a href="#" style="color: #9ca3af; text-decoration: underline; font-size: 11px;">Se désinscrire</a>
                    </p>
                  </div>
                </div>
              </body>
            </html>
          ` : `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); color: white; padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0; }
                  .content { background: #ffffff; padding: 40px 20px; border: 1px solid #e5e7eb; }
                  .button { display: inline-block; background: #8B5CF6; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
                  .footer { background: #f9fafb; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1 style="margin: 0; font-size: 28px;">🚀 Welcome to The Arch!</h1>
                  </div>
                  
                  <div class="content">
                    <p style="font-size: 16px;">Hello${name ? ` ${name}` : ''},</p>
                    
                    <p>Thank you for your interest in The Arch Consulting! We're excited to support you on your Web3 journey.</p>
                    
                    <p><strong>Here's your complete guide to launching your Web3 project:</strong></p>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">📋 10 Essential Steps</h2>
                    
                    <ol style="padding-left: 20px;">
                      <li><strong>Define Your Vision</strong> - Clarify your unique value proposition</li>
                      <li><strong>Technical Architecture</strong> - Choose the right blockchain (Ethereum, Polygon, etc.)</li>
                      <li><strong>Tokenomics</strong> - Create a sustainable economic model</li>
                      <li><strong>Smart Contracts</strong> - Develop and audit your contracts</li>
                      <li><strong>Security</strong> - Comprehensive security audit (mandatory!)</li>
                      <li><strong>User Interface</strong> - Web3-native UX/UI design</li>
                      <li><strong>Community</strong> - Build before you launch</li>
                      <li><strong>Marketing</strong> - 360° launch strategy</li>
                      <li><strong>Fundraising</strong> - Raise funds or bootstrap</li>
                      <li><strong>Launch</strong> - Go-to-market and growth</li>
                    </ol>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">💡 Our Unique Approach</h2>
                    
                    <p>Unlike traditional agencies:</p>
                    <ul>
                      <li>✅ <strong>3 expert founders</strong> coordinate your strategy</li>
                      <li>✅ <strong>Specialist network</strong> for execution</li>
                      <li>✅ <strong>Media platform</strong> to amplify your project</li>
                      <li>✅ <strong>Transparent tracking</strong> at every step</li>
                    </ul>
                    
                    <div style="text-align: center; margin: 40px 0;">
                      <a href="https://cal.com/thearch/meet-the-arch" class="button">
                        📅 Book a Free Consultation
                      </a>
                    </div>
                    
                    <p style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; margin: 30px 0;">
                      <strong>🎁 Bonus:</strong> First 30 signups get a free tokenomics audit (value: €1500)
                    </p>
                    
                    <p>Questions? Just reply to this email, we're here to help!</p>
                    
                    <p style="margin-top: 40px;">
                      See you soon,<br>
                      <strong>The Arch Team</strong><br>
                      <span style="color: #8B5CF6;">Antoine, Aaron & Samir</span>
                    </p>
                  </div>
                  
                  <div class="footer">
                    <p><strong>The Arch Consulting</strong> - Your Complete Web3 Partner</p>
                    <p>
                      <a href="https://thearch.consulting" style="color: #8B5CF6; text-decoration: none;">Website</a> • 
                      <a href="https://x.com/jointhearch" style="color: #8B5CF6; text-decoration: none;">Twitter</a> • 
                      <a href="https://www.linkedin.com/company/jointhearch/" style="color: #8B5CF6; text-decoration: none;">LinkedIn</a>
                    </p>
                    <p style="margin-top: 10px;">
                      <a href="#" style="color: #9ca3af; text-decoration: underline; font-size: 11px;">Unsubscribe</a>
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,
        });

        if (error) {
          console.error('Resend error:', error);
          throw new ActionError({
            code: 'BAD_REQUEST',
            message: language === 'fr' 
              ? `Erreur lors de l'envoi: ${error.message}`
              : `Send error: ${error.message}`,
          });
        }

        // Track successful email capture
        console.log('✅ Email captured:', email, 'ID:', data?.id);

        return { 
          success: true, 
          message: language === 'fr' 
            ? 'Email envoyé avec succès ! Vérifiez votre boîte de réception.' 
            : 'Email sent successfully! Check your inbox.',
          emailId: data?.id 
        };
      } catch (error) {
        console.error('Email capture error:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: language === 'fr' 
            ? 'Une erreur est survenue. Veuillez réessayer.' 
            : 'An error occurred. Please try again.',
        });
      }
    },
  }),
};
