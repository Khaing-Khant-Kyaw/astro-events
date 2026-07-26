import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
/// there is a group of content called events. To find them, look in the folder src/content/events for any file ending in .md
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }), 
  schema: z.object({
    title: z.string(),
    date: z.date(),
    artist: z.string(),
    price: z.number(),
    capacity: z.number(),
  }),
});
// every event must have these five fields
export const collections = { events };

/* this whole set up is for content only 
Content = what users read on the site.

Event names, descriptions, dates, prices
Blog posts, product descriptions, about-page copy
Anything that changes without changing how the site works

Code = how the site works.

Page layouts, styling, buttons, forms
Logic ("if the user is logged in, show this")
The templates that turn content into HTML

so someone from marketing person can come and open md file and change the price
and developer me rules once (content.config.ts) and the templates once.\AI friendly too markdown language
*/

