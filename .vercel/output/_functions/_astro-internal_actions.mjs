import 'kleur/colors';
import { g as getActionQueryString, a as astroCalledServerError, A as ActionError, d as deserializeActionResult, b as ACTION_QUERY_PARAMS, c as appendForwardSlash } from './chunks/astro-designed-error-pages_xbiF7iSF.mjs';
import 'es-module-lexer';
import './chunks/astro/server_DItPYgB8.mjs';
import 'clsx';
import 'cookie';
import * as z from 'zod';
import { Resend } from 'resend';
import { a as defineAction } from './chunks/index_DpsKJRqY.mjs';

const apiContextRoutesSymbol = Symbol.for("context.routes");
const ENCODED_DOT = "%2E";
function toActionProxy(actionCallback = {}, aggregatedPath = "") {
  return new Proxy(actionCallback, {
    get(target, objKey) {
      if (target.hasOwnProperty(objKey) || typeof objKey === "symbol") {
        return target[objKey];
      }
      const path = aggregatedPath + encodeURIComponent(objKey.toString()).replaceAll(".", ENCODED_DOT);
      function action(param) {
        return handleAction(param, path, this);
      }
      Object.assign(action, {
        queryString: getActionQueryString(path),
        toString: () => action.queryString,
        // redefine prototype methods as the object's own property, not the prototype's
        bind: action.bind,
        valueOf: () => action.valueOf,
        // Progressive enhancement info for React.
        $$FORM_ACTION: function() {
          const searchParams = new URLSearchParams(action.toString());
          return {
            method: "POST",
            // `name` creates a hidden input.
            // It's unused by Astro, but we can't turn this off.
            // At least use a name that won't conflict with a user's formData.
            name: "_astroAction",
            action: "?" + searchParams.toString()
          };
        },
        // Note: `orThrow` does not have progressive enhancement info.
        // If you want to throw exceptions,
        //  you must handle those exceptions with client JS.
        async orThrow(param) {
          const { data, error } = await handleAction(param, path, this);
          if (error) throw error;
          return data;
        }
      });
      return toActionProxy(action, path + ".");
    }
  });
}
function getActionPath(action) {
  let path = `${"/".replace(/\/$/, "")}/_actions/${new URLSearchParams(action.toString()).get(ACTION_QUERY_PARAMS.actionName)}`;
  {
    path = appendForwardSlash(path);
  }
  return path;
}
async function handleAction(param, path, context) {
  if (context) {
    const pipeline = Reflect.get(context, apiContextRoutesSymbol);
    if (!pipeline) {
      throw astroCalledServerError();
    }
    const action = await pipeline.getAction(path);
    if (!action) throw new Error(`Action not found: ${path}`);
    return action.bind(context)(param);
  }
  const headers = new Headers();
  headers.set("Accept", "application/json");
  let body = param;
  if (!(body instanceof FormData)) {
    try {
      body = JSON.stringify(param);
    } catch (e) {
      throw new ActionError({
        code: "BAD_REQUEST",
        message: `Failed to serialize request body to JSON. Full error: ${e.message}`
      });
    }
    if (body) {
      headers.set("Content-Type", "application/json");
    } else {
      headers.set("Content-Length", "0");
    }
  }
  const rawResult = await fetch(
    getActionPath({
      toString() {
        return getActionQueryString(path);
      }
    }),
    {
      method: "POST",
      body,
      headers
    }
  );
  if (rawResult.status === 204) {
    return deserializeActionResult({ type: "empty", status: 204 });
  }
  return deserializeActionResult({
    type: rawResult.ok ? "data" : "error",
    body: await rawResult.text()
  });
}
toActionProxy();

const server = {
  // Lead Magnet Email Capture
  captureEmail: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email({ message: "Adresse email invalide / Invalid email address" }),
      name: z.string().min(2, { message: "Nom requis / Name required" }).optional(),
      language: z.enum(["fr", "en"]).default("fr")
    }),
    handler: async ({ email, name, language }) => {
      const apiKey = "re_XAQAyssT_E6Dtj7afjSnZqxkLoFKadqvR";
      const resend = new Resend(apiKey);
      try {
        const { data, error } = await resend.emails.send({
          from: "The Arch <onboarding@resend.dev>",
          // Change to your verified domain
          to: [email],
          subject: language === "fr" ? "📧 Bienvenue dans notre Newsletter Web3 - The Arch Consulting" : "📧 Welcome to our Web3 Newsletter - The Arch Consulting",
          html: language === "fr" ? `
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
                    <h1 style="margin: 0; font-size: 28px;">📧 Bienvenue dans notre Newsletter !</h1>
                  </div>
                  
                  <div class="content">
                    <p style="font-size: 16px;">Bonjour${name ? ` ${name}` : ""},</p>
                    
                    <p>Merci de vous être inscrit à notre newsletter ! Nous sommes ravis de partager avec vous nos insights Web3 et de vous tenir informé des dernières tendances du marché.</p>
                    
                    <p><strong>Ce que vous allez recevoir chaque semaine :</strong></p>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">📊 Nos Analyses Exclusives</h2>
                    
                    <ul style="padding-left: 20px;">
                      <li><strong>Insights Web3</strong> - Analyses approfondies des tendances blockchain</li>
                      <li><strong>Marché & Tokenomics</strong> - Évolutions des modèles économiques</li>
                      <li><strong>Technologies émergentes</strong> - DeFi, NFT, DAO, et plus encore</li>
                      <li><strong>Opportunités d'investissement</strong> - Projets prometteurs à suivre</li>
                      <li><strong>Réglementation</strong> - Mise à jour sur l'évolution légale</li>
                    </ul>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">🎯 Contenu Personnalisé</h2>
                    
                    <p>Notre équipe d'experts vous propose :</p>
                    <ul>
                      <li>✅ <strong>Analyses de marché</strong> hebdomadaires</li>
                      <li>✅ <strong>Interviews exclusives</strong> avec des leaders Web3</li>
                      <li>✅ <strong>Cas d'étude</strong> de projets réussis</li>
                      <li>✅ <strong>Accès prioritaire</strong> à nos événements</li>
                    </ul>
                    
                    <div style="text-align: center; margin: 40px 0;">
                      <a href="https://cal.com/thearch/meet-the-arch" class="button">
                        📅 Réserver une Consultation Gratuite
                      </a>
                    </div>
                    
                    <p style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; margin: 30px 0;">
                      <strong>🎁 Bonus :</strong> Accès exclusif à notre communauté Discord et aux événements privés
                    </p>
                    
                    <p>Des questions ? Répondez simplement à cet email, nous sommes là pour vous aider !</p>
                    
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
                    <h1 style="margin: 0; font-size: 28px;">📧 Welcome to our Newsletter!</h1>
                  </div>
                  
                  <div class="content">
                    <p style="font-size: 16px;">Hello${name ? ` ${name}` : ""},</p>
                    
                    <p>Thank you for subscribing to our newsletter! We're excited to share our Web3 insights with you and keep you informed about the latest market trends.</p>
                    
                    <p><strong>What you'll receive every week:</strong></p>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">📊 Our Exclusive Analysis</h2>
                    
                    <ul style="padding-left: 20px;">
                      <li><strong>Web3 Insights</strong> - In-depth analysis of blockchain trends</li>
                      <li><strong>Market & Tokenomics</strong> - Evolution of economic models</li>
                      <li><strong>Emerging Technologies</strong> - DeFi, NFT, DAO, and more</li>
                      <li><strong>Investment Opportunities</strong> - Promising projects to watch</li>
                      <li><strong>Regulation</strong> - Updates on legal developments</li>
                    </ul>
                    
                    <h2 style="color: #8B5CF6; font-size: 20px; margin-top: 30px;">🎯 Personalized Content</h2>
                    
                    <p>Our expert team provides:</p>
                    <ul>
                      <li>✅ <strong>Weekly market analysis</strong></li>
                      <li>✅ <strong>Exclusive interviews</strong> with Web3 leaders</li>
                      <li>✅ <strong>Case studies</strong> of successful projects</li>
                      <li>✅ <strong>Priority access</strong> to our events</li>
                    </ul>
                    
                    <div style="text-align: center; margin: 40px 0;">
                      <a href="https://cal.com/thearch/meet-the-arch" class="button">
                        📅 Book a Free Consultation
                      </a>
                    </div>
                    
                    <p style="background: #f0fdf4; border-left: 4px solid #22c55e; padding: 15px; margin: 30px 0;">
                      <strong>🎁 Bonus:</strong> Exclusive access to our Discord community and private events
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
          `
        });
        if (error) {
          console.error("Resend error:", error);
          throw new ActionError({
            code: "BAD_REQUEST",
            message: language === "fr" ? `Erreur lors de l'envoi: ${error.message}` : `Send error: ${error.message}`
          });
        }
        console.log("✅ Email captured:", email, "ID:", data?.id);
        return {
          success: true,
          message: language === "fr" ? "Email envoyé avec succès ! Vérifiez votre boîte de réception." : "Email sent successfully! Check your inbox.",
          emailId: data?.id
        };
      } catch (error) {
        console.error("Email capture error:", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: language === "fr" ? "Une erreur est survenue. Veuillez réessayer." : "An error occurred. Please try again."
        });
      }
    }
  })
};

export { server };
